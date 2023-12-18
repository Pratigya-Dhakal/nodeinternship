require('dotenv').config();

const SECRET = process.env.JWT_SECRET || 'secret';

const jwt = require('jsonwebtoken');

const generateToken = (id) => {
// Pass the 'id' as a parameter to the function
const token = jwt.sign({ id }, SECRET, { expiresIn: '1h' });
return token;
};

const verifyToken = (token) => {
try {
    const decoded = jwt.verify(token, SECRET);
    return decoded;
} catch (error) {
    return null;
}
};

module.exports = { generateToken, verifyToken };
