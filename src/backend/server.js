const express = require('express');
const mysql = require('mysql2');
const bcrypt = require('bcrypt');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser'); // ✅ Add this

const app = express();
const PORT = 3001;

const JWT_SECRET = 'jwtkey!';

// ✅ CORS configuration with credentials
app.use(cors({
  origin: 'http://localhost:3000', // your frontend domain
  credentials: true
}));

app.use(express.json());
app.use(cookieParser()); // ✅ Add this

// MySQL connection pool
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'elementsenergy_123',
  database: 'login'
});

// ✅ Register
app.post('/register', async (req, res) => {
  const { email, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    pool.query(
      'INSERT INTO user (email, password) VALUES (?, ?)',
      [email, hashedPassword],
      (err, result) => {
        if (err) {
          if (err.code === 'ER_DUP_ENTRY') {
            return res.status(400).json({ error: 'Email already registered' });
          }
          return res.status(500).json({ error: 'Database error during registration' });
        }
        res.status(201).json({ message: 'User registered successfully' });
      }
    );
  } catch (error) {
    res.status(500).json({ error: 'Server error while registering' });
  }
});

// ✅ Login (Set JWT cookie)
app.post('/login', (req, res) => {
  const { email, password } = req.body;

  pool.query('SELECT * FROM user WHERE email = ?', [email], async (err, results) => {
    if (err) return res.status(500).json({ error: 'Database error during login' });

    if (results.length === 0) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    const user = results[0];
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) return res.status(401).json({ error: 'Invalid email or password' });

    const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, {
      expiresIn: '1h'
    });

    // ✅ Set token in httpOnly cookie
    res.cookie('authToken', token, {
      httpOnly: true,
      secure: false, // set to true if using HTTPS
      sameSite: 'Lax',
      maxAge: 3600000 // 1 hour
    });

    res.status(200).json({ message: 'Login successful' });
  });
});

// ✅ JWT Middleware (reads from cookie)
function authenticateToken(req, res, next) {
  const token = req.cookies.authToken;

  if (!token) return res.status(401).json({ error: 'No token provided' });

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ error: 'Invalid or expired token' });
    req.user = user;
    next();
  });
}

// ✅ Protected route
app.get('/protected', authenticateToken, (req, res) => {
  res.json({
    message: `Welcome, ${req.user.email}!`,
    userId: req.user.id
  });
});

// ✅ Logout route (clears cookie)
app.post('/logout', (req, res) => {
  res.clearCookie('authToken');
  res.json({ message: 'Logged out' });
});

// ✅ Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
