# Tasks Express App

## Description

A sample Express Tasks application to practice clean architecture.

The following is the layers (highest is the most outer layer):

1. Entities
2. Interactors
3. Controllers
4. Routes/Persistence

### Entities

This is where what a `Task` lives and its validation, e.g. `title` and `description` must be of a specific length.

### Interactors

Or also known as _"Use cases"_ which holds the logic of interacting with the entities and the database (persistence).

### Controllers

Controllers are responsible for actually passing data to interactors, injecting the correct dependencies for the interactors to use, and sending back to users the outcome of a request.

I'm pretty much sure my implementation of controllers don't abide fully to clean architecture because it _"knows"_ about Express. However, I couldn't care less since **this is** a sample **Express** application.

### Routes

The most outer layer which communicates with the controllers.

### Persistence

The database layer which holds interactions with the actual database, which in this case I just use an in-memory (meaning RAM) approach. But it does show the potential of clean architecture of being able to swap quickly with other db solutions.

## Conclusion

Or my take/experience implementing this.

With the approach I did here (which is using interfaces of functions), I'm not really sure if I'm doing it _"right"_ since if, for example, I want to swap to another database, I'd need to import its persistence functions to multiple files and changing them manually. The solution I'm thinking of would be to use a class which holds all these persistence functions and changing to another db would be just instantiating a new class and passing its object instead.

Other than that, all I could say is clean architecture is really powerful if the way we interact with entities (or they call them _"business rules"_) change. For example, if we were to use another framework instead of Express or we change database, clean architecture makes it easy. One of the caveat that I just kind-of hate is that there's a lot of writing to do.

## List of Routes

### GET /

Use to check if server is running.

### GET /tasks

Gets all tasks.

### POST /tasks

Create a new task providing `title` and `description`. Returns the newly created task.

### GET /tasks/:id

Gets a task with the given `id`.

### PUT /tasks/:id

Updates a task with the given `id`. Returns the updated task.

### DELETE /tasks/:id

Deletes a task with the given `id`.
