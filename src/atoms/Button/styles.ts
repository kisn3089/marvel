import styled from "styled-components";

export const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  cursor: pointer;
  border-radius: ${(props) =>
    props.style?.borderRadius ? props.style?.borderRadius : "10px"};
  outline: none;
  border: none;
  background-color: ${(props) =>
    props.style?.backgroundColor ? props.style?.backgroundColor : "skyblue"};
  color: ${(props) => (props.style?.color ? props.style?.color : "#111")};
  width: ${(props) => props.style?.width};
  height: ${(props) => props.style?.height};
  font-size: ${(props) =>
    props.style?.fontSize ? props.style?.fontSize : "16px"};
  font-weight: ${(props) =>
    props.style?.fontWeight ? props.style?.fontWeight : "500"};
  padding: ${(props) => props.style?.padding};

  &:disabled {
    background-color: #ddd;
    color: #fff;
    cursor: not-allowed;
  }
  &:hover,
  &:focus {
    border: none;
  }
`;
