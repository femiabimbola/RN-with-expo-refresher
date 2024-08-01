import { useState } from 'react'
import { View, Text, FlatList } from 'react-native' 
import * as Animatable from 'react-native-animatable'

const TrendingItem = ({activeItem, item}) => {
  return (
    <Animatable.View classNmae="mr-5">

    </Animatable.View>
  )
}

const Trending = ({posts}) => {
  const[activeItem, setActiveItem] = useState()
  return (
    <FlatList 
      data={posts}
      keyExtractor={(item) => (
        <TrendingItem activeItem={activeItem} />
      )}
      horizontal
    />
  )
}

export default Trending