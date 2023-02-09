import styled from "styled-components";

export const StyledImgBox = styled.div`
  width: ${(props) => (props.style?.width ? props.style?.width : "100%")};
  height: 100%;
  display: block;
  margin: ${(props) => props.style?.margin};
  padding: ${(props) => props.style?.padding};
  position: relative;
`;

export const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;
