import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';

import { API_URL } from '../../../.env.json';

import {
  Container,
  ImgBackground,
  Gradient,
  ToBack,
  HeroContainer,
  AlterEgo,
  Name,
  Characteristics,
  CharacteristicContent,
  CharacteristicsText,
  BiographyContainer,
  BiographyText,
  Abilities,
  AbilitiesTitle,
  AbilitiesContent,
  AbilitiesText,
  MovieContainer,
  MovieTitle,
  MovieList,
  MovieContent,
  MovieImg,
} from './styles';

import SkillBar from '../../components/SkillBar';

import Back from '../../assets/icons/back.svg';
import Age from '../../assets/icons/age.svg';
import Weight from '../../assets/icons/weight.svg';
import Height from '../../assets/icons/height.svg';
import Universe from '../../assets/icons/universe.svg';

interface IParams {
  character: {
    id: number;
    name: string;
    alterEgo: string;
    imagePath: string;
    biography: string;
    caracteristics: {
      birth: number;
      weight: {
        value: number;
        unity: string;
      };
      height: {
        value: number;
        unity: string;
      };
      universe: string;
    };
    abilities: {
      force: number;
      intelligence: number;
      agility: number;
      endurance: number;
      velocity: number;
    };
    movies: string[];
  };
}

const Detail: React.FC = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const routeParams = route.params as IParams;

  const { character } = routeParams;

  return (
    <>
      <ImgBackground source={{ uri: `${API_URL}/${character.imagePath}` }}>
        <Gradient colors={['transparent', '#000']}></Gradient>
        <ToBack onPress={() => navigation.goBack()}>
          <Back />
        </ToBack>
        <Container showsVerticalScrollIndicator={false}>
          <HeroContainer>
            <AlterEgo>{character.alterEgo}</AlterEgo>
            <Name>{character.name}</Name>
          </HeroContainer>

          <Characteristics>
            <CharacteristicContent>
              <Age />
              <CharacteristicsText>{`${
                new Date().getFullYear() - character.caracteristics.birth
              } anos`}</CharacteristicsText>
            </CharacteristicContent>

            <CharacteristicContent>
              <Weight />
              <CharacteristicsText>
                {character.caracteristics.weight.value}
                {character.caracteristics.weight.unity}
              </CharacteristicsText>
            </CharacteristicContent>

            <CharacteristicContent>
              <Height />
              <CharacteristicsText>
                {character.caracteristics.height.value}
                {character.caracteristics.height.unity[0]}
              </CharacteristicsText>
            </CharacteristicContent>

            <CharacteristicContent>
              <Universe />
              <CharacteristicsText>
                {character.caracteristics.universe}
              </CharacteristicsText>
            </CharacteristicContent>
          </Characteristics>

          <BiographyContainer>
            <BiographyText>{character.biography}</BiographyText>
          </BiographyContainer>

          <Abilities>
            <AbilitiesTitle>Habilidades</AbilitiesTitle>
            <AbilitiesContent>
              <AbilitiesText>Força</AbilitiesText>
              <SkillBar value={character.abilities.force} />
            </AbilitiesContent>

            <AbilitiesContent>
              <AbilitiesText>Inteligência</AbilitiesText>
              <SkillBar value={character.abilities.intelligence} />
            </AbilitiesContent>

            <AbilitiesContent>
              <AbilitiesText>Agilidade</AbilitiesText>
              <SkillBar value={character.abilities.agility} />
            </AbilitiesContent>

            <AbilitiesContent>
              <AbilitiesText>Resistência</AbilitiesText>
              <SkillBar value={character.abilities.endurance} />
            </AbilitiesContent>

            <AbilitiesContent>
              <AbilitiesText>Velocidade</AbilitiesText>
              <SkillBar value={character.abilities.velocity} />
            </AbilitiesContent>
          </Abilities>

          <MovieContainer>
            <MovieTitle>Filmes</MovieTitle>
            <MovieList horizontal showsHorizontalScrollIndicator={false}>
              {character.movies.map((movie) => {
                return (
                  <MovieContent key={character.id}>
                    <MovieImg source={{ uri: `${API_URL}/${movie}` }} />
                  </MovieContent>
                );
              })}
            </MovieList>
          </MovieContainer>
        </Container>
      </ImgBackground>
    </>
  );
};

export default Detail;
