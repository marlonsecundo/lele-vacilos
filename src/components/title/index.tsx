"use client";

import React from "react";

import music from "@/lele.mp3";

import "./styles.css";
import { publicFolder } from "@/consts";
import useSound from "use-sound";

const Title: React.FC = () => {
  const [play] = useSound(music, { volume: 0.2 });

  return (
    <div className="flex m-10 flex-col md:flex-row md:mt-24 gap-2">
      <div className="title text-6xl mb-10">Vacilos de Lele</div>
      <button
        className="bg-red-400 shadow rounded self-center p-5 flex justify-center items-center ml-5 flex-col"
        type="button"
        onClick={() => play()}
      >
        <img src={publicFolder + "/lele2.png"} className=" w-fit h-20"></img>
        Escute a Musica de Lele
      </button>
    </div>
  );
};

export default Title;
