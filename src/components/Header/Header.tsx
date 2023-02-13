import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import Text from "../../atoms/Text/Text";
import SearchInput from "../SearchInput/SearchInput";
import { HeaderContainer } from "./styles";

const Header = () => {
  const navigate = useNavigate();
  const [isSearch, setIsSearch] = useState(false);
  const [searchValue, setSearchValeu] = useState("");

  const changeSearchValue = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchValeu(e.target.value);
    },
    [searchValue]
  );

  return (
    <HeaderContainer>
      <Text content="Menu" fontSize="14px" fontWeight="500" />
      <Text
        content="Marvel"
        fontSize="18px"
        fontWeight="600"
        handleClick={() => navigate("/chlist")}
      />
      <Text
        content="Search"
        fontSize="14px"
        fontWeight="500"
        handleClick={() => setIsSearch((prev) => !prev)}
      />
      {isSearch && (
        <SearchInput content={searchValue} handleChange={changeSearchValue} />
      )}
    </HeaderContainer>
  );
};

export default React.memo(Header);
