import styled from "styled-components";

export const CreateItemContainer = styled.div<{ pickedCard?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 65px;
  height: 100px;
  box-shadow: ${(props) =>
    props.pickedCard ? "0 0 5px 1px #cd2640" : "0 0 5px 1px skyblue"};
  transition: 0.5s ease-in-out;
  border-radius: 5px;
`;

export const CardListContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  height: 140px;
  margin-top: 10px;
`;
