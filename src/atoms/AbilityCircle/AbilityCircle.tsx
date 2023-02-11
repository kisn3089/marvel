import React from 'react';
import Text from '../Text/Text';
import { CircleContainer } from './styles';

interface IAbilityCircle {
  ability: string | undefined;
}

const AbilityCircle = ({ ability }: IAbilityCircle) => {
  return (
    <CircleContainer>
      <Text
        content={ability}
        fontSize="10px"
        fontWeight="500"
        color="#cfcfcf"
      />
    </CircleContainer>
  );
};

export default React.memo(AbilityCircle);
