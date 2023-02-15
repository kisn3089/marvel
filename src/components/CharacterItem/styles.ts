import styled from "styled-components";
import { fadeUp } from "../CardDetail/styles";

export const CharacterItemContainer = styled.div`
  width: 90px;
  height: 150px;
  cursor: pointer;
  animation: ${fadeUp} 0.4s ease-in-out;
`;

export const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 120px;
`;

export const ListTextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20px;
`;
