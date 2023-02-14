import React, { CSSProperties } from "react";
import Input from "../../atoms/Input/Input";
import { SearchBarBox, SearchContainer } from "./styles";

interface ISearchInput {
  content: string;
  placeholder?: string;
  customStyle?: CSSProperties;
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
}

const SearchInput = ({
  content,
  placeholder,
  customStyle,
  handleChange,
}: ISearchInput) => {
  return (
    <SearchBarBox>
      <SearchContainer>
        <Input
          type="text"
          content={content}
          width="100%"
          height="30px"
          placeholder={placeholder}
          fontSize="16px"
          border="1px solid rgb(135, 206, 235, 0.5)"
          customStyle={customStyle}
          handleChange={handleChange}
        />
      </SearchContainer>
    </SearchBarBox>
  );
};

export default React.memo(SearchInput);
