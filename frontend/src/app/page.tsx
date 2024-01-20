"use client";
import CardNote from "@/components/cardNote";
import FormNote from "@/components/formNote";
import Header from "@/components/header";
import { useTodo } from "@/context/TodoContext";
import { api } from "@/services/api";
import { TodoInterface } from "@/types/Todo";
import { useEffect, useState } from "react";

export default function Home() {
  const { todos, readTodos } = useTodo();

  useEffect(() => {
    readTodos();
  }, []);

  return (
    <>
      <Header />
      <FormNote />
      <main className="w-4/5 mx-auto my-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {todos?.map((todo) => (
          <CardNote
            key={todo.id}
            id={todo.id}
            title={todo.title}
            description={todo.description}
            completed={todo.completed}
            color={todo.color}
            favorite={todo.favorite}
          />
        ))}
      </main>
    </>
  );
}
