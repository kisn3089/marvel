import React from "react";
import SourceInfo from "../../components/SourceInfo/SourceInfo";
import useCardDetail from "../../hooks/useCardDetail";
import Text from "../Text/Text";
import { SourceContainer } from "./styles";

interface ISource {
  source: string | undefined;
}

const Source = ({ source }: ISource) => {
  const { isSourceInfo, SourceClick } = useCardDetail();
  return (
    <SourceContainer onClick={SourceClick}>
      <Text
        content={isSourceInfo ? "닫기" : source}
        color="#222"
        fontSize="10px"
      />
      {isSourceInfo && <SourceInfo />}
    </SourceContainer>
  );
};

export default React.memo(Source);
