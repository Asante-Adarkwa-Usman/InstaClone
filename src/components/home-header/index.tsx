import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { 
    StyleSheet,
    Text,
    View 
} from 'react-native'
import { IconButton} from 'react-native-paper'
import theme from '../../theme'

const HomeHeader = () => {
  return (
    <View style={styles.mainContainer}>
        <View style={styles.container}>
         <View>  
        <Text style={styles.textStyle}>Instagram</Text>
        </View>
        <View style={styles.iconContainer}>
        <IconButton
            icon="chevron-down"
            iconColor={theme.colors.black}
            size={22}
            onPress={() => console.log('Button Pressed')}
        /> 
        </View> 
        <View style={styles.secondaryContainer}>
       <View >
       <IconButton
            icon="plus-box-outline"
            iconColor={theme.colors.black}
            size={30}
            onPress={() => console.log('Button Pressed')}
        />
        </View>     
      <View> 
         <IconButton
            icon="heart-outline"
            iconColor={theme.colors.black}
            size={30}
            onPress={() => console.log('Button Pressed')}
        /> 
        </View> 
        <View>
          <IconButton
            icon="facebook-messenger"
            iconColor={theme.colors.black}
            size={30}
            onPress={() => console.log('Button Pressed')}
         /> 
         </View>
        </View>
      </View>  
    </View>
  )
}

export default HomeHeader

const styles = StyleSheet.create({
     mainContainer: {
        width: wp('100%'),
        height: hp('10%'), 
        backgroundColor: theme.colors.offWhite,
        justifyContent:'space-evenly'    
    },
    container: {
      flexDirection:'row', 
      marginLeft: theme.spacing.m
    },
    textStyle: {
      fontSize:38,
      fontFamily:'StyleScript-Regular',
      color:theme.colors.black 
      },
    iconContainer: {
      paddingTop:10,
      paddingRight:5 
     },
    secondaryContainer: {
      flexDirection:'row',
      alignItems:'center', 
      marginLeft: theme.spacing.xl + 5
    }
   
})