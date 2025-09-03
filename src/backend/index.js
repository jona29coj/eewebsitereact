require("dotenv").config();
const express = require("express");
const bcrypt = require("bcrypt");
const { Pool } = require("pg");
const moment = require('moment-timezone');
const currentUtcTime = new Date();
const istTime = moment(currentUtcTime).tz('Asia/Kolkata').format('YYYY-MM-DD HH:mm:ss');


const app = express();
const cookie = require("cookie");
const crypto = require('crypto');

const ENCRYPTION_KEY = '9cF7Gk2MZpQ8XvT5LbR3NdYqWjK6HsA4';
const IV_LENGTH = 16;

function encrypt(text) {
    const iv = crypto.randomBytes(IV_LENGTH);
    const cipher = crypto.createCipheriv('aes-256-cbc', ENCRYPTION_KEY, iv);
    let encrypted = cipher.update(text, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    return iv.toString('hex') + ':' + encrypted;
}


app.use(express.json());


app.use((req, res, next) => {
    console.log(`\nIncoming Request: ${req.method} ${req.url}`);
    console.log('Request Headers:', req.headers);
    next();
});


const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});

app.set('trust proxy', true); 


app.post("/login", async (req, res) => {
    console.log('Received login request:', req.body); 

    const { username, password } = req.body; 

    try {
        console.log(`Querying database for username: ${username}`);
        const result = await pool.query("SELECT * FROM users WHERE username = $1", [username]); 

        if (result.rows.length === 0) {
            console.log('User not found');
            return res.status(404).json({ error: "User not found" });
        }
        const user = result.rows[0];
        console.log(`User found: ${user.username}`);

        const match = await bcrypt.compare(password, user.password);

        if (!match) {
            console.log('Invalid credentials');
            return res.status(401).json({ error: "Invalid credentials" });
        }
       
        const rawIp = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
        const ipAddress = rawIp?.includes('::ffff:') ? rawIp.split('::ffff:')[1] : rawIp;
        const deviceName = req.headers["user-agent"];

        const cookieData = {
           auth: "true",
           username: username,
           deviceName: deviceName,
           ipAddress: ipAddress,
        };

        const encryptedValue = encrypt(JSON.stringify(cookieData));

         res.setHeader("Set-Cookie", cookie.serialize("authData", encryptedValue, {
            httpOnly: false,             
            secure: true,              
            sameSite: "None",           
            domain: ".elementsenergies.com",        
            path: "/",                  
            maxAge: 60 * 60 * 24        
        }));
                
        const client = user.client; 
        const clientInstanceUrl = `https://${client}.elementsenergies.com`;

        console.log('Login successful, redirecting to:', clientInstanceUrl);

        res.json({ message: "Login successful", redirectUrl: clientInstanceUrl });
    } catch (err) {
        console.error('Error during login:', err);
        res.status(500).json({ error: "Server error" });
    }
});

app.use((req, res, next) => {
    res.on('finish', () => {
        console.log('Response Headers:', res.getHeaders());
    });
    next();
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`✅ Server running on port ${PORT}`);
});