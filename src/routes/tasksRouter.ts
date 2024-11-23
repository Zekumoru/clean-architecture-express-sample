import express from 'express';
import { getTasksController } from '../controllers/getTasksController';
import { createTaskController } from '../controllers/createTaskController';
import { getTaskController } from '../controllers/getTaskController';

const tasksRouter = express.Router();

tasksRouter.get('/', getTasksController);

tasksRouter.post('/', createTaskController);

tasksRouter.get('/:id', getTaskController);

export default tasksRouter;
