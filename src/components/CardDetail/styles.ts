import styled from 'styled-components';

export const CardDetailContainer = styled.section`
  display: flex;
  /* justify-content: center; */
  flex-direction: column;
  width: 100%;
  height: 600px;
  /* border: 1px solid skyblue; */
`;

export const CardImgContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 200px;
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
