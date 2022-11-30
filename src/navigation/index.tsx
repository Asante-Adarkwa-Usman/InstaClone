import * as React from 'react';
import {AuthStack} from './stack-navigation';
//import {LoginScreen, RegisterScreen} from '../screens/auth'
import BottomTabNavigator from './bottom-tab-navigation';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();


  const NavSwitcher = () => {

    const [isLoggedIn, setIsLoggedIn] = React.useState(true);
     
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        {isLoggedIn ? (
          <Stack.Screen
            name="MainApp"
            component={BottomTabNavigator}
          />
        ) : (
          <Stack.Screen
            name="Auth"
            component={AuthStack}
          />
        )}
      </Stack.Navigator>
    );
  };

export default NavSwitcher;

