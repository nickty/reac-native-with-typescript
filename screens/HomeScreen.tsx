import { View, Text, StyleSheet, FlatList, Pressable } from "react-native";
import React from "react";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";

import data from "../data.json";
import { Workout } from "../types/data";
import WorkoutItem from "../components/WorkoutItem";
import MontserratText from "../components/styled/MontserratText";

const HomeScreen = ({ navigation }: NativeStackHeaderProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Home Screen</Text>
      {/* <MontserratText style={{ fontSize: 30 }}>tetsdlkfjsdl</MontserratText> */}
      <FlatList
        data={data as Workout[]}
        renderItem={({ item }) => (
          <Pressable onPress={() => navigation.navigate("WorkoutDetail")}>
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
