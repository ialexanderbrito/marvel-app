import React from 'react';
import { MaterialIcons, AntDesign } from '@expo/vector-icons';

import SwitchThemes from '../../components/SwitchThemes';

import { useSwitchTheme } from '../../context/SwitchTheme';

import { Container, MenuContent, RightSide, Button } from './styles';

import Logo from '../../assets/icons/logo.svg';

const Header: React.FC = () => {
  const { colors } = useSwitchTheme();

  return (
    <Container>
      <MenuContent>
        <MaterialIcons name="menu" size={24} color={colors.gray} />
      </MenuContent>
      <Logo style={{ marginLeft: 50 }} />
      <RightSide>
        <SwitchThemes />
        <Button>
          <AntDesign name="search1" size={24} color={colors.gray} />
        </Button>
      </RightSide>
    </Container>
  );
};

export default Header;
