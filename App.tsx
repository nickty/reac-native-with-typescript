import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import useCachedResources from "./hooks/useCachedResources";
import Navigation from "./navigation";
import HomeScreen from "./screens/HomeScreen";
import PlannerScreen from "./screens/PlannerScreen";

export default function App() {
  const isLoaded = useCachedResources();
  // console.log(isLoaded);

  if (isLoaded) {
    return <Navigation />;
  } else {
    return null;
  }
}
