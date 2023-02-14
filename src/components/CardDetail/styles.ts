import styled, { keyframes } from "styled-components";

export const fadeUp = keyframes`
  0% {
    transform: translateY(30%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const CardDetailContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 600px;
`;

export const CardImgContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 200px;
  animation: ${fadeUp} 0.4s ease-in-out;
`;

export const CardBottomBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 30px;
  height: 385px;
  margin-top: 15px;
`;

export const DetailName = styled.div`
  text-align: center;
`;

export const PoolSourceBox = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 3px;
`;

export const DescriptionBox = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 20px;
  width: 100%;
`;

export const Description = styled.div`
  letter-spacing: 1;
  line-height: 1.2;
  margin-top: 10px;
`;
export const StatsContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const StatsBox = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 70%;
  height: 70px;
`;
export const CostBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;
