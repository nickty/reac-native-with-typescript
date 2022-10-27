import { useEffect, useState } from "react";
import * as Font from "expo-font";
import { containsKey, getData, removeItem, storeData } from "../storage";
import data from "../data.json";
import { clearWorkouts, getWorkouts, initWorkout } from "../storage/workout";

export default function useCachedResources() {
  const [isLoadingComplete, setIsLoadingComnplete] = useState(false);

  useEffect(() => {
    async function loadResourseAndDataAsync() {
      try {
        // await clearWorkouts()
        await initWorkout();
        await Font.loadAsync({
          montserrat: require("../assets/fonts/Montserrat-Regular.ttf"),
          "montserrat-bold": require("../assets/fonts/Montserrat-Bold.ttf"),
        });
      } catch (error) {
        console.warn(error);
      } finally {
        // const workouts = await getWorkouts();
        // console.log(workouts);
        setIsLoadingComnplete(true);
      }
    }
    loadResourseAndDataAsync();
  }, []);

  return isLoadingComplete;
}
