import { View, Text } from 'react-native';
import * as React from 'react';
import {
    HomeScreen,
    SearchScreen,
    ShoppingScreen,
    ReelsScreen,
    ProfileScreen
} from '../../../screens/main';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const NavStack = createNativeStackNavigator();


const HomeStack= () => {
    return (
        <NavStack.Navigator
        screenOptions={{
            headerShown: false,
        }}
        >
            <NavStack.Screen name="HomeScreen" component={HomeScreen} />
        </NavStack.Navigator>
    );
};

const SearchStack= () => {
    return (
        <NavStack.Navigator
        screenOptions={{
            headerShown: false,
        }}
        >
            <NavStack.Screen name="SearchScreen" component={SearchScreen} />
        </NavStack.Navigator>
    );
};

const ShoppingStack= () => {
    return (
        <NavStack.Navigator
        screenOptions={{
            headerShown: false,
        }}
        >
            <NavStack.Screen name="ShoppingScreen" component={ShoppingScreen} />
        </NavStack.Navigator>
    );
};

const ReelsStack= () => {
    return (
        <NavStack.Navigator
        screenOptions={{
            headerShown: false,
        }}
        >
            <NavStack.Screen name="ReelsScreen" component={ReelsScreen} />
        </NavStack.Navigator>
    );
};

const ProfileStack= () => {
    return (
        <NavStack.Navigator
        screenOptions={{
            headerShown: false,
        }}
        >
            <NavStack.Screen name="ProfileScreen" component={ProfileScreen} />
        </NavStack.Navigator>
    );
};

export {HomeStack, SearchStack, ShoppingStack, ReelsStack, ProfileStack};



