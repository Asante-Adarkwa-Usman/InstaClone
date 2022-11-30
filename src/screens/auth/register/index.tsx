import * as React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation, CommonActions} from '@react-navigation/native';
import theme from "../../../theme";






const RegisterScreen  = () => {
    const navigation = useNavigation();
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{fontSize: 24}}>Register Screen</Text>
        <TouchableOpacity 
        onPress={() => navigation.dispatch({
            ...CommonActions.navigate({name:'Login'}),
        })}> 
        <Text style={{color:theme.colors.red}}>Go to login screen</Text>
        </TouchableOpacity>
        </View>
    );
    };

export default RegisterScreen;