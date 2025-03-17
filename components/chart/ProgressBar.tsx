import { useThemeColor } from "@/hooks/useThemeColor";
import React from "react";
import { View, StyleSheet } from "react-native";
import Animated from "react-native-reanimated";
import { ThemedText } from "../ThemedText";
import useAnimatedProgressFill from "@/hooks/useAnimatedProgressFill";

interface ProgressBarProps {
  progress: number;
  showPercentage?: boolean
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  progress,
  showPercentage
}) => {

  const { progressAnimatedStyle, progressValueString } = useAnimatedProgressFill(progress)

  const contrast = useThemeColor({}, "contrast")
  const secondary = useThemeColor({}, "secondary")

  const borderRadius = 3
  const height = 5

  return (
    <View style={styles.container}>
      <View style={[styles.progressBarContainer, { height, backgroundColor: secondary, borderRadius }]}>
        <Animated.View
          style={[
            styles.progress,
            progressAnimatedStyle,
            { backgroundColor: contrast, borderRadius },
          ]}
        />
      </View>
      {
        showPercentage &&
        <ThemedText type="defaultSemiBold" style={{marginTop: 5, fontSize: 13}}>
          {progressValueString}
        </ThemedText>
      }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 15,
    alignItems: "center"
  },

  progressBarContainer: {
    overflow: "hidden",
    flex: 1,
  },
  progress: {
    height: "100%",
  },
});

export default ProgressBar;
