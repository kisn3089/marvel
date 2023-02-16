import React from "react";

const useSelected = () => {
  const [isSelected, setIsSelected] = React.useState(false);
  const [editIdx, setIsIdx] = React.useState(0);

  const toggleSelected = React.useCallback(
    (e: React.MouseEvent<HTMLImageElement>) => {
      const { id } = e.currentTarget;
      if (Number(id) === editIdx) {
        setIsIdx(999);
        setIsSelected(false);
      } else {
        setIsIdx(Number(id));
        setIsSelected(true);
      }
    },
    [editIdx]
  );
  return { editIdx, isSelected, toggleSelected };
};

export default useSelected;
