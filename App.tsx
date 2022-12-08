import * as React from 'react';

import { SafeAreaView, useColorScheme } from 'react-native'
import NavSwitcher from './src/navigation';
import {
  NavigationContainer,
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';
import {
  Provider as PaperProvider,
  adaptNavigationTheme,
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
  const scheme = useColorScheme() === 'dark' ? CombinedDarkTheme : CombinedDefaultTheme

  return (
    <PaperProvider theme={scheme} >
      <NavigationContainer theme={scheme}>
        <SafeAreaView style={{ flex: 1 }}>
          <NavSwitcher />
        </SafeAreaView>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
