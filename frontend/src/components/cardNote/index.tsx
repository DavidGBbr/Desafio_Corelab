import React from "react";
import StarImg from "../../../public/images/star.svg";
import MarkedStarImg from "../../../public/images/marked_star.svg";
import PenImg from "../../../public/images/pen.svg";
import ColorFillImg from "../../../public/images/color_fill.svg";
import CloseImg from "../../../public/images/close.svg";
import Image from "next/image";
import { TodoInterface } from "@/types/Todo";
import { useTodo } from "@/context/TodoContext";

const CardNote = ({
  id,
  title,
  description,
  completed,
  color,
  favorite,
}: TodoInterface) => {
  const { deleteTodo, updateTodo } = useTodo();

  const toggleFavorite = (favorite: boolean) => {
    const updatedTodo = {
      id,
      title,
      description,
      completed,
      color,
      favorite: !favorite,
    };

    updateTodo(updatedTodo);
  };

  return (
    <div
      className={`w-full mx-auto h-[400px] shadow-3xl border-[1px] border-[#D9D9D9] rounded-3xl bg-white bg-[${color}] flex flex-col justify-between`}
    >
      <div>
        <div className="flex items-center justify-between border-b-[1px] px-5 py-3">
          <h1 className="font-bold text-[#4F4F4D]">{title}</h1>
          <Image
            onClick={() => toggleFavorite(favorite)}
            src={favorite ? MarkedStarImg : StarImg}
            alt="Image Logo"
            priority
            className="cursor-pointer"
          />
        </div>
        <div className="px-5 pt-1 pb-6">
          <p className="text-[#4F4F4D]">{description}</p>
        </div>
      </div>
      <div className="flex justify-between px-5 py-3">
        <div className="flex">
          <Image
            src={PenImg}
            alt="Image Logo"
            priority
            className="cursor-pointer"
          />
          <Image
            src={ColorFillImg}
            alt="Image Logo"
            priority
            className="cursor-pointer"
          />
        </div>
        <Image
          onClick={() => {
            if (id) deleteTodo(id);
          }}
          src={CloseImg}
          alt="Image Logo"
          priority
          className="cursor-pointer"
        />
      </div>
    </div>
  );
};

export default CardNote;
