import React from "react";
import "./styles.css";
import VaciloItem from "./vacilo-item";
import Title from "../title";
const VacilosList: React.FC = () => {
  return (
    <section className="vacilos-list-container">
      <Title></Title>

      <ul
        className="vacilos-list overflow-y-scroll"
        style={{ maxHeight: "50vh" }}
      >
        <VaciloItem description="O RPG"></VaciloItem>
        <VaciloItem description="Não assistiu a ultima parte de Arcane"></VaciloItem>
        <VaciloItem description="Não terminou o jogo das cartas"></VaciloItem>
        <VaciloItem description="Mod lobisomen, no server de minecraft"></VaciloItem>
        <VaciloItem description="Não terminou o Yakuza Like a Dragon"></VaciloItem>
        <VaciloItem
          date="2022"
          description="Não terminou persona 5 royal, 5 horas de gameplay, nem do primeiro boss"
        ></VaciloItem>
        <VaciloItem
          date="2022"
          description="Não terminou persona 5 royal, 5 horas de gameplay, nem do primeiro boss"
        ></VaciloItem>
        <VaciloItem
          date="05/12/2023"
          description="Não terminou bleach ainda"
        ></VaciloItem>
        <VaciloItem
          date="16/06/2024"
          description="Não terminou frieren"
        ></VaciloItem>
        <VaciloItem
          date="16/06/2024"
          description="Fez o bad ending em omori"
        ></VaciloItem>
      </ul>
    </section>
  );
};

export default VacilosList;
