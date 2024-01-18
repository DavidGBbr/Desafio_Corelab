import React from "react";
import { MdOutlineStarBorder } from "react-icons/md";

const CreateNote = () => {
  return (
    <div className="bg-white w-1/2 mx-auto shadow-3xl border-[1px] border-[#D9D9D9] rounded-sm">
      <div className="flex items-center justify-between border-b-2 px-3 py-1">
        <h1 className="font-bold">Título</h1>
        <MdOutlineStarBorder className="size-6" />
      </div>
      <div className="px-3 pt-1 pb-6">
        <p>Criar nota...</p>
      </div>
    </div>
  );
};

export default CreateNote;
