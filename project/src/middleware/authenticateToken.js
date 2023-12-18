// src/middleware/authenticateToken.js
const { verifyToken } = require('../utils/jwt');

function authenticateToken(req, res, next) {
const token = req.header('Authorization');

if (!token) return res.status(401).json({ error: 'Unauthorized' });

const decoded = verifyToken(token);

if (!decoded) return res.status(403).json({ error: 'Forbidden' });

req.user = decoded;

next();
}

module.exports = authenticateToken;
