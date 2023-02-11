import React from 'react';
import SourceInfo from '../../components/SourceInfo/SourceInfo';
import useCardDetail from '../../hooks/useCardDetail';
import Text from '../Text/Text';
import { SourceContainer } from './styles';

interface ISource {
  source: number | undefined;
}

const Source = ({ source }: ISource) => {
  const { isSourceInfo, SourceClick } = useCardDetail();
  return (
    <SourceContainer onClick={SourceClick}>
      <Text content={isSourceInfo ? '닫기' : `${source}POOL`} color="#222" />
      {isSourceInfo && <SourceInfo />}
    </SourceContainer>
  );
};

export default React.memo(Source);
