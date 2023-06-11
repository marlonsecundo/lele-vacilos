import Background from "@/components/background";
import VacilosList from "@/components/vacilos-list";
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

      <section className="content">
        <VacilosList></VacilosList>

        <img src="/lele1.png" className="img1"></img>
        <img src="/lele2.png" className="img2"></img>
        <img src="/lele3.png" className="img3"></img>
        <img src="/lele4.png" className="img4"></img>
      </section>
    </main>
  );
}
