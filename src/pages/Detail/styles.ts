import styled from 'styled-components/native';
import Constants from 'expo-constants';
import { LinearGradient } from 'expo-linear-gradient'

export const Container = styled.ScrollView``;

export const ImgBackground = styled.ImageBackground`
  flex: 1;
  padding-horizontal: 32px;
  padding-top: ${Constants.statusBarHeight + 20}px;
`;

export const Gradient = styled(LinearGradient)`
  height: 120%;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
`;

export const ToBack = styled.TouchableOpacity``;

export const HeroContainer = styled.View`
  margin-top: 252px;
`;

export const AlterEgo = styled.Text`
  font-family: 'Gilroy_500Medium';
  font-size: 16px;
  color: #FFF;
  opacity: 0.75;
  left: 14px;
`;

export const Name = styled.Text`
  font-family: 'Gilroy_800Heavy';
  font-size: 40px;
  color: #FFF;
  flex-shrink: 1;
  left: 14px;
  width: 180px;
`;

export const Characteristics = styled.View`
  margin-top: 20px;
  margin-bottom: 20px;
  flex-direction: row;
  justify-content: space-between;
`;

export const CharacteristicContent = styled.View`
  width: 60px;
  height: 48px;
  align-content: center;
  align-items: center;
  justify-content: space-between;
`;

export const CharacteristicsText = styled.Text`
  font-family: 'Gilroy_500Medium';
  font-size: 12px;
  color: #FFF;
  opacity: 0.75;
`;

export const BiographyContainer = styled.View``;

export const BiographyText = styled.Text`
  font-family: 'Gilroy_500Medium';
  font-size: 14px;
  color: #FFF;
  opacity: 0.75;
`;

export const Abilities = styled.View`
  margin-top: 15px;
  margin-bottom: 15px;
`;

export const AbilitiesTitle = styled.Text`
  font-family: 'Gilroy_700Bold';
  font-size: 18px;
  color: #FFF;
  margin-bottom: 15px;
`;

export const AbilitiesContent = styled.View`
  margin-bottom: 15px;
  flex-direction: row;
  align-content: center;
  align-items: center;
`;

export const AbilitiesText = styled.Text`
  font-family: 'Gilroy_400Regular';
  font-size: 12px;
  opacity: 0.75;
  color: #FFF;
  width: 80px;
`;

export const MovieContainer = styled.View`
  margin-top: 15px;
  margin-bottom: 15px;
`;

export const MovieList = styled.ScrollView``;

export const MovieImg = styled.Image`
  width: 120px;
  height: 210px;
  border-radius: 15px;
`;

export const MovieTitle = styled.Text`
  font-family: 'Gilroy_700Bold';
  font-size: 18px;
  color: #FFF;
  opacity: 0.75;
`;

export const MovieContent = styled.View`
  margin-right: 10px;
  margin-top: 15px;
`;
