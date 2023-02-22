import React, { useEffect } from "react";

const useSelected = () => {
  const isDeck = localStorage.getItem("deck");
  const deck: string[] = isDeck ? JSON.parse(isDeck) : "";
  const [selectedCard, setSelectedCard] = React.useState<string[]>(deck);
  const [cardStatus, setCardStatus] = React.useState({
    status: "카드가 가득",
    isActive: false,
  });

  useEffect(() => {
    localStorage.setItem("deck", JSON.stringify(selectedCard));
    // localStorage.clear();
  }, [selectedCard]);

  const toggleSelected = React.useCallback(
    (e: React.MouseEvent<HTMLImageElement>) => {
      const { id } = e.currentTarget;
      if (selectedCard.length !== 10) {
        if (cardStatus.isActive) setCardStatus({ status: "", isActive: false });
        selectedCard.includes(id)
          ? setSelectedCard(selectedCard.filter((item) => item !== id))
          : setSelectedCard([...selectedCard, id]);
      } else if (selectedCard.length === 10 && selectedCard.includes(id)) {
        setSelectedCard(selectedCard.filter((item) => item !== id));
        setCardStatus({ status: "", isActive: false });
      } else if (selectedCard.length === 10 && !cardStatus.isActive) {
        setCardStatus({ status: "카드가 가득찼습니다.", isActive: true });
        setTimeout(() => {
          setCardStatus({ status: "", isActive: false });
        }, 3000);
      }
    },
    [selectedCard, cardStatus]
  );
  return { selectedCard, cardStatus, toggleSelected };
};

export default useSelected;
