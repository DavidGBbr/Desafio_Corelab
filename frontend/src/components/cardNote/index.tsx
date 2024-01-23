"use client";
import React, { useEffect, useRef, useState } from "react";
import StarImg from "../../../public/images/star.svg";
import MarkedStarImg from "../../../public/images/marked_star.svg";
import PenImg from "../../../public/images/pen.svg";
import ColorFillImg from "../../../public/images/color_fill.svg";
import CloseImg from "../../../public/images/close.svg";
import Image from "next/image";
import { TodoInterface } from "@/types/Todo";
import { useTodo } from "@/context/TodoContext";
import ColorPicker from "../colorPicker";

const CardNote = ({
  id,
  title,
  description,
  completed,
  color,
  favorite,
}: TodoInterface) => {
  const [inputTitle, setInputTitle] = useState(title);
  const [disabled, setDisabled] = useState(true);
  const [inputDescription, setInputDescription] = useState(description);
  const [selectedColor, setSelectedColor] = useState("");
  const [picker, setPicker] = useState(false);
  const inputTitleRef = useRef<HTMLInputElement>(null);

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

  const handleColorSelect = (color: string) => {
    setSelectedColor(color);
  };

  const submit = (id: string) => {
    updateTodo({
      id,
      title: inputTitle,
      description: inputDescription,
      completed,
      color,
      favorite,
    });
  };

  const handleKeyPress = (
    event: React.KeyboardEvent<HTMLDivElement>,
    id: string
  ) => {
    if (event.key === "Enter") {
      submit(id);
      setDisabled(true);
    }
  };

  useEffect(() => {
    inputTitleRef.current?.focus();
  }, [disabled]);

  useEffect(() => {
    const handleChangeColor = () => {
      if (selectedColor) {
        const updatedTodo = {
          id,
          title,
          description,
          completed,
          color: selectedColor,
          favorite,
        };

        updateTodo(updatedTodo);
      }
    };
    handleChangeColor();
    setPicker(!picker);
  }, [selectedColor]);

  return (
    <>
      <div
        className={`w-full mx-auto h-[400px] shadow-3xl border-[1px] border-[#D9D9D9] rounded-3xl flex flex-col justify-between`}
        style={{ background: color }}
      >
        <div>
          <div className="flex items-center justify-between border-b-[1px] px-5 py-3">
            <input
              type="text"
              className="font-bold text-[#4F4F4D] p-1 rounded-md outline-none bg-transparent focus:bg-slate-100 w-2/3"
              placeholder={inputTitle}
              value={inputTitle}
              onChange={(e) => setInputTitle(e.target.value)}
              disabled={disabled}
              onKeyDown={(e) => handleKeyPress(e, id as string)}
              ref={inputTitleRef}
            />
            <Image
              onClick={() => toggleFavorite(favorite)}
              src={favorite ? MarkedStarImg : StarImg}
              alt="Image Logo"
              priority
              className="cursor-pointer"
            />
          </div>
          <div className="px-5 pt-1 pb-6">
            <input
              type="text"
              className="text-[#4F4F4D] p-1 rounded-md outline-none bg-transparent focus:bg-slate-100 w-full"
              placeholder={inputDescription}
              value={inputDescription}
              onChange={(e) => setInputDescription(e.target.value)}
              onKeyDown={(e) => handleKeyPress(e, id as string)}
              disabled={disabled}
            />
          </div>
        </div>
        <div className="flex justify-between px-5 py-3">
          <div className="flex">
            <span
              className="cursor-pointer hover:bg-[#FFE3B3] duration-150 rounded-full flex justify-center items-center mr-1"
              onClick={() => setDisabled(!disabled)}
            >
              <Image src={PenImg} alt="Image pen" priority />
            </span>
            <span
              className="cursor-pointer hover:bg-[#FFE3B3] p-1 duration-150 rounded-full flex justify-center items-center ml-1"
              onClick={() => setPicker(!picker)}
            >
              <Image src={ColorFillImg} alt="Image color fill" priority />
            </span>
          </div>
          <Image
            onClick={() => deleteTodo(id as string)}
            src={CloseImg}
            alt="Image close"
            priority
            className="cursor-pointer"
          />
        </div>
        {picker && (
          <>
            <ColorPicker onSelectColor={handleColorSelect} />
          </>
        )}
      </div>
    </>
  );
};

export default CardNote;
