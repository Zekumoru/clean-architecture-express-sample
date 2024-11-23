import express from 'express';
import { getTasksController } from '../controllers/getTasksController';
import { createTaskController } from '../controllers/createTaskController';
import { getTaskController } from '../controllers/getTaskController';
import { updateTaskController } from '../controllers/updateTaskController';

const tasksRouter = express.Router();

tasksRouter.get('/', getTasksController);

tasksRouter.post('/', createTaskController);

tasksRouter.get('/:id', getTaskController);

tasksRouter.put('/:id', updateTaskController);

export default tasksRouter;
