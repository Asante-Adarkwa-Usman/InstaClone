import * as React from 'react';

import { SafeAreaView, useColorScheme } from 'react-native'
import NavSwitcher from './src/navigation';
import { adaptNavigationTheme, MD3LightTheme as DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import {
  NavigationContainer,
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';
import {
  MD3DarkTheme,
  MD3LightTheme,
} from 'react-native-paper';
import merge from 'deepmerge';

const { LightTheme, DarkTheme } = adaptNavigationTheme({
  light: NavigationDefaultTheme,
  dark: NavigationDarkTheme,
});

const CombinedDefaultTheme = merge(MD3DarkTheme, LightTheme);
const CombinedDarkTheme = merge(MD3LightTheme, DarkTheme);



const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <PaperProvider theme={isDarkMode ? CombinedDarkTheme : CombinedDefaultTheme} >
      <NavigationContainer theme={isDarkMode ? CombinedDarkTheme : CombinedDefaultTheme}>
        <SafeAreaView style={{ flex: 1 }}>
          <NavSwitcher />
        </SafeAreaView>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
