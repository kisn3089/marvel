import React from 'react';
import { useNavigate } from 'react-router-dom';
import Text from '../../atoms/Text/Text';
import { HeaderContainer } from './styles';
import * as Svg from '../../atoms/icons/index';

const Header = () => {
  const navigate = useNavigate();

  return (
    <HeaderContainer>
      <Svg.Menu style={{ width: '27px' }} />
      <Text
        content="Marvel"
        fontSize="18px"
        fontWeight="600"
        customStyle={{ cursor: 'pointer' }}
        handleClick={() => navigate('/chlist')}
      />
      <Svg.Card
        onClick={() => navigate('/card/create')}
        style={{ width: '37px', cursor: 'pointer' }}
      />
    </HeaderContainer>
  );
};

export default React.memo(Header);
