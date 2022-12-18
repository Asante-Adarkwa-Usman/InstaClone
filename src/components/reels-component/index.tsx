import { StyleSheet, Text, View } from 'react-native'
import * as React from 'react'
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import {reelsData} from '../../data/reelsData';
import SingleReel from './SingleReel';

type ReelProps = {
  index: number
}


const ReelsComponent = () => {
 const [currentIndex, setCurrentIndex] = React.useState(0); 

 const handleChangeIndexValue = ({index}:ReelProps) => {
   setCurrentIndex(index);
 }

  return (
    <SwiperFlatList 
      vertical={true}
      data={reelsData}
      onChangeIndex = {handleChangeIndexValue}
        renderItem={
          ({item, index}) => {
            return (
              <SingleReel item={item} index={index} currentIndex={currentIndex} />
            )
          }
        }
        keyExtractor={(item, index) => index.toString()}
    />
  )
}

export default ReelsComponent

const styles = StyleSheet.create({})