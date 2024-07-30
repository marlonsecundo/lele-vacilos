import Background from "@/components/background";
import VacilosList from "@/components/vacilos-list";
import { publicFolder } from "@/consts";
import Image from "next/image";

export default function Home() {
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
        <VacilosList></VacilosList>

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
    </main>
  );
}
