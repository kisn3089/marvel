import { useCallback, useState } from 'react';

const useCardDetail = () => {
  const [isSourceInfo, setIsSourceInfo] = useState(false);

  const SourceClick = useCallback(() => {
    setIsSourceInfo((prev) => !prev);
  }, [isSourceInfo]);

  return { isSourceInfo, SourceClick };
};

export default useCardDetail;
