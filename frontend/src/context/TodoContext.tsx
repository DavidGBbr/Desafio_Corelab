"use client";
import { api } from "@/services/api";
import { TodoInterface } from "@/types/Todo";
import { PropsWithChildren, createContext, useContext, useState } from "react";

type IUiContext = {
  todos: TodoInterface[] | [];
  createTodo: (newTodo: TodoInterface) => void;
  readTodos: () => void;
  updateTodo: (id: string, updatedTodo: TodoInterface) => void;
  deleteTodo: (id: string) => void;
};

const TodoContext = createContext<IUiContext | null>(null);

export const useTodo = () => {
  const context = useContext(TodoContext);
  if (!context) throw new Error("useContext deve estar dentro do Provider");
  return context;
};

export const TodoContextProvider = ({ children }: PropsWithChildren) => {
  const [todos, setTodos] = useState<TodoInterface[] | []>([]);

  const createTodo = async (newTodo: TodoInterface) => {
    const response = await api.post("/todo", newTodo);
    setTodos([...todos, response.data]);
  };

  const readTodos = async () => {
    const response = await api.get("/todos");
    setTodos(response.data);
  };

  const updateTodo = async (id: string, updatedTodo: TodoInterface) => {
    const response = await api.put("/todos/", updatedTodo);
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? response.data : todo
    );
    setTodos(updatedTodos);
  };

  const deleteTodo = async (id: string) => {
    await api.delete(`/todo/${id}`);
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <TodoContext.Provider
      value={{
        todos,
        createTodo,
        readTodos,
        updateTodo,
        deleteTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};