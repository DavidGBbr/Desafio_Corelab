import { prismaClient } from "../prisma";
import { TodoRequest } from "../types/todo";

export class UpdateTodoService {
  async execute({
    id,
    title,
    description,
    completed,
    color,
    favorite,
  }: TodoRequest) {
    const updateTodo = prismaClient.todo.update({
      where: {
        id,
      },
      data: {
        title,
        description,
        completed,
        color,
        favorite,
      },
    });

    return updateTodo;
  }
}
