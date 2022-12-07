import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import {
  StyleSheet,
  Text,
  View
} from 'react-native'
import { IconButton } from 'react-native-paper'
import Icon from 'react-native-vector-icons/Ionicons';
import theme from '../../../theme'
import { TouchableOpacity } from 'react-native-gesture-handler';

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

            size={22}
            onPress={() => console.log('Button Pressed')}
          />
        </View>
        <View style={styles.secondaryContainer}>
          <View>
            <IconButton
              icon="plus-box-outline"

              size={30}
              onPress={() => console.log('Button Pressed')}
            />
          </View>
          <View>
            <IconButton
              icon="heart-outline"

              size={30}
              onPress={() => console.log('Button Pressed')}
            />
          </View>
          <View>
            <TouchableOpacity>
              <View style={styles.unreadMessageContainer}>
                <Text style={styles.unreadMessageText}>5</Text>
              </View>
              <Icon name="chatbubble-ellipses-outline" size={30} />
            </TouchableOpacity>
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
    justifyContent: 'space-evenly'
  },
  container: {
    flexDirection: 'row',
    marginLeft: theme.spacing.m
  },
  textStyle: {
    fontSize: 38,
    fontFamily: 'StyleScript-Regular'
  },
  iconContainer: {
    paddingTop: 8,
    paddingRight: 5
  },
  secondaryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: theme.spacing.l
  },
  unreadMessageContainer: {
    position: 'absolute',
    top: -5,
    right: -5,
    backgroundColor: '#ff3250',
    borderRadius: 25,
    width: wp('5%'),
    height: hp('2.5%'),
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 100
  },
  unreadMessageText: {
    color: theme.colors.white,
    fontSize: 12,
    fontWeight: 'bold'
  }

})