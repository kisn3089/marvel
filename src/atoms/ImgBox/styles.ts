import styled from 'styled-components';

export const StyledImgBox = styled.div`
  display: block;
  width: 100%;
  height: ${(props) => (props.style?.width ? props.style?.width : '100%')};
  margin: ${(props) => props.style?.margin};
  padding: ${(props) => props.style?.padding};
  position: relative;
`;

export const StyledImg = styled.img<{ isSelected?: boolean }>`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: auto;
  height: 100%;
  object-fit: contain;
  filter: ${(props) => (props.isSelected ? 'grayscale(1)' : 'none')};
  transition: 0.3 ease-in-out;
`;
