import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NativeStackHeaderProps } from "@react-navigation/native-stack/lib/typescript/src/types";

const WorkoutDetailScreen = ({ navigation, route }: NativeStackHeaderProps) => {
  return (
    <View>
      <Text> Slug - {(route.params as any).slug}</Text>
    </View>
  );
};

export default WorkoutDetailScreen;

const styles = StyleSheet.create({});
