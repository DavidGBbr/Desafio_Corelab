import React from "react";
import StarImg from "../../../public/images/star.svg";
import MarkedStarImg from "../../../public/images/marked_star.svg";
import Image from "next/image";

const CreateNote = () => {
  return (
    <div className="bg-white w-1/2 mx-auto mt-6 shadow-3xl border-[1px] border-[#D9D9D9] rounded-sm">
      <div className="flex items-center justify-between border-b-2 px-3 py-1">
        <h1 className="font-bold text-[#4F4F4D]">Título</h1>
        <Image src={StarImg} alt="Image Logo" priority />
      </div>
      <div className="px-3 pt-1 pb-6">
        <p className="text-[#4F4F4D]">Criar nota...</p>
      </div>
    </div>
  );
};

export default CreateNote;
