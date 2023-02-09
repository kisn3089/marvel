import React from "react";
import { cardData } from "../../assets/data/data";
import { TCard } from "../../types/card.type";
import CharacterItem from "../CharacterItem/CharacterItem";
import { CharacterListContainer, ListWrrapper, StyledLink } from "./styles";

interface ICharacterList {}

const CharacterList = () => {
  return (
    <ListWrrapper>
      <CharacterListContainer>
        {cardData.map((card: TCard) => {
          return (
            <StyledLink to={`/chlist/${card.id}`} key={card.id}>
              <CharacterItem name={card.name} webp={card.webp} />
            </StyledLink>
          );
        })}
      </CharacterListContainer>
    </ListWrrapper>
  );
};

export default React.memo(CharacterList);
