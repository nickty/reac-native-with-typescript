import { useEffect, useState } from "react";
import * as Font from "expo-font";
import { getData, storeData } from "../storage";
import data from "../data.json";

export default function useCachedResources() {
  const [isLoadingComplete, setIsLoadingComnplete] = useState(false);

  useEffect(() => {
    async function loadResourseAndDataAsync() {
      try {
        await storeData("workout-data", data);
        await Font.loadAsync({
          montserrat: require("../assets/fonts/Montserrat-Regular.ttf"),
          "montserrat-bold": require("../assets/fonts/Montserrat-Bold.ttf"),
        });
      } catch (error) {
        console.warn(error);
      } finally {
        const workouts = await getData("workout-data");
        console.log(workouts);
        setIsLoadingComnplete(true);
      }
    }
    loadResourseAndDataAsync();
  }, []);

  return isLoadingComplete;
}
