import { prismaClient } from "../prisma";

interface TodoRequest {
  title: string;
  completed: boolean;
  color?: string;
  favorite: boolean;
}

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
