import React from 'react'
import {
    View,
    Text,
    ScrollView,
    Image,
    StyleSheet,
    useColorScheme
} from 'react-native'
import {
    USERS
} from '../../data/users'
import theme from '../../theme'


const Stories = () => {
    const scheme = useColorScheme() === 'dark' ? theme.colors.offWhite : theme.colors.black
    return (
        <View style={{ marginBottom: 13 }}>
            <ScrollView horizontal={true}
                showsHorizontalScrollIndicator={false}>
                {
                    USERS.map((story, index) => (
                        <View key={index}
                            style={{
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                            <Image source={{ uri: story.image }}
                                style={styles.story} />
                            <Text style={{ color: scheme }}>
                                {
                                    story.user.length > 11 ? story.user.slice(0, 10).toLowerCase() + '... ' : story.user.toLowerCase()
                                }
                            </Text>
                        </View>
                    ))
                }
            </ScrollView>
        </View>
    )
}
export default Stories;

const styles = StyleSheet.create({
    story: {
        width: 70,
        height: 70,
        marginLeft: 10,
        borderWidth: 3,
        borderColor: '#ff8401',
        borderRadius: 70,
    }
});

