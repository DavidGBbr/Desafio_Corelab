import React from "react";
import StarImg from "../../../public/images/star.svg";
import MarkedStarImg from "../../../public/images/marked_star.svg";
import PenImg from "../../../public/images/pen.svg";
import ColorFillImg from "../../../public/images/color_fill.svg";
import CloseImg from "../../../public/images/close.svg";
import Image from "next/image";

const CardNote = () => {
  return (
    <div className="w-full mx-auto h-[400px] shadow-3xl border-[1px] border-[#D9D9D9] rounded-3xl bg-white flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between border-b-2 px-5 py-3">
          <h1 className="font-bold text-[#4F4F4D]">Título</h1>
          <Image src={StarImg} alt="Image Logo" priority />
        </div>
        <div className="px-5 pt-1 pb-6">
          <p className="text-[#4F4F4D]">
            Clique ou arraste o arquivo para esta área para fazer upload
          </p>
        </div>
      </div>
      <div className="flex justify-between px-5 py-3">
        <div className="flex">
          <Image src={PenImg} alt="Image Logo" priority />
          <Image src={ColorFillImg} alt="Image Logo" priority />
        </div>
        <Image src={CloseImg} alt="Image Logo" priority />
      </div>
    </div>
  );
};

export default CardNote;