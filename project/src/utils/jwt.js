require('dotenv').config();

const SECRET = process.env.JWT_SECRET || 'secret';

const jwt = require('jsonwebtoken');

const generateToken = (id) => {
const token = jwt.sign({ id }, SECRET, { expiresIn: '1h' });
return token;
};

const verifyToken = (token) => {
try {
    const decoded = jwt.verify(token, SECRET);
    return decoded;
} catch (error) {
    console.error('Token verification error:', error.message);
    return null;
}
};

module.exports = { generateToken, verifyToken };
