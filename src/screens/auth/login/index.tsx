import * as React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { CommonActions, useNavigation } from '@react-navigation/native';
import theme from "../../../theme";


const LoginScreen = () => {
    const navigation = useNavigation();
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{fontSize: 24}}>Login Screen</Text>
        <TouchableOpacity onPress={() => navigation.dispatch({
            ...CommonActions.navigate({name:'Signup'}),
        })
        }> 
        <Text style={{color:theme.colors.red}}>Go to signup screen</Text>
        </TouchableOpacity>

        </View>
    );
    };

export default LoginScreen;