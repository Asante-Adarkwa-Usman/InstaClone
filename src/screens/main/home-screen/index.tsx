import * as React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import HomeHeader from '../../../components/home/home-header';
import Post from '../../../components/home/Post';
import Stories from '../../../components/home/Stories';
import { POSTS } from '../../../data/post';


const HomeScreen = () => {
  return (
    <View style={{}}>
      <HomeHeader />
      <ScrollView>
        <Stories />
        {
          POSTS.map((post, index) => (
            <Post post={post} key={index} />
          ))
        }
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
