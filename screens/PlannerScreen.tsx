import { View, Text, Button } from "react-native";
import React, { useEffect } from "react";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";

const PlannerScreen = ({ navigation }: NativeStackHeaderProps) => {
  useEffect(() => {
    console.log("planner screen");
  }, []);
  return (
    <View>
      <Text>PlannerScreen</Text>
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate("Home")}
      ></Button>
    </View>
  );
};

export default PlannerScreen;
