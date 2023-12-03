import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const createUser = async (req, res) => {
    try {
        const { first_name, last_name, email, age, gender } = req.body;
        const user = await prisma.user.create({
            data: {
                first_name,
                last_name,
                email,
                age,
                gender,
            },
        });
        res.json(user);
    } catch (error) {
            if (error.code === 'P2002' && error.meta?.target?.includes('email')) {
                // Error code 'P2002' indicates a unique constraint violation
                return res.status(400).json({ error: 'Email address already in use' });
            }
    
            console.log(error);
            res.status(500).json({ error: error});
        }
    }

const getAllUsers = async (req, res) => {
    try {
        const users = await prisma.user.findMany();
        res.json({ users, total: users.length });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error fetching Users' });
    }
};

const getUserById = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await prisma.user.findUnique({
            where: { id: parseInt(id) },
        });
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error fetching User' });
    }
};

const updateUser = async (req, res) => {
    const { id } = req.params;
    const { first_name, last_name, email, age, gender } = req.body;
    try {
        const updatedUser = await prisma.user.update({
            where: { id: parseInt(id) },
            data: {
                first_name,
                last_name,
                email,
                age,
                gender,
            },
        });
        res.json(updatedUser);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error updating User' });
    }
};

const deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
        await prisma.user.delete({
            where: { id: parseInt(id) },
        });
        res.json({ message: 'User deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error deleting user' });
    }
};

export { createUser, getAllUsers, getUserById, updateUser, deleteUser };
