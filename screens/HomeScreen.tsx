import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";

import data from "../data.json";

const HomeScreen = ({ navigation }: NativeStackHeaderProps) => {
  return (
    <View>
      <Text>HomeScreen</Text>
      <Text>{JSON.stringify(data, null, 4)}</Text>
    </View>
  );
};

const styles = StyleSheet({});

export default HomeScreen;
