import { View, Text, StyleSheet, FlatList, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";

import WorkoutItem from "../components/WorkoutItem";
import { useWorkouts } from "../hooks/useWorkouts";

const HomeScreen = ({ navigation }: NativeStackHeaderProps) => {
  const workouts = useWorkouts();

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Home Screen</Text>
      {/* <MontserratText style={{ fontSize: 30 }}>tetsdlkfjsdl</MontserratText> */}
      <FlatList
        data={workouts}
        renderItem={({ item }) => (
          <Pressable
            onPress={() =>
              navigation.navigate("WorkoutDetail", {
                slug: item.slug,
              })
            }
          >
            <WorkoutItem item={item} />
          </Pressable>
        )}
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
    fontFamily: "montserrat-bold",
  },
});

export default HomeScreen;
