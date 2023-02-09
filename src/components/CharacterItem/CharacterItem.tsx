import React from "react";
import ImgBox from "../../atoms/ImgBox/ImgBox";
import { CharacterItemContainer } from "./styles";

const CharacterItem = () => {
  return (
    <CharacterItemContainer>
      {/* <ImgBox src={} alt="test" /> */}
    </CharacterItemContainer>
  );
};

export default React.memo(CharacterItem);
