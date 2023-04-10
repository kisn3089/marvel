import styled from 'styled-components';

export const StyledText = styled.span`
  font-size: ${(props) =>
    props.style?.fontSize ? props.style?.fontSize : '12px'};
  font-weight: ${(props) =>
    props.style?.fontWeight ? props.style?.fontWeight : '500'};
  user-select: none;
  letter-spacing: 0.5px;
`;
