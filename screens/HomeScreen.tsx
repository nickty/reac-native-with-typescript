import { View, Text, StyleSheet, FlatList, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";

import data from "../data.json";
import { Workout } from "../types/data";
import WorkoutItem from "../components/WorkoutItem";
import MontserratText from "../components/styled/MontserratText";
import { getWorkouts } from "../storage/workout";

const HomeScreen = ({ navigation }: NativeStackHeaderProps) => {
  const [workouts, setWorkouts] = useState<Workout[]>([]);

  useEffect(() => {
    async function getData() {
      const _workouts = await getWorkouts();
      setWorkouts(_workouts);
    }
    getData();
  }, []);

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
