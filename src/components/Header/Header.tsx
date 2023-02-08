import React from "react";
import Text from "../../atoms/Text/Text";
import { HeaderContainer } from "./styles";

const Header = () => {
  return (
    <HeaderContainer>
      <Text content="Menu" fontSize="15px" fontWeight="700" />
      <Text content="Marvel" fontSize="20px" fontWeight="700" />
      <Text content="Search" fontSize="15px" fontWeight="700" />
    </HeaderContainer>
  );
};

export default React.memo(Header);
