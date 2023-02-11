import styled from 'styled-components';

export const StyledImgBox = styled.div`
  display: block;
  width: ${(props) => (props.style?.width ? props.style?.width : '100%')};
  height: 100%;
  margin: ${(props) => props.style?.margin};
  padding: ${(props) => props.style?.padding};
  position: relative;
`;

export const StyledImg = styled.img`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  height: auto;
  object-fit: contain;
`;
