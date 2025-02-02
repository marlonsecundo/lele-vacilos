import React from "react";
import "./styles.css";
import VaciloItem from "./vacilo-item";
import Title from "../title";

interface Props {
  onEvidencia: (evidencias: string[]) => void;
  onShowRen: () => void;
}

const VacilosList: React.FC<Props> = ({ onEvidencia, onShowRen }) => {
  const vaciloItems = [
    { date: undefined, description: "O RPG" },
    { date: undefined, description: "Não assistiu a ultima parte de Arcane" },
    { date: undefined, description: "Não terminou o jogo das cartas" },
    { date: undefined, description: "Mod lobisomen, no server de minecraft" },
    { date: undefined, description: "Não terminou o Yakuza Like a Dragon" },
    {
      date: "2022",
      description:
        "Não terminou persona 5 royal, 5 horas de gameplay, nem do primeiro boss",
    },
    {
      date: "2022",
      description:
        "Não terminou persona 5 royal, 5 horas de gameplay, nem do primeiro boss",
    },
    { date: "05/12/2023", description: "Não terminou bleach ainda" },
    { date: "16/06/2024", description: "Não terminou frieren" },
    { date: "16/06/2024", description: "Fez o bad ending em omori" },
    {
      date: "30/07/2024",
      description: "Jogou RPG em jampa",
      evidencias: ["jampa/jampa1.jpeg", "jampa/jampa2.jpeg"],
    },
    {
      description:
        "Avançou no sinal vermelho, entrou na via proibida e no meio da via proibida, fez um retorno proibidia e voltou na via normal na contra mão.",
    },
    {
      description: "Dropou metaphor depois de 70h de jogo",
      color: "bg-red-600",
      evidencias: [
        "metaphor/cobra.png",
        "metaphor/prota.webp",
        "metaphor/horas.webp",
      ],
    },
  ];

  return (
    <section className="vacilos-list-container">
      <div className="flex items-center">
        <Title></Title>
        <button
          className="bg-green-700 p-5 shadow rounded h-auto"
          onClick={() => onShowRen()}
        >
          <p>Mas Lele também </p>
          <p>tem suas redenções...</p>
        </button>
      </div>

      <ul
        className="vacilos-list overflow-y-scroll"
        style={{ maxHeight: "50vh" }}
      >
        {vaciloItems.reverse().map((v, i) => (
          <VaciloItem
            color={v.color}
            onEvidencia={onEvidencia}
            key={i}
            description={v.description}
            date={v.date}
            evidencias={v.evidencias}
          ></VaciloItem>
        ))}
      </ul>
    </section>
  );
};

export default VacilosList;
