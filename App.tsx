import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import NavSwitcher from './src/navigation';
 
const App = () => {
  return (
    <NavigationContainer>
        <NavSwitcher />
    </NavigationContainer>
  );
};

export default App;
