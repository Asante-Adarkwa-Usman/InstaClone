import * as React from 'react';
import {View, Text, Dimensions, StyleSheet} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import ReelsComponent from '../../../components/reels-component';
const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const ReelsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.secondContainer}>
      <Text style={{fontSize: 24, fontWeight:'bold', color:'white'}}> Reels </Text> 
      <Feather name="camera" size={25} color="white" />
      </View>
      <ReelsComponent />
    </View>
  );
};

export default ReelsScreen;

const styles = StyleSheet.create({
  container: {
    width: screenWidth,
    height: screenHeight,
    backgroundColor: 'black',
    position: 'relative'
  },
  secondContainer: {
    position:'absolute',
    top: 0,
    left: 0,
    right:0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    zIndex: 1,
    padding: 10
  }
});
