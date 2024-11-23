import express from 'express';
import { getTasksController } from '../controllers/getTasksController';
import { createTaskController } from '../controllers/createTaskController';

const tasksRouter = express.Router();

tasksRouter.get('/', getTasksController);

tasksRouter.post('/', createTaskController);

export default tasksRouter;
