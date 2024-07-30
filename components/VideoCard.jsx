import { View, Text } from "react-native";

const VideoCard = ({
  video: {
    title,
    thumbnail,
    video,
    creator: { username, avatar },
  },
}) => {
  return (
    <View className="flex-col items-center px-4 mb-14">
      <View className="flex-row gap-3 items-start">
        <View className="justify-center items-center flex-row flex-1">
          <View className="w-[46px] h-[46px] rounded-lg border border-secondary justify-center items-center p-0.5">
            <Image
              source={{ url: avatar }}
              className="w-full h-full rounded-lg"
              resizeMode ='cover'
            />
          </View>
          <View className="justify-center flex-1 ml-3 gap-y-1">
            <Text className="text-white font-psemibold text-sm">{title}</Text>
          </View>
        </View>
      </View>
      <Text className="text-white text-2xl">{title}</Text>
    </View>
  );
};

export default VideoCard;
