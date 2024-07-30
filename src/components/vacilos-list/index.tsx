import React from "react";
import "./styles.css";
import VaciloItem from "./vacilo-item";
import Title from "../title";
const VacilosList: React.FC = () => {
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
    { date: "30/07/2024", description: "Jogou RPG em jampa" },
  ];

  return (
    <section className="vacilos-list-container">
      <Title></Title>

      <ul
        className="vacilos-list overflow-y-scroll"
        style={{ maxHeight: "50vh" }}
      >
        {vaciloItems.reverse().map((v, i) => (
          <VaciloItem
            key={i}
            description={v.description}
            date={v.date}
          ></VaciloItem>
        ))}
      </ul>
    </section>
  );
};

export default VacilosList;
