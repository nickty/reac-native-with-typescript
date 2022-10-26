import { useEffect, useState } from "react";

export default function useCachedResources() {
  const [isLoadingComplete, setIsLoadingComnplete] = useState(false);

  useEffect(() => {
    function loadResourseAndDataAsync() {
      setTimeout(() => {
        setIsLoadingComnplete(true);
      }, 3000);
    }

    loadResourseAndDataAsync();
  }, []);

  return isLoadingComplete;
}
