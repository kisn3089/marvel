import React from "react";
import ImgBox from "../../atoms/ImgBox/ImgBox";
import Text from "../../atoms/Text/Text";
import { TCard } from "../../types/card.type";
import {
  CharacterItemContainer,
  ImgContainer,
  ListTextContainer,
} from "./styles";

const CharacterItem = ({ name, img }: TCard) => {
  return (
    <CharacterItemContainer>
      <ImgContainer>
        <ImgBox src={img} alt="" />
      </ImgContainer>
      <ListTextContainer>
        <Text content={name} fontSize="14px" fontWeight="500" color="#ddd" />
      </ListTextContainer>
    </CharacterItemContainer>
  );
};

export default React.memo(CharacterItem);
