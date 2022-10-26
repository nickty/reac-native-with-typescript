import { View, Text, StyleSheet, FlatList } from "react-native";
import React from "react";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";

import data from "../data.json";
import { Workout } from "../types/data";

const HomeScreen = ({ navigation }: NativeStackHeaderProps) => {
  const renderItem = ({ item }: { item: Workout }) => (
    <View>
      <Text>{item.name}</Text>
      <Text>{item.difficulty}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* <Text>HomeScreen</Text> */}
      <FlatList
        data={data as Workout[]}
        renderItem={renderItem}
        keyExtractor={(item) => item.slug}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});

export default HomeScreen;
