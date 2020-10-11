import styled from 'styled-components/native';
import Constants from 'expo-constants';

interface Props {
  colors: {
    primary: string;
    silver: string;
    gray: string;
    spacegray: string;
    background: string;
  };
}

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

export const Heading = styled.View`
  margin-top: 20px;
`;

export const Title = styled.Text<Props>`
  color: ${(props) => props.colors.spacegray};
  font-family: 'Gilroy_600SemiBold';
  font-size: 14px;
`;

export const SubTitle = styled.Text<Props>`
  color: ${(props) => props.colors.gray};
  font-family: 'Gilroy_800Heavy';
  font-size: 32px;
`;

export const List = styled.ScrollView``;

export const Button = styled.TouchableOpacity``;
