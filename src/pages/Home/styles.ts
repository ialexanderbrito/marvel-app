import styled from 'styled-components/native';
import Constants from 'expo-constants';

export const Wrapper = styled.ScrollView``;

export const Container = styled.View`
  flex: 1;
  padding-horizontal: 32px;
  padding-top: ${Constants.statusBarHeight + 20}px;
`;

export const Bar = styled.View`
  flex-direction: row; 
  justify-content: space-between; 
`;

export const Header = styled.View`
  margin-top: 20px;
`;

export const Title = styled.Text`
  font-family: 'Gilroy_600SemiBold';
  font-size: 14px;
  color: #b7b7c8;
`;

export const SubTitle = styled.Text`
  font-family: 'Gilroy_800Heavy';
  font-size: 32px;
  color: #313140;
`;

export const List = styled.ScrollView``;

export const Button = styled.TouchableOpacity``;
