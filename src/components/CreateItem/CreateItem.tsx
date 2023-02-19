import React from 'react';
import ImgBox from '../../atoms/ImgBox/ImgBox';
import { CreateItemContainer } from './styles';

interface ICreateItem {
  // cardList
  pickedCard?: string | undefined;
}

const CreateItem = ({ pickedCard }: ICreateItem) => {
  console.log(pickedCard);

  return (
    <CreateItemContainer>
      <ImgBox src={pickedCard} />
    </CreateItemContainer>
  );
};

export default React.memo(CreateItem);
