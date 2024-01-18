"use client";
import Image from "next/image";
import LogoImg from "../../../public/images/logo.svg";
import { AiOutlineSearch } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import React, { useState } from "react";

const Header = () => {
  const [note, setNote] = useState("");

  return (
    <header className="bg-white flex justify-between items-center py-2 px-8">
      <div className="flex items-center w-full md:w-1/2">
        <Image src={LogoImg} alt="Image Logo" priority />
        <p className="ml-2 mr-6 text-m text-[#455A64]">CoreNotes</p>
        <div className="border-2 border-slate-200 flex items-center w-full">
          <input
            type="text"
            placeholder="Pesquisar notas"
            className="p-1 pl-3 w-full outline-none"
            value={note}
            onChange={(e) => setNote(e.target.value)}
          />
          <AiOutlineSearch className="text-[#9E9E9E] size-10 pr-3 cursor-pointer" />
        </div>
      </div>
      <IoMdClose className="ml-6 text-[#51646E] size-6 cursor-pointer" />
    </header>
  );
};

export default Header;
