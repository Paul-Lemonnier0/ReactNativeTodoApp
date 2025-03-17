import { useEffect } from "react";
import { useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";

const useAnimatedProgressFill = (progress: number, duration: number = 500) => {
  const animatedProgress = useSharedValue(0);

  // Ensure the progress is between 0 and 1
  const isProgressValid = (!isNaN(progress) && progress >= 0 && progress <= 1)
  const validProgressValue = isProgressValid ? progress : 0

  useEffect(() => {
    animatedProgress.value = withTiming(validProgressValue, { duration });
  }, [validProgressValue]);


  const progressAnimatedStyle = useAnimatedStyle(() => ({
    width: `${animatedProgress.value * 100}%`,
  }));

  const progressValueString = `${Math.round(validProgressValue * 100)}%`

  return {
    progressAnimatedStyle,
    progressValueString
  }
}

export default useAnimatedProgressFill