import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import useAppwrite from "../../lib/useAppwrite";
import { getUserPosts,  } from "../../lib/appWrite";
import SearchInput from "../../components/SearchInput";
import VideoCard from "../../components/VideoCard";
import EmptyState from "../../components/EmptyState"
import { useGlobalContext } from "../../context/GlobalProvider";
import { icons } from "../../constants";


//  We are using global context
const Profile = () => {
  const { user, setUser, setIsLoggedIn} = useGlobalContext()
  const { data: posts, refetch } = useAppwrite(() => getUserPosts(user.$id));

  return (
    <SafeAreaView className="bg-primary h-full">
      <FlatList
        data={posts}
        keyExtractor={(item) => item.$id}
        ListHeaderComponent={() => (
          <View className="w-full justify-center items-center mt-6 mb-12 px-4" >
            <TouchableOpacity>
              <Image  source={icons.logout } resizeMode="contain" className="w-6 h-6"/>
            </TouchableOpacity>
          </View>
        )}
        renderItem={({ item }) => <VideoCard video={item} />}
        ListEmptyComponent={() => (
          <EmptyState title="No videos found" subtitle="No Video found for this search query" />
        )}
      />
    </SafeAreaView>
  );
};

export default Profile;
