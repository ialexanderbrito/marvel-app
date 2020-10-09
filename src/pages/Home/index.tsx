import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

import Category from '../../components/Category';
import Section from '../../components/Section';
import Card from '../../components/Card';

import api from '../../services/api';

import {
  Wrapper,
  Container,
  Bar,
  Header,
  Title,
  SubTitle,
  List,
  Button,
} from './styles';

import Menu from '../../assets/icons/menu.svg';
import Logo from '../../assets/icons/marvel.svg';
import Search from '../../assets/icons/search.svg';

interface ICharacter {
  id: number;
  name: string;
  category: string;
  alterEgo: string;
  imagePath: string;
}

const Home: React.FC = () => {
  const navigation = useNavigation();
  const [characters, setCharacters] = useState<ICharacter[]>([]);

  useEffect(() => {
    api.get('/').then(({ data }) => setCharacters(data));
  }, []);

  return (
    <Wrapper>
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

        <List horizontal showsHorizontalScrollIndicator={false}>
          {characters
            .filter((character) => character.category === 'heroes')
            .map((character) => {
              return (
                <Button
                  key={String(character.id)}
                  onPress={() => navigation.navigate('Detail', { character })}
                  activeOpacity={0.6}
                >
                  <Card
                    key={character.id}
                    name={character.name}
                    alterEgo={character.alterEgo}
                    imagePath={character.imagePath}
                  />
                </Button>
              );
            })}
        </List>

        <Section title="Vilões" />

        <List horizontal showsHorizontalScrollIndicator={false}>
          {characters
            .filter((character) => character.category === 'villains')
            .map((character) => {
              return (
                <Button
                  key={String(character.id)}
                  onPress={() => navigation.navigate('Detail', { character })}
                  activeOpacity={0.6}
                >
                  <Card
                    key={character.id}
                    name={character.name}
                    alterEgo={character.alterEgo}
                    imagePath={character.imagePath}
                  />
                </Button>
              );
            })}
        </List>

        <Section title="Anti-heróis" />

        <List horizontal showsHorizontalScrollIndicator={false}>
          {characters
            .filter((character) => character.category === 'antiHeroes')
            .map((character) => {
              return (
                <Button
                  key={String(character.id)}
                  onPress={() => navigation.navigate('Detail', { character })}
                  activeOpacity={0.6}
                >
                  <Card
                    key={character.id}
                    name={character.name}
                    alterEgo={character.alterEgo}
                    imagePath={character.imagePath}
                  />
                </Button>
              );
            })}
        </List>

        <Section title="Humanos" />

        <List horizontal showsHorizontalScrollIndicator={false}>
          {characters
            .filter((character) => character.category === 'humans')
            .map((character) => {
              return (
                <Button
                  key={String(character.id)}
                  onPress={() => navigation.navigate('Detail', { character })}
                  activeOpacity={0.6}
                >
                  <Card
                    key={character.id}
                    name={character.name}
                    alterEgo={character.alterEgo}
                    imagePath={character.imagePath}
                  />
                </Button>
              );
            })}
        </List>
      </Container>
    </Wrapper>
  );
};

export default Home;
