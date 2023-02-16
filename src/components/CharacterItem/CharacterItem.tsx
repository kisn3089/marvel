import React from "react";
import ImgBox from "../../atoms/ImgBox/ImgBox";
import Text from "../../atoms/Text/Text";
import { TCard } from "../../types/card.type";
import {
  CharacterItemContainer,
  ImgContainer,
  ListTextContainer,
} from "./styles";

interface ICharacterItem extends TCard {
  isSelected?: boolean;
  toggleSelected?: (e: React.MouseEvent<HTMLImageElement>) => void;
}

const CharacterItem = ({
  id,
  name,
  img,
  isSelected,
  toggleSelected,
}: ICharacterItem) => {
  return (
    <CharacterItemContainer>
      <ImgContainer>
        <ImgBox
          id={String(id)}
          src={img}
          alt=""
          isSelected={isSelected}
          handleClick={toggleSelected}
        />
      </ImgContainer>
      <ListTextContainer>
        <Text content={name} fontSize="14px" fontWeight="500" color="#ddd" />
      </ListTextContainer>
    </CharacterItemContainer>
  );
};

export default React.memo(CharacterItem);
