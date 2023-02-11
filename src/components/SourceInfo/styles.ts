import styled, { keyframes } from 'styled-components';

const fadeUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-30%);
  }
  100% {
    opacity: 1;
    transform: translateY(15%);
  }
`;

export const SourceInfoContainer = styled.div`
  position: absolute;
  overflow: hidden;
  left: 0;
  top: 0;
  transform: translateY(15%);
  padding: 0 5px;
  width: 170px;
  height: 120px;
  background-color: #333;
  border-radius: 5px;
  animation: ${fadeUp} 0.3s ease-in-out;
`;

export const SourceInfoCenter = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 13px;
`;

export const PoolInfo = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
  margin-top: 4px;
`;
