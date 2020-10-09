import React from 'react';
import { API_URL } from '../../../.env.json';

import { Container, Img, AlterEgo, Name } from './styles';

interface ICharacter {
  name: string;
  alterEgo: string;
  imagePath: string;
}

const Card: React.FC<ICharacter> = ({ name, alterEgo, imagePath }) => {
  return (
    <Container>
      <Img source={{ uri: `${API_URL}/${imagePath}` }} />
      <AlterEgo>{alterEgo}</AlterEgo>
      <Name>{name}</Name>
    </Container>
  );
};

export default Card;
