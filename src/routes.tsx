import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import { useSwitchTheme } from '../src/context/SwitchTheme';

import Home from './pages/Home';
import Detail from './pages/Detail';

import colors from './styles/colors';

const AppStack = createStackNavigator();

const Routes: React.FC = () => {
  const { colors } = useSwitchTheme();

  return (
    <NavigationContainer>
      <AppStack.Navigator
        headerMode="none"
        screenOptions={{
          gestureEnabled: true,
          gestureDirection: 'horizontal',
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          headerShown: false,
          cardStyle: {
            backgroundColor: colors.background,
          },
        }}
      >
        <AppStack.Screen name="Home" component={Home} />
        <AppStack.Screen name="Detail" component={Detail} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
