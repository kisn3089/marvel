import React from "react";
import CharacterItem from "../CharacterItem/CharacterItem";
import { CharacterListContainer, ListWrrapper } from "./styles";

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const CharacterList = () => {
  return (
    <ListWrrapper>
      <CharacterListContainer>
        {data.map((item) => {
          return <CharacterItem key={item} />;
        })}
      </CharacterListContainer>
    </ListWrrapper>
  );
};

export default React.memo(CharacterList);
