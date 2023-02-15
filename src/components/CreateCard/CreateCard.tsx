import React from "react";
import useCardList from "../../hooks/useCardList";
import { TCard } from "../../types/card.type";
import CharacterItem from "../CharacterItem/CharacterItem";
import CreateItem from "../CreateItem/CreateItem";
import { CardListContainer } from "../CreateItem/styles";
import { CreateCardContainer } from "./styles";

const item = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const CreateCard = () => {
  const { cardList } = useCardList();

  return (
    <CreateCardContainer>
      {item.map((card) => {
        return <CreateItem key={card} />;
      })}
      <CardListContainer>
        {cardList.map((card: TCard) => {
          return <CharacterItem img={card.img} name={card.name} />;
        })}
      </CardListContainer>
    </CreateCardContainer>
  );
};

export default React.memo(CreateCard);
