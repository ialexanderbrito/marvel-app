import React from 'react';

import Category from '../../components/Category';
import Section from '../../components/Section';

import { Container, Bar, Header, Title, SubTitle } from './styles';

import Menu from '../../assets/icons/menu.svg';
import Logo from '../../assets/icons/marvel.svg';
import Search from '../../assets/icons/search.svg';

const Home: React.FC = () => {
  return (
    <Container>
      <Bar>
        <Menu />
        <Logo />
        <Search />
      </Bar>

      <Header>
        <Title>Bem vindo ao Marvel Heroes</Title>
        <SubTitle>Escolha seu personagem</SubTitle>
      </Header>

      <Category />
      <Section title="Heróis" />
    </Container>
  );
};

export default Home;
