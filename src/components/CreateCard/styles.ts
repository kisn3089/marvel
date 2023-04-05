import styled, { keyframes } from "styled-components";

const messageFedeUp = keyframes`
  0% {
    transform: translateY(0);
    opacity: 0;
  }
  10% {
    transform: translateY(-70%);
    opacity: 1;
  }
  90% {
    transform: translateY(-70%);
    opacity: 1;
  }
  100% {
    transform: translateY(0);
    opacity: 0;
  }
`;

export const CreateCardContainer = styled.div`
  /* position: relative; */
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  /* border: 1px solid skyblue; */
  gap: 13px;
  /* padding: 0 20px; */
  width: 100%;
  height: 100%;
`;

export const FullMessgeContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 50%;
  left: 50;
  background-color: #cd2640;
  width: 300px;
  height: 40px;
  z-index: 10;
  border-radius: 20px;
  animation: ${messageFedeUp} 3s ease-in-out;
`;
