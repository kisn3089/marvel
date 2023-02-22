import React from "react";
import Text from "../../atoms/Text/Text";
import useCardList from "../../hooks/useCardList";
import useSelected from "../../hooks/useSelected";
import { TCard } from "../../types/card.type";
import CharacterItem from "../CharacterItem/CharacterItem";
import CreateItem from "../CreateItem/CreateItem";
import { CardListContainer } from "../CreateItem/styles";
import { CreateCardContainer, FullMessgeContainer } from "./styles";

const item = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const CreateCard = () => {
  const { cardList } = useCardList();
  const { selectedCard, cardStatus, toggleSelected } = useSelected();

  return (
    <CreateCardContainer>
      {item.map((_: number, i: number) => {
        return (
          <CreateItem
            key={i}
            pickedCard={cardList[Number(selectedCard[i])]?.img}
          />
        );
      })}
      <CardListContainer>
        {cardList.map((card: TCard, i: number) => {
          return (
            <CharacterItem
              key={i}
              id={i}
              img={card.img}
              name={card.name}
              isSelected={selectedCard.includes(String(i))}
              toggleSelected={toggleSelected}
            />
          );
        })}
      </CardListContainer>
      {cardStatus.isActive && (
        <FullMessgeContainer>
          <Text
            content={cardStatus.status}
            color="#fff"
            fontSize="12px"
            fontWeight="500"
          />
        </FullMessgeContainer>
      )}
    </CreateCardContainer>
  );
};

export default React.memo(CreateCard);
