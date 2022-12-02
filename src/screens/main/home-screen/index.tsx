import * as React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import HomeHeader from '../../../components/home-header';


const HomeScreen  = () => {
  return (
    <View style={{}}>
      <View>
        <HomeHeader />
      </View>
    <Text>HomeScreen</Text>
    <TouchableOpacity> 
    <Text>Go to another screen</Text>
    </TouchableOpacity>

    </View>
  );
};

export default HomeScreen;
