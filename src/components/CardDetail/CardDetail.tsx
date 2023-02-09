import React from "react";
import { useParams } from "react-router-dom";
import { cardData } from "../../assets/data/data";
import ImgBox from "../../atoms/ImgBox/ImgBox";
import Text from "../../atoms/Text/Text";
import { TCard } from "../../types/card.type";
import { CardBaseBox, CardDetailContainer, CardImgContainer } from "./styles";

const CardDetail = () => {
  const { id } = useParams();
  const card: TCard = cardData[Number(id) - 1];

  return (
    <CardDetailContainer>
      <CardImgContainer>
        <ImgBox src={card.webp} alt={card.name} width="200px" />
      </CardImgContainer>
      <CardBaseBox>
        <Text content={card.name} fontSize="16px" fontWeight="700" />
      </CardBaseBox>
    </CardDetailContainer>
  );
};

export default React.memo(CardDetail);
