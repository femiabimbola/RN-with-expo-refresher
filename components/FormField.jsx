import {Text, View} from "react-native";
import React from "react";

const FormField = ({
  title,
  value,
  placeholder,
  handleChangeText,
  otherStyles,
  ...props
}) => {
  return (
    <View className="space-x-2">
      <Text className="text-base text-gray-100 font-pmedium"> Hi</Text>
    </View>
  );
};

export default FormField;
