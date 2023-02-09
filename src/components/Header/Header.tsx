import React from "react";
import Text from "../../atoms/Text/Text";
import { HeaderContainer } from "./styles";

const Header = () => {
  return (
    <HeaderContainer>
      <Text content="Menu" fontSize="14px" fontWeight="500" />
      <Text content="Marvel" fontSize="18px" fontWeight="600" />
      <Text content="Search" fontSize="14px" fontWeight="500" />
    </HeaderContainer>
  );
};

export default React.memo(Header);
