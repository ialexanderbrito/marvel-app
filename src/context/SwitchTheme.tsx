import React, { createContext, useState, useContext } from 'react';

import light from '../styles/themes/light';
import dark from '../styles/themes/dark';

interface Colors {
  colors: {
    primary: string;
    silver: string;
    gray: string;
    spacegray: string;
    background: string;
  };
  SwitchTheme(): void;
  isDark: boolean;
}

const ThemeContext = createContext<Colors>({} as Colors);

export const ThemeSwitchProvider: React.FC = ({ children }) => {
  const [colors, setColors] = useState(light);
  const [isDark, setIsDark] = useState(false);

  function SwitchTheme() {
    if (colors === light) {
      setColors(dark);
      setIsDark(true);
    } else {
      setColors(light);
      setIsDark(false);
    }
  }

  return (
    <ThemeContext.Provider
      value={{
        colors,
        SwitchTheme,
        isDark,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export function useSwitchTheme() {
  const context = useContext(ThemeContext);

  return context;
}
