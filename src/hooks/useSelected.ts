import React from 'react';

const useSelected = () => {
  const [selectedCard, setSelectedCard] = React.useState<string[]>([]);
  const [cardStatus, setCardStatus] = React.useState({
    status: '',
    isActive: false,
  });

  const toggleSelected = React.useCallback(
    (e: React.MouseEvent<HTMLImageElement>) => {
      const { id } = e.currentTarget;
      if (selectedCard.length !== 10) {
        if (cardStatus.isActive) setCardStatus({ status: '', isActive: false });
        selectedCard.includes(id)
          ? setSelectedCard(selectedCard.filter((item) => item !== id))
          : setSelectedCard([...selectedCard, id]);
      } else {
        setCardStatus({ status: '카드가 가득찼습니다.', isActive: true });
      }
    },
    [selectedCard, cardStatus]
  );
  return { selectedCard, cardStatus, toggleSelected };
};

export default useSelected;
