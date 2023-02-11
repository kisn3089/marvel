import React from 'react';
import { useParams } from 'react-router-dom';
import { cardData } from '../../assets/data/data';
import AbilityCircle from '../../atoms/AbilityCircle/AbilityCircle';
import ImgBox from '../../atoms/ImgBox/ImgBox';
import Source from '../../atoms/Source/Source';
import Text from '../../atoms/Text/Text';
import useCardDetail from '../../hooks/useCardDetail';
import { TCard } from '../../types/card.type';
import {
  CardBottomBox,
  CardDetailContainer,
  CardImgContainer,
  Description,
  DescriptionBox,
  DetailName,
  PoolSourceBox,
} from './styles';

const CardDetail = () => {
  const { id } = useParams();
  const card: TCard = cardData[Number(id) - 1];

  return (
    <CardDetailContainer>
      <CardImgContainer>
        <ImgBox
          src={card.webp}
          alt={card.name}
          srcSet={`${card.webp} 200w`}
          sizes="200vw"
          width="200px"
        />
      </CardImgContainer>
      <CardBottomBox>
        <DetailName>
          <Text content={card.name} fontSize="16px" fontWeight="700" />
        </DetailName>
        <PoolSourceBox>
          <Source source={card.source} />
          <AbilityCircle ability={card.ability} />
        </PoolSourceBox>
        <DescriptionBox>
          <Description>
            <Text
              content="Description"
              fontSize="20px"
              fontWeight="700"
              color="skyblue"
            />
          </Description>
          <Description>
            <Text content={card.description} fontWeight="500" color="#C6C6C6" />
          </Description>
        </DescriptionBox>
      </CardBottomBox>
    </CardDetailContainer>
  );
};

export default React.memo(CardDetail);
