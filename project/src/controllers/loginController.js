const bcrypt = require('bcrypt');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const { generateToken } = require('../utils/jwt');

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await prisma.user.findUnique({
            where: {
                email: email,
            },
            select: {
                id: true,
                name: true,
                dob: true,
                email: true,
            },
        });

        if (!user) {
            return res.status(401).json({ error: 'Invalid email' });
        }

        const storedUser = await prisma.user.findUnique({
            where: {
                email: email,
            },
            select: {
                password: true,
            },
        });

        if (!storedUser || !storedUser.password) {
            return res.status(500).json({ error: 'Invalid Credential' });
        }

        const passwordMatch = await bcrypt.compare(password, storedUser.password);

        if (!passwordMatch) {
            return res.status(401).json({ error: 'Invalid password' });
        }

        const token = generateToken(user.id);
        res.status(200).json({ message: 'Login successful', user, token });
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ error: 'Internal server error' });
    } finally {
        await prisma.$disconnect();
    }
};

module.exports = { loginUser };
