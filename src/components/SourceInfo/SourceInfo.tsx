import React from "react";
import Source from "../../atoms/Source/Source";
import Text from "../../atoms/Text/Text";
import { PoolInfo, SourceInfoCenter, SourceInfoContainer } from "./styles";

const SourceInfo = () => {
  return (
    <>
      <SourceInfoContainer>
        <SourceInfoCenter>
          <PoolInfo>
            <Source source="1POOL" />
            <Text content="18-214" />
          </PoolInfo>
          <PoolInfo>
            <Source source="2POOL" />
            <Text content="222-474" />
          </PoolInfo>
          <PoolInfo>
            <Source source="3POOL" />
            <Text content="486+" />
          </PoolInfo>
          <PoolInfo>
            <Source source="4POOL" />
            <Text content="486+ Rare" />
          </PoolInfo>
          <PoolInfo>
            <Source source="5POOL" />
            <Text content="486+ Ultra Rare" />
          </PoolInfo>
        </SourceInfoCenter>
      </SourceInfoContainer>
    </>
  );
};

export default React.memo(SourceInfo);
