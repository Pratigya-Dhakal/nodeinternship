const bcrypt = require('bcrypt');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const { generateToken } = require('../utils/jwt');

const registerUser = async (req, res) => {
    try {
        const { name, email, dob, password, confirmPassword } = req.body;

        if (password !== confirmPassword) {
            return res.status(400).json({ error: 'Password and confirmPassword do not match.' });
        }

        const currentDate = new Date();
        const userDob = new Date(dob);
        const age = currentDate.getFullYear() - userDob.getFullYear();

        if (age < 18) {
            return res.status(400).json({ error: 'User must be 18 years or older.' });
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({ error: 'Please provide a valid email.' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await prisma.user.create({
            data: {
                name,
                email,
                dob: userDob,
                password: hashedPassword,
            },
            select: {
                id: true,
                name: true,
                dob : true,
                email :true,
            }
        });
        const token = generateToken(user.id);
        // res.redirect('/profile');
        res.json({ message: 'Registration successful', user,token });
    } catch (error) {
        if (error.code === 'P2002' && error.meta?.target?.includes('email')) {
            return res.status(400).json({ error: 'Email address already in use' });
        }

        console.error('Error registering user:', error);
        res.status(500).json({ error: 'Internal server error' });
    } finally {
        await prisma.$disconnect();
    }
};

module.exports = { registerUser };
