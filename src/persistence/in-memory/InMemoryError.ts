export class InMemoryError extends Error {
  constructor(message?: string) {
    super(message);
    this.name = 'InMemoryError';
  }
}
