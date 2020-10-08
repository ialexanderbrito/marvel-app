import React from 'react';

import { Container, Circle } from './styles';

import Hero from "../../assets/icons/hero.svg";
import Villain from "../../assets/icons/villain.svg";
import Antihero from "../../assets/icons/antihero.svg";
import Alien from "../../assets/icons/alien.svg";
import Human from "../../assets/icons/human.svg";

const Category: React.FC = () => {
  return (
    <Container>
      <Circle colors={['#005bea', '#00c6fb']}>
        <Hero />
      </Circle>

      <Circle colors={['#ED1D24', '#ED1F69']}>
        <Villain />
      </Circle>

      <Circle colors={['#B224EF', '#7579FF']}>
        <Antihero />
      </Circle>

      <Circle colors={['#0BA360', '#3CBA92']}>
        <Alien />
      </Circle>

      <Circle colors={['#FF7EB3', '#FF758C']}>
        <Human />
      </Circle>

    </Container>
  );
};

export default Category;
