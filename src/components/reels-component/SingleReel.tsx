import { StyleSheet, Text, View, Dimensions } from 'react-native'
import * as React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Video from 'react-native-video'
import Ionic from 'react-native-vector-icons/Ionicons'

type SingleReelProps = {
  item: any,
  index: number,
  currentIndex: number
}

const SingleReel = ({item, index, currentIndex}: SingleReelProps) => {

  const screenWidth = Dimensions.get("window").width;
  const screenHeight = Dimensions.get("window").height;

  
  const [mute, setMute] = React.useState(false);

  const videoRef = React.useRef(null);

  const onBuffer = (buffer: any) => {
    console.log("buffering", buffer);
  }

  const videoError = (error: any) => {
    console.log("error", error);
  }


  return (
    <View style={{
      width:screenWidth,
      height:screenHeight,
      position: 'relative',
    }}>
      <TouchableOpacity 
        style={{
          position: 'relative',
          width: screenWidth,
          height: screenHeight,
        }}
         onPress = {
            () => setMute(!mute)
         } 
          >
        <Video
          source={item.video}
          ref={videoRef}
          onBuffer={onBuffer}
          onError={videoError}
          repeat={true}
          resizeMode="cover"
          paused={false}
          muted={mute}
          style={{
            width : screenWidth,
            height: screenHeight,
            position: 'absolute',
          }}

        />
     {/* <Ionic name="volume-mute" style={{fontSize:25, color:'white'}} /> */}
      </TouchableOpacity>
        
    </View>
  )
}

export default SingleReel
