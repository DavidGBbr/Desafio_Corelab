import { prismaClient } from "../prisma";
import { TodoRequest } from "../types/todo";

export class CreateTodoService {
  async execute({ title, completed, color, favorite }: TodoRequest) {
    const newTodo = prismaClient.todo.create({
      data: {
        title,
        completed,
        color,
        favorite,
      },
    });

    return newTodo;
  }
}
