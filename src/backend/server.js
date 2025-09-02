require("dotenv").config();
const express = require("express");
const bcrypt = require("bcrypt");
const { Pool } = require("pg");
const crypto = require("crypto");
const cookie = require("cookie");

const app = express();
const PORT = process.env.PORT || 3000;

const ENCRYPTION_KEY = process.env.ENCRYPTION_KEY; // store in .env
const IV_LENGTH = 16;

function encrypt(text) {
  const iv = crypto.randomBytes(IV_LENGTH);
  const cipher = crypto.createCipheriv("aes-256-cbc", ENCRYPTION_KEY, iv);
  let encrypted = cipher.update(text, "utf8", "hex");
  encrypted += cipher.final("hex");
  return iv.toString("hex") + ":" + encrypted;
}

app.use(express.json());

// ✅ Postgres pool
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

// ✅ Login
app.post("/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    const result = await pool.query("SELECT * FROM users WHERE username = $1", [username]);

    if (result.rows.length === 0) {
      return res.status(404).json({ error: "User not found" });
    }

    const user = result.rows[0];
    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(401).json({ error: "Invalid credentials" });

    const cookieData = { auth: "true", username: user.username };
    const encryptedValue = encrypt(JSON.stringify(cookieData));

    res.setHeader(
      "Set-Cookie",
      cookie.serialize("authData", encryptedValue, {
        httpOnly: false,
        secure: true,
        sameSite: "None",
        domain: ".elementsenergies.com",
        path: "/",
        maxAge: 60 * 60 * 24,
      })
    );

    const clientInstanceUrl = `https://${user.client}.elementsenergies.com`;
    res.json({ message: "Login successful", redirectUrl: clientInstanceUrl });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

app.listen(PORT, () => console.log(`✅ Hosted server running on port ${PORT}`));
