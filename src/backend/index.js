require("dotenv").config();
const express = require("express");
const bcrypt = require("bcrypt");
const { Pool } = require("pg");
const moment = require("moment-timezone");
const jwt = require("jsonwebtoken");
const cookie = require("cookie");

const app = express();
app.use(express.json());

// ========== CORS MIDDLEWARE ==========
app.use((req, res, next) => {
    const allowedOrigins = [
        "https://www.elementsenergies.com",
        "https://elementsenergies.com",
        /^https:\/\/.*\.elementsenergies\.com$/ // allow subdomains
    ];

    const origin = req.headers.origin;

    const isAllowed = allowedOrigins.some((allowed) => {
        if (typeof allowed === "string") return allowed === origin;
        return allowed.test(origin);
    });

    if (isAllowed) {
        res.setHeader("Access-Control-Allow-Origin", origin);
        res.setHeader("Access-Control-Allow-Credentials", "true");
    }

    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PUT, DELETE, OPTIONS, PATCH"
    );
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Content-Type, Authorization, Cookie, X-Requested-With"
    );
    res.setHeader("Access-Control-Max-Age", "86400");

    if (req.method === "OPTIONS") {
        return res.status(204).end();
    }

    next();
});
// ========================================================================

app.use((req, res, next) => {
    console.log(`\nIncoming Request: ${req.method} ${req.url}`);
    console.log("Request Headers:", req.headers);
    next();
});

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT
});

app.set("trust proxy", true);

// ================= LOGIN API =================
app.post("/login", async (req, res) => {
    console.log("Received login request:", req.body);

    const { username, password } = req.body;

    try {
        const result = await pool.query(
            "SELECT * FROM users WHERE username = $1",
            [username]
        );

        if (result.rows.length === 0) {
            console.log("User not found");
            return res.status(404).json({ error: "User not found" });
        }

        const user = result.rows[0];
        console.log(`User found: ${user.username}`);

        const match = await bcrypt.compare(password, user.password);

        if (!match) {
            console.log("Invalid credentials");
            return res.status(401).json({ error: "Invalid credentials" });
        }

        const rawIp = req.headers["x-forwarded-for"] || req.socket.remoteAddress;
        const ipAddress = rawIp?.includes("::ffff:")
            ? rawIp.split("::ffff:")[1]
            : rawIp;

        const deviceName = req.headers["user-agent"];

        const payload = {
            auth: "true",
            username,
            deviceName,
            ipAddress
        };

        const token = jwt.sign(payload, process.env.JWT_SECRET, {
            expiresIn: process.env.JWT_EXPIRES_IN
        });

        res.setHeader(
            "Set-Cookie",
            cookie.serialize("token", token, {
                httpOnly: false,
                secure: true,
                sameSite: "None",
                domain: ".elementsenergies.com",
                path: "/",
                maxAge: 60 * 60 * 24
            })
        );

        const clientInstanceUrl = `https://${user.client}.elementsenergies.com`;

        console.log("Login successful, redirecting to:", clientInstanceUrl);

        res.json({ message: "Login successful", redirectUrl: clientInstanceUrl });
    } catch (err) {
        console.error("Error during login:", err);
        res.status(500).json({ error: "Server error" });
    }
});

// Log response headers for debugging
app.use((req, res, next) => {
    res.on("finish", () => {
        console.log("Response Headers:", res.getHeaders());
    });
    next();
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`✅ Server running on port ${PORT}`);
});
