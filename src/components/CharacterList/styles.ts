import { Link } from "react-router-dom";
import styled from "styled-components";

export const ListWrrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const CharacterListContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 3px;
  padding: 0 10px;
  width: 390px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;
