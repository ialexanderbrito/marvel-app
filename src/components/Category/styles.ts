import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

export const Container = styled.View`
  margin-top: 20px;
  margin-bottom: 20px;
  flex-direction: row;
  justify-content: space-between;
`;

export const Circle = styled(LinearGradient)`
  width: 56px;
  height: 56px;
  border-radius: 50px;
  align-content: center;
  justify-content: center;
  align-items: center;
  background-color: #b7b7c8;
`;