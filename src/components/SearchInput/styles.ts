import styled, { keyframes } from "styled-components";

const fadeDown = keyframes`
    0% {
        transform: translateY(0);
    }
    100% {
        transform: translateY(100%);
    }
`;

export const SearchContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 30px;
  bottom: 0;
  left: 0;
  transform: translateY(100%);
  z-index: -1;
  animation: ${fadeDown} 0.3s ease-in-out;
`;
