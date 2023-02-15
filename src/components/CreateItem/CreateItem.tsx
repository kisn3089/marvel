import React from "react";
import { cardData } from "../../assets/data/DummyData";
import ImgBox from "../../atoms/ImgBox/ImgBox";
import { CreateItemContainer } from "./styles";

const CreateItem = () => {
  return (
    <CreateItemContainer>
      {/* <ImgBox src={cardData[0].img} /> */}
    </CreateItemContainer>
  );
};

export default React.memo(CreateItem);
