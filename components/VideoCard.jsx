import { View, Text } from 'react-native'

const VideoCard = ({video: {title, thumbnail, video, creator: {username, avatar}}}) => {
  return (
    <View className="flex-col">
      <Text className="text-white">{title}</Text>
    </View>
  )
}

export default VideoCard