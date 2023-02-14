import React from "react";
import useCardList from "../../hooks/useCardList";
import { TCard } from "../../types/card.type";
import CharacterItem from "../CharacterItem/CharacterItem";
import SearchInput from "../SearchInput/SearchInput";
import { CharacterListContainer, ListWrrapper, StyledLink } from "./styles";

interface ICharacterList {}

const CharacterList = () => {
  const { cardList, searchValue, changeSearchValue } = useCardList();

  return (
    <ListWrrapper>
      <SearchInput
        content={searchValue}
        handleChange={changeSearchValue}
        placeholder="Search"
        customStyle={{ borderRadius: "5px", opacity: "0.7" }}
      />
      <CharacterListContainer>
        {cardList.map((card: TCard) => {
          return (
            <StyledLink to={`/chlist/${card.id}`} key={card.id}>
              <CharacterItem name={card.name} img={card.img} />
            </StyledLink>
          );
        })}
      </CharacterListContainer>
    </ListWrrapper>
  );
};

export default React.memo(CharacterList);
