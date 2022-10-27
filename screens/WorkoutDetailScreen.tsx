import { Modal, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { NativeStackHeaderProps } from "@react-navigation/native-stack/lib/typescript/src/types";
import { getWorkoutBySlug } from "../storage/workout";
import { useWorkoutBySlug } from "../hooks/useWorkoutBySlug";
import PressableText from "../components/styled/PressableText";

type DetailParams = {
  route: {
    params: {
      slug: string;
    };
  };
};

type Navigation = NativeStackHeaderProps & DetailParams;

const WorkoutDetailScreen = ({ navigation, route }: Navigation) => {
  const [isModalVisisble, setModalVisible] = useState(false);
  const workout = useWorkoutBySlug(route.params.slug);
  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 20, marginBottom: 10 }}>{workout?.name}</Text>
      <PressableText text="Cehck" onPress={() => setModalVisible(true)} />
      <Modal
        visible={isModalVisisble}
        transparent={false}
        animationType="slide"
      >
        <View style={styles.centerView}>
          <Text>Hello</Text>
          <PressableText text="Close" onPress={() => setModalVisible(false)} />
        </View>
      </Modal>
    </View>
  );
};

export default WorkoutDetailScreen;

const styles = StyleSheet.create({
  centerView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
