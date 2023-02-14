import styled from "styled-components";

export const StyledInput = styled.input`
  outline: none;
  border: ${(props) => (props.style?.border ? props.style?.border : "none")};
  border-radius: ${(props) =>
    props.style?.borderRadius ? props.style?.borderRadius : "5px"};
  color: ${(props) => (props.style?.color ? props.style?.color : "skyblue")};
  background-color: transparent;
  width: ${(props) => props.style?.width};
  height: ${(props) => props.style?.height};
  font-size: ${(props) =>
    props.style?.fontSize ? props.style?.fontSize : "14px"};
  font-weight: ${(props) =>
    props.style?.fontWeight ? props.style?.fontWeight : "500"};
  padding: ${(props) =>
    props.style?.padding ? props.style?.padding : "0 20px"};
  box-shadow: ${(props) =>
    props.style?.boxShadow ? props.style?.boxShadow : "none"};
  transition: 0.3s ease-in-out;
  -webkit-appearance: none;
  // IOS box-shadow 먹게 만드는것
  &:focus {
    box-shadow: 0 0 5px 1px skyblue;
  }
`;
