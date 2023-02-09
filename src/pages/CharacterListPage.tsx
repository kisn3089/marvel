import CharacterList from "../components/CharacterList/CharacterList";
import useCardList from "../hooks/useCardList";

export const CharacterListPage = () => {
  const {} = useCardList();
  return <CharacterList />;
};
