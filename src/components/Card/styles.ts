import styled from 'styled-components/native';

export const Container = styled.View`
  width: 120px;
  height: 210px;
  border-radius: 15px;
  margin-right: 10px;

  shadow-color: #000;

  shadow-offset: 0px 2px;
  shadow-opacity: 0.23;
  shadow-radius: 262;
  elevation: 4;
`;

export const Img = styled.Image`
  width: 120px;
  height: 210px;
  border-radius: 15px;
`;

export const AlterEgo = styled.Text`
  font-family: 'Gilroy_500Medium';
  font-size: 10px;
  color: #FFF;
  opacity: 0.75;
`;

export const Name = styled.Text`
  font-family: 'Gilroy_800Heavy';
  font-size: 20px;
  color: #FFF;

  flex-shrink: 1;

  position: absolute;
  left: 14px;
  bottom: 0px;
`;
