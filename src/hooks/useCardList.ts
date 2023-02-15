import { useCallback, useEffect, useState } from "react";
import { cardData } from "../assets/data/DummyData";
import { TCard } from "../types/card.type";

const useCardList = () => {
  const [searchValue, setSearchValue] = useState("");
  const [cardList, setCardList] = useState<TCard[]>([]);

  useEffect(() => {
    setCardList(cardData);
  }, []);

  const changeSearchValue = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchValue(e.target.value);
    },
    [searchValue]
  );

  const filterdCardList = (cardData: TCard[], searchValue: string) => {
    return cardData.filter((card: TCard) => card.name.includes(searchValue));
  };

  return {
    cardList: filterdCardList(cardList, searchValue),
    searchValue,
    changeSearchValue,
  };
};

export default useCardList;
