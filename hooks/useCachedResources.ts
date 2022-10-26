import { useEffect, useState } from "react";
import * as Font from "expo-font";

export default function useCachedResources() {
  const [isLoadingComplete, setIsLoadingComnplete] = useState(false);

  useEffect(() => {
    async function loadResourseAndDataAsync() {
      try {
        await Font.loadAsync({
          montserrat: require("../assets/fonts/Montserrat-Regular.ttf"),
          "montserrat-bold": require("../assets/fonts/Montserrat-Bold.ttf"),
        });
      } catch (error) {
        console.warn(error);
      } finally {
        setIsLoadingComnplete(true);
      }
    }
    loadResourseAndDataAsync();
  }, []);

  return isLoadingComplete;
}
