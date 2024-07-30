import React from "react";
import HorizontalCard from "./HorizontalCard";
import "../App.css";
import cardsData from "../data";
const ScrollContainer = () => {
  return (
    <div className="scroll-container">
      {cardsData.map((card, index) => (
        <HorizontalCard
          key={index}
          title={card.title}
          image={card.image}
          content={card.description}
        />
      ))}
    </div>
  );
};

export default ScrollContainer;
