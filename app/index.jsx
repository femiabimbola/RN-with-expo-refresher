import {StatusBar} from "expo-status-bar";
import {Image, ScrollView, StyleSheet, Text, View} from "react-native";
import {Redirect, router} from "expo-router";
import {SafeAreaView} from "react-native-safe-area-context";
import {images} from "../constants";
import CustomButton from "../components/CustomButton";

export default function App() {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{height: "100%"}}>
        <View className="w-full justify-center items-center min-h-[85vh] px-4">
          <Image
            source={images.logo}
            className="w-[130px] h-[84px]"
            resizeMode="contain"
          />
          <Image
            source={images.cards}
            className="h-[320px] w-full max-w-[400px]"
            resizeMode="contain"
          />
          <View className="relative mt-5">
            <Text className=" text-5xl text-white font-bold text-center">
              Discover Endless Possibilites with
              <Text className="text-secondary-200"> Aora</Text>
            </Text>
            <Image
              source={images.path}
              className="w-[136px] h-[15px] absolute -bottom-2 -right-8"
              resizeMode="contain"
            />
          </View>
          <Text className="text-green-100 text-sm font-pregular mt-7 text-center">
            Where creativity meets innovation: embark on a journey of limitless
            exploration with Aora
          </Text>
          <CustomButton
            title="Continue with Email"
            handlePress={() => router.push("/sign-in")}
            containerStyle="w-full mt-7"
          />
        </View>
      </ScrollView>
      <StatusBar
        backgroundColor="#161622"
        style="light"
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
