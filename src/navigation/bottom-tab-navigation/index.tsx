import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { 
   HomeStack,
    SearchStack,
    ShoppingStack,
    ReelsStack,
    ProfileStack
  } from '../stack-navigation/main-stack-navigation';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator 
          screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: '#e91e63',
            tabBarShowLabel: false,
          }}
        >
        <Tab.Screen name="Home" component={HomeStack} 
        options={{ 
            tabBarLabel: 'Home',
            tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="home-variant-outline" color={color} size={30} />
            )

        }}
        />
        <Tab.Screen name="Search" component={SearchStack} 
           options={{ 
            tabBarLabel: 'Search',
            tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="magnify" color={color} size={30} />
            )

        }}
        />
        <Tab.Screen name="Reels" component={ReelsStack} 
          options={{ 
            tabBarLabel: 'Reels',
            tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="movie-open-play-outline" color={color} size={30} />
            )

        }}
        />
        <Tab.Screen name="Shop" component={ShoppingStack} 
           options={{ 
            tabBarLabel: 'Shop',
            tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="shopping-outline" color={color} size={30} />
            )

        }}
        />
        <Tab.Screen name="Profile" component={ProfileStack} 
            options={{ 
                tabBarLabel: 'Profile',
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="account-circle-outline" color={color} size={30} />
                )
    
            }}
        />
        </Tab.Navigator>
    );
    };

export default BottomTabNavigator;