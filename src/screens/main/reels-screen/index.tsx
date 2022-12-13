import * as React from 'react';
import {View, Text, Dimensions, StyleSheet} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const ReelsScreen = () => {
  return (
    <View style={{width:windowWidth, height:windowHeight}}>
      <View>
      <Text> Reels</Text>
      <Feather name="camera" style={{fontSize:25}} />
      </View> 
    </View>
  );
};

export default ReelsScreen;
