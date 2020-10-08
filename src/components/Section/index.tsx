import React from 'react';

import { Container, Title, SeeAll } from './styles';

interface ISection {
  title: string;
}

const Section: React.FC<ISection> = ({ title }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <SeeAll>Ver tudo</SeeAll>
    </Container>
  );
};

export default Section;
