import React from "react";
import ImgBox from "../../atoms/ImgBox/ImgBox";
import Text from "../../atoms/Text/Text";
import { TCard } from "../../types/card.type";
import {
  CharacterItemContainer,
  ImgContainer,
  ListTextContainer,
} from "./styles";

const CharacterItem = ({ name, webp }: TCard) => {
  return (
    <CharacterItemContainer>
      <ImgContainer>
        <ImgBox src={webp} alt="test" />
      </ImgContainer>
      <ListTextContainer>
        <Text content={name} fontSize="13px" fontWeight="500" color="#ddd" />
      </ListTextContainer>
    </CharacterItemContainer>
  );
};

export default React.memo(CharacterItem);
