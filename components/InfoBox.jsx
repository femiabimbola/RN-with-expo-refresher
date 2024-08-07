import { View, Text } from 'react-native'

const InfoBox = ({title, subtitle, containerStyles, titleStyles}) => {
  return (
    <View className={containerStyles}>
      <Text className="">{title}</Text>
    </View>
  )
}

export default InfoBox