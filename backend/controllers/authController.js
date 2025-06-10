const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../config/db'); // MySQL connection

// ✅ Register User
exports.register = async (req, res) => {
  const { username, email, password, role } = req.body;
  console.log('📩 Received registration:', req.body); // 🧪 Log incoming data

  try {
    if (!username || !email || !password) {
      console.log('❌ Missing fields');
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Check for existing email
    const [existingUsers] = await db.query('SELECT * FROM users WHERE email = ?', [email]);
    if (existingUsers.length > 0) {
      console.log('⚠️ Email already exists:', email);
      return res.status(400).json({ message: 'Email already exists' });
    }

    // Hash password
    const passwordHash = await bcrypt.hash(password, 10);

    // Insert user
    const [result] = await db.query(
      'INSERT INTO users (username, email, passwordHash, role) VALUES (?, ?, ?, ?)',
      [username, email, passwordHash, role || 'peer']
    );

    console.log(`✅ User registered: ${email} (ID: ${result.insertId})`);
    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    console.error('❌ Registration Error:', err);
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

// ✅ Login User
exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const [users] = await db.query('SELECT * FROM users WHERE email = ?', [email]);
    if (users.length === 0) {
      return res.status(404).json({ message: 'User not found' });
    }

    const user = users[0];
    const isMatch = await bcrypt.compare(password, user.passwordHash);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign(
      { id: user.id, role: user.role },
      process.env.JWT_SECRET || 'mysecret',
      { expiresIn: '1d' }
    );

    res.json({
      token,
      user: {
        id: user.id,
        username: user.username,
        role: user.role,
      },
    });
  } catch (err) {
    console.error('❌ Login Error:', err);
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

// ✅ Get All Users
exports.getUsers = async (req, res) => {
  try {
    const [users] = await db.query('SELECT id, username, role FROM users');
    res.json(users);
  } catch (err) {
    console.error('❌ GetUsers Error:', err);
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};
