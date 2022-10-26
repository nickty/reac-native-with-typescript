import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Workout } from "../types/data";

const WorkoutItem = ({ item }: Workout) => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.duration}>{item.duration}</Text>
      <Text style={styles.difficulty}>{item.difficulty}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    borderColor: "rgba(0,0,0,0.1)",
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    backgroundColor: "white",
  },
  name: {
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 5,
  },
  duration: {
    fontSize: 15,
  },
  difficulty: {
    fontSize: 15,
  },
});

export default WorkoutItem;
