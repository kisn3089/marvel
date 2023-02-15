import React from "react";
import { useParams } from "react-router-dom";
import { cardData } from "../../assets/data/DummyData";
import AbilityCircle from "../../atoms/AbilityCircle/AbilityCircle";
import ImgBox from "../../atoms/ImgBox/ImgBox";
import Source from "../../atoms/Source/Source";
import Text from "../../atoms/Text/Text";
import { TCard } from "../../types/card.type";
import {
  CardBottomBox,
  CardDetailContainer,
  CardImgContainer,
  CostBox,
  Description,
  DescriptionBox,
  DetailName,
  PoolSourceBox,
  StatsBox,
  StatsContainer,
} from "./styles";

const CardDetail = () => {
  const { id } = useParams();
  const card: TCard = cardData[Number(id) - 1];

  return (
    <CardDetailContainer>
      <CardImgContainer>
        <ImgBox
          src={card.img}
          alt={card.name}
          srcSet={`${card.img} 200w`}
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
              content="설명"
              fontSize="18px"
              fontWeight="700"
              color="#C6C6C6"
            />
          </Description>
          <Description>
            <Text
              content={card.description}
              fontSize="14px"
              fontWeight="500"
              color="skyblue"
            />
          </Description>
          <StatsContainer>
            <StatsBox>
              <CostBox>
                <Description>
                  <Text
                    content="비용"
                    fontSize="18px"
                    fontWeight="700"
                    color="#C6C6C6"
                  />
                </Description>
                <Description>
                  <Text
                    content={String(card.stats?.cost)}
                    fontSize="18px"
                    fontWeight="700"
                    color="skyblue"
                  />
                </Description>
              </CostBox>
              <CostBox>
                <Description>
                  <Text
                    content="공격"
                    fontSize="18px"
                    fontWeight="700"
                    color="#C6C6C6"
                  />
                </Description>
                <Description>
                  <Text
                    content={String(card.stats?.attack)}
                    fontSize="18px"
                    fontWeight="700"
                    color="skyblue"
                  />
                </Description>
              </CostBox>
            </StatsBox>
          </StatsContainer>
        </DescriptionBox>
      </CardBottomBox>
    </CardDetailContainer>
  );
};

export default React.memo(CardDetail);
