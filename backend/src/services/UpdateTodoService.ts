import { prismaClient } from "../prisma";
import { TodoRequest } from "../types/todo";

export class UpdateTodoService {
  async execute({ id, title, completed, color, favorite }: TodoRequest) {
    const updateTodo = prismaClient.todo.update({
      where: {
        id,
      },
      data: {
        title,
        completed,
        color,
        favorite,
      },
    });

    return updateTodo;
  }
}
