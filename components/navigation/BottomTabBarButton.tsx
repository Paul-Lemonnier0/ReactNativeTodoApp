import { useThemeColor } from "@/hooks/useThemeColor";
import { Ionicons } from "@expo/vector-icons";
import { FC } from "react";
import { TouchableWithoutFeedback, View } from "react-native";

interface TabButtonProps {
  icon: string,
  onPress: () => void;
  isFocused: boolean;
}

const BottomTabBarButton: FC<TabButtonProps> = ({
  icon,
  onPress,
  isFocused,
}) => {

  const contrast = useThemeColor({}, 'contrast')
  const fontGray = useThemeColor({}, 'fontGray')

  return(
    <TouchableWithoutFeedback  onPress={onPress}>
      <View style={{padding: 20}}>
        <Ionicons name={icon as any} size={24} color={isFocused ? contrast : fontGray} />
      </View>
    </TouchableWithoutFeedback>
  )
}

export default BottomTabBarButton