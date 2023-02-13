import React from "react";
import Input from "../../atoms/Input/Input";
import { SearchContainer } from "./styles";

interface ISearchInput {
  content: string;
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchInput = ({ content, handleChange }: ISearchInput) => {
  return (
    <SearchContainer>
      <Input
        type="text"
        content={content}
        width="100%"
        height="30px"
        border="1px solid rgb(135, 206, 235, 0.5)"
        customStyle={{ borderRadius: "5px" }}
        handleChange={handleChange}
      />
    </SearchContainer>
  );
};

export default React.memo(SearchInput);
