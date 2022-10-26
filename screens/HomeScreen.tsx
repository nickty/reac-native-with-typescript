import { View, Text } from "react-native";
import React from "react";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";

const HomeScreen = ({ navigation }: NativeStackHeaderProps) => {
  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;
