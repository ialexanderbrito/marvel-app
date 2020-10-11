import React, { useContext } from 'react';
import { Feather } from '@expo/vector-icons';

import { useSwitchTheme } from '../../context/SwitchTheme';

import { SwitchButton } from './styles';

const SwitchThemes: React.FC = () => {
  const { colors, SwitchTheme, isDark } = useSwitchTheme();

  return (
    <SwitchButton onPress={SwitchTheme}>
      {isDark ? (
        <Feather name="sun" size={24} color={colors.gray} />
      ) : (
        <Feather name="moon" size={24} color={colors.gray} />
      )}
    </SwitchButton>
  );
};

export default SwitchThemes;
