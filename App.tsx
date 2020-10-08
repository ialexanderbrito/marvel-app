import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {AppLoading} from 'expo';
import {useFonts} from '@use-expo/font';

import Routes from './src/routes';

import Gilroy_400Regular from './assets/fonts/gilroy-regular.ttf';
import Gilroy_500Medium from './assets/fonts/gilroy-medium.ttf';
import Gilroy_600SemiBold from './assets/fonts/gilroy-semibold.ttf';
import Gilroy_700Bold from './assets/fonts/gilroy-bold.ttf';
import Gilroy_800Heavy from './assets/fonts/gilroy-heavy.ttf';

export default function App() {
  let [fontsLoaded] = useFonts({
    Gilroy_400Regular,
    Gilroy_500Medium,
    Gilroy_600SemiBold,
    Gilroy_700Bold,
    Gilroy_800Heavy,
  });

  if (!fontsLoaded){
    return <AppLoading />
  }
  return (
    <>
    <StatusBar style="dark" backgroundColor="transparent" translucent />
    <Routes />
    </>
  );
}
