import { FC } from "react"
import RadioButton, { RadioButtonProps } from "./RadioButton"
import { StyleSheet, View } from "react-native"
import { ThemedText } from "../ThemedText"
import { useThemeColor } from "@/hooks/useThemeColor"
import { Ionicons } from "@expo/vector-icons"

interface IconRadioButtonProps extends Omit<RadioButtonProps, "children"> {
  icon: string,
  label?: string,
  iconColor?: string,
  iconSize?: number
}

const IconRadioButton: FC<IconRadioButtonProps> = ({
  onPress,
  isSelected,
  icon,
  label,
  iconColor,
  iconSize = 24
}) => {

  const fontGray = useThemeColor({}, "fontGray")
  const font = useThemeColor({}, "font")

  const textColor = isSelected ? font : fontGray

  return(
    <RadioButton
      noFlex small
      onPress={onPress}
      isSelected={isSelected}
    >
      <View style={styles.container}>
        <Ionicons name={icon as any} size={iconSize} color={iconColor ?? textColor}/>
        { label && <ThemedText type="medium" style={{color: textColor}}>{label}</ThemedText> }
      </View>
    </RadioButton>
  )

}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 15
  }
})

export default IconRadioButton