import React from 'react';
import useCardList from '../../hooks/useCardList';
import useSelected from '../../hooks/useSelected';
import { TCard } from '../../types/card.type';
import CharacterItem from '../CharacterItem/CharacterItem';
import CreateItem from '../CreateItem/CreateItem';
import { CardListContainer } from '../CreateItem/styles';
import { CreateCardContainer } from './styles';

const item = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const CreateCard = () => {
  const { cardList } = useCardList();
  const { selectedCard, toggleSelected } = useSelected();
  console.log(cardList);

  return (
    <CreateCardContainer>
      {item.map((_: number, i: number) => {
        return (
          <CreateItem
            key={i}
            // cardList={cardList}
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
    </CreateCardContainer>
  );
};

export default React.memo(CreateCard);
