import styled from 'styled-components/native';
interface Props {
  colors: {
    primary: string;
    silver: string;
    gray: string;
    spacegray: string;
    background: string;
  };
}

const activeOpacityValue = { activeOpacity: 0.7 };

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding-top: 14px;
  padding-right: 14px;
`;

export const MenuContent = styled.TouchableOpacity.attrs(activeOpacityValue)`
`;

export const RightSide = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Button = styled.TouchableOpacity`
  margin-left: 20px;
  margin-right: -10px;
`;