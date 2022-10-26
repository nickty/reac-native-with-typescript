import { View, Text, StyleSheet, FlatList } from "react-native";
import React from "react";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";

import data from "../data.json";
import { Workout } from "../types/data";
import WorkoutItem from "../components/WorkoutItem";

const HomeScreen = ({ navigation }: NativeStackHeaderProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>HomeScreen</Text>
      <FlatList
        data={data as Workout[]}
        renderItem={({ item }) => <WorkoutItem item={item} />}
        keyExtractor={(item) => item.slug}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
  },
  header: {
    fontSize: 20,
    marginBottom: 20,
    fontWeight: "bold",
  },
});

export default HomeScreen;
