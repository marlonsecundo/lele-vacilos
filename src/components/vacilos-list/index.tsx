import React from "react";
import "./styles.css";
import VaciloItem from "./vacilo-item";
import Title from "../title";
const VacilosList: React.FC = () => {
  return (
    <section className="vacilos-list-container">
      <Title></Title>

      <ul className="vacilos-list">
        <VaciloItem description="O RPG"></VaciloItem>
        <VaciloItem description="Não assistiu a ultima parte de Arcane"></VaciloItem>
        <VaciloItem description="Não terminou o jogo das cartas"></VaciloItem>
        <VaciloItem description="Modo lobisomen"></VaciloItem>
        <VaciloItem description="Não terminou o Yakuza Like a Dragon"></VaciloItem>
      </ul>
    </section>
  );
};

export default VacilosList;
