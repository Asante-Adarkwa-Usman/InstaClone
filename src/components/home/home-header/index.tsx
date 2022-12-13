import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import {
  StyleSheet,
  Text,
  View,
  useColorScheme
} from 'react-native'
import { IconButton } from 'react-native-paper'
import Icon from 'react-native-vector-icons/Ionicons';
import theme from '../../../theme';
import { TouchableOpacity } from 'react-native-gesture-handler';

const HomeHeader = () => {
  const scheme = useColorScheme() === 'dark' ? theme.colors.offWhite : theme.colors.black
  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <View>
          <Text style={[styles.textStyle, { color: scheme }]}>Instagram</Text>
        </View>
        <View style={styles.iconContainer}>
          <IconButton
            iconColor={scheme}
            icon="chevron-down"
            size={22}
            onPress={() => console.log('Button Pressed')}
          />
        </View>
        <View style={styles.secondaryContainer}>
          <View style={{ flexDirection: 'row' }}>
            <View style={{ marginHorizontal: theme.spacing.m }}>
              <TouchableOpacity>
                <Icon name="add-circle-outline" size={30} color={scheme} />
              </TouchableOpacity>
            </View>
            <View style={{ marginRight: theme.spacing.m }}>
              <TouchableOpacity>
                <Icon name="heart-half" size={30} color={scheme} />
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity>
                <View style={styles.unreadMessageContainer}>
                  <Text style={styles.unreadMessageText}>5</Text>
                </View>
                <Icon name="chatbubble-ellipses-outline" size={30} color={scheme} />
              </TouchableOpacity>
            </View>
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
    paddingHorizontal: theme.spacing.m,

  },
  unreadMessageContainer: {
    position: 'absolute',
    top: -3,
    right: -3,
    backgroundColor: '#ff3250',
    borderRadius: 25,
    width: wp('4.2%'),
    height: hp('2.5%'),
    justifyContent: 'center',
    alignItems: 'center',
    margin: 3,
    zIndex: 100
  },
  unreadMessageText: {
    color: theme.colors.white,
    fontSize: 12,
    fontWeight: 'bold'
  }

})