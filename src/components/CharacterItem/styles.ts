import styled from "styled-components";
import { fadeUp } from "../CardDetail/styles";

export const CharacterItemContainer = styled.div`
  padding: 10px 0 0 0;
  width: 120px;
  height: 160px;
  box-shadow: 0 0 5px 0.1px #888;
  border-radius: 5px;
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
