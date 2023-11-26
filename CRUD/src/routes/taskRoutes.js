// src/routes/taskRoutes.js
import express from 'express';
import * as taskController from '../controllers/taskControllers.js';

const router = express.Router();

router.get('/tasks', taskController.fetchTasks);
router.post('/tasks', taskController.createTask);
router.put('/tasks/:id', taskController.updateTask);
router.delete('/tasks/:id', taskController.deleteTask);

export default router;
