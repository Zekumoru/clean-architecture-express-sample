import { Task } from '../../entities/task/Task';
import { IUpdateTaskPersistence } from '../IUpdateTaskPersistence';
import { InMemoryError } from './InMemoryError';
import { memory } from './memory';

export const updateTaskPersistence: IUpdateTaskPersistence = (task: Task) => {
  const index = memory.tasks.findIndex((t) => t.id === task.id);

  if (index < 0) {
    throw new InMemoryError(`Task with id ${task.id} does not exist!`);
  }

  memory.tasks.splice(index, 1, task);
};
