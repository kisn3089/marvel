import styled, { keyframes } from "styled-components";

const opacityAnimation = keyframes`
    0% {
        box-shadow: 0 0 5px 1px #c6c6c6;
    }
    50% {
        box-shadow: 0 0 5px 1px skyblue;
    }
    100% {
        box-shadow: 0 0 5px 1px #c6c6c6;
    }
`;

export const CreateItemContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 65px;
  height: 100px;
  /* box-shadow: 0 0 5px 1px #c6c6c6; */
  /* transition: 0.5s ease-in-out; */
  border-radius: 5px;
  animation: ${opacityAnimation} 4s ease-in-out infinite;
`;

export const CardListContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  height: 140px;
  margin-top: 10px;
`;
