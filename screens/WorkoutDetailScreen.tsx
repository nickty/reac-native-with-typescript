import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { NativeStackHeaderProps } from "@react-navigation/native-stack/lib/typescript/src/types";
import { getWorkoutBySlug } from "../storage/workout";

type DetailParams = {
  route: {
    params: {
      slug: string;
    };
  };
};

type Navigation = NativeStackHeaderProps & DetailParams;

const WorkoutDetailScreen = ({ navigation, route }: Navigation) => {
  useEffect(() => {
    async function getData() {
      const workout = await getWorkoutBySlug(route.params.slug);
      // console.log(workout);
    }
    getData();
  }, []);
  return (
    <View>
      <Text> Slug - {route.params.slug}</Text>
    </View>
  );
};

export default WorkoutDetailScreen;

const styles = StyleSheet.create({});
