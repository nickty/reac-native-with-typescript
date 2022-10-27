import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NativeStackHeaderProps } from "@react-navigation/native-stack/lib/typescript/src/types";

type DetailParams = {
  route: {
    params: {
      slug: string;
    };
  };
};

type Navigation = NativeStackHeaderProps & DetailParams;

const WorkoutDetailScreen = ({ navigation, route }: Navigation) => {
  return (
    <View>
      <Text> Slug - {route.params.slug}</Text>
    </View>
  );
};

export default WorkoutDetailScreen;

const styles = StyleSheet.create({});
