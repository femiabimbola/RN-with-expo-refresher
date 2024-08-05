import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import useAppwrite from "../../lib/useAppwrite";
import { searchPosts } from "../../lib/appWrite";

const Search = () => {
  const { query } = useLocalSearchParams();
  // const { data: posts, refetch } = useAppwrite(searchPosts(query));
  const { data: posts, refetch } = useAppwrite(() => searchPosts(query));

  useEffect(() => {
    refetch();
  }, [query]);
  return (
    <SafeAreaView className="bg-primary h-full">
      <FlatList
        data={posts}
        keyExtractor={(item) => item.$id}
        ListHeaderComponent={() => (
          <View className="my-6 px-4">
            <View>
              <Text className="font-pmedium text-sm text-gray-100">
                Search Results
              </Text>
              <Text className="text-2xl font-psemibold text-white">
                {query}
              </Text>
              <View className={"mt-6 mb-8"}>
                <SearchInput initialQuery={query} />
              </View>
            </View>
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

export default Search;
