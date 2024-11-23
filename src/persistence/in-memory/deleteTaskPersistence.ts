import { IDeleteTaskPersistence } from '../IDeleteTaskPersistence';
import { InMemoryError } from './InMemoryError';
import { memory } from './memory';

export const deleteTaskPersistence: IDeleteTaskPersistence = (id) => {
  const index = memory.tasks.findIndex((task) => id === task.id);

  if (index < 0) {
    throw new InMemoryError(
      `Cannot delete task, task with id ${id} does not exist!`
    );
  }

  memory.tasks.splice(index, 1);
};
