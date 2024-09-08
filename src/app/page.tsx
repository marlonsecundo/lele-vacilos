"use client";

import Background from "@/components/background";
import { Modal } from "@/components/modal";
import VacilosList from "@/components/vacilos-list";
import { publicFolder } from "@/consts";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [evidencias, setEvidencias] = useState<string[]>([]);

  return (
    <main className="flex flex-1 bg-black">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <Background></Background>

      <section className="z-10 flex">
        <VacilosList onEvidencia={(v) => setEvidencias(v)}></VacilosList>

        <img src={publicFolder + "/lele1.png"} className="img1"></img>
        <img
          src={publicFolder + "/lele3.png"}
          className="absolute w-52 bottom-0 left-1/2 translate-y-20"
        ></img>
        <img
          src={publicFolder + "/lele4.png"}
          className="absolute w-52 bottom-0 left-0 "
        ></img>
      </section>

      <Modal
        // evidencias={["jampa/jampa1.jpeg", "jampa/jampa2.jpeg"]}
        evidencias={evidencias}
        onClose={() => setEvidencias([])}
      ></Modal>
    </main>
  );
}
