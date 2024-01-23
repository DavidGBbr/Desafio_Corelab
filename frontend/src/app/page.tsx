"use client";
import CardNote from "@/components/cardNote";
import FormNote from "@/components/formNote";
import Header from "@/components/header";
import { useTodo } from "@/context/TodoContext";
import { useEffect } from "react";

export default function Home() {
  const { todos, readTodos } = useTodo();

  useEffect(() => {
    readTodos();
  }, []);

  useEffect(() => {
    readTodos();
  }, [todos]);

  const favoriteNotes = todos?.filter((note) => note.favorite);
  const commonNotes = todos?.filter((note) => !note.favorite);

  return (
    <>
      <Header />
      <FormNote />
      <h2 className="w-4/5 mx-auto pl-4 mt-6 text-[#464646]">Favoritas</h2>
      <section className="w-4/5 mx-auto my-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {favoriteNotes?.map((note) => (
          <CardNote
            key={note.id}
            id={note.id}
            title={note.title}
            description={note.description}
            completed={note.completed}
            color={note.color}
            favorite={note.favorite}
          />
        ))}
      </section>
      <h2 className="w-4/5 mx-auto pl-4 text-[#464646]">Outras</h2>
      <section className="w-4/5 mx-auto my-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {commonNotes?.map((note) => (
          <CardNote
            key={note.id}
            id={note.id}
            title={note.title}
            description={note.description}
            completed={note.completed}
            color={note.color}
            favorite={note.favorite}
          />
        ))}
      </section>
    </>
  );
}
