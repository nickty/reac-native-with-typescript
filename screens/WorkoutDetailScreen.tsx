import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { NativeStackHeaderProps } from "@react-navigation/native-stack/lib/typescript/src/types";
import { getWorkoutBySlug } from "../storage/workout";
import { useWorkoutBySlug } from "../hooks/useWorkoutBySlug";

type DetailParams = {
  route: {
    params: {
      slug: string;
    };
  };
};

type Navigation = NativeStackHeaderProps & DetailParams;

const WorkoutDetailScreen = ({ navigation, route }: Navigation) => {
  const workout = useWorkoutBySlug(route.params.slug);
  return (
    <View>
      <Text>{workout?.name}</Text>
    </View>
  );
};

export default WorkoutDetailScreen;

const styles = StyleSheet.create({});
