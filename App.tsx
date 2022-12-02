import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import NavSwitcher from './src/navigation';
import {MD3LightTheme as DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
 

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'white',
    secondary: 'black',
  },
};

const App = () => {
  return (
    <PaperProvider theme={theme} >
    <NavigationContainer>
        <NavSwitcher />
    </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
