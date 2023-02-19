import React from 'react';

const useSelected = () => {
  const [selectedCard, setSelectedCard] = React.useState<string[]>([]);

  const toggleSelected = React.useCallback(
    (e: React.MouseEvent<HTMLImageElement>) => {
      const { id } = e.currentTarget;
      selectedCard.includes(id)
        ? setSelectedCard(selectedCard.filter((item) => item !== id))
        : setSelectedCard([...selectedCard, id]);
    },
    [selectedCard]
  );
  return { selectedCard, toggleSelected };
};

export default useSelected;
