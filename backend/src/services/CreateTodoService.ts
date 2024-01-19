import { prismaClient } from "../prisma";
import { TodoRequest } from "../types/todo";

export class CreateTodoService {
  async execute({
    title,
    description,
    completed,
    color,
    favorite,
  }: TodoRequest) {
    const newTodo = prismaClient.todo.create({
      data: {
        title,
        description,
        completed,
        color,
        favorite,
      },
    });

    return newTodo;
  }
}
