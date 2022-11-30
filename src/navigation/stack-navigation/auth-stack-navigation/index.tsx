import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
    RegisterScreen,
    LoginScreen,
} from '../../../screens/auth';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
      <Stack.Navigator 
      initialRouteName="Register"
      screenOptions={{
        headerShown: false,
      }}
      >
        <Stack.Screen
          name="Signup"
          component={RegisterScreen}
        />
        <Stack.Screen 
        name="Login" 
        component={LoginScreen} />
      </Stack.Navigator>
   
  );
};
export default AuthStack;