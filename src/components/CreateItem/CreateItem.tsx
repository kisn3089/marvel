import React from "react";
import ImgBox from "../../atoms/ImgBox/ImgBox";
import { CreateItemContainer } from "./styles";

interface ICreateItem {
  pickedCard?: string | undefined;
}

const CreateItem = ({ pickedCard }: ICreateItem) => {
  return (
    <CreateItemContainer pickedCard={pickedCard !== undefined}>
      {pickedCard && <ImgBox src={pickedCard} />}
    </CreateItemContainer>
  );
};

export default React.memo(CreateItem);
