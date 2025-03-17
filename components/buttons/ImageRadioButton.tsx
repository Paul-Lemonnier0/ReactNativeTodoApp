import { FC } from "react"
import RadioButton, { RadioButtonProps } from "./RadioButton"
import { StyleProp, StyleSheet, View } from "react-native"
import { Image, ImageStyle } from "expo-image"
import { ThemedText } from "../ThemedText"
import { useThemeColor } from "@/hooks/useThemeColor"

interface ImageRadioButtonProps extends Omit<RadioButtonProps, "children"> {
  img: string,
  label?: string,
  imageStyle?: StyleProp<ImageStyle>
}

const ImageRadioButton: FC<ImageRadioButtonProps> = ({
  onPress,
  isSelected,
  img,
  label,
  imageStyle
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
        <Image source={img} contentFit="contain" style={imageStyle}/>
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

export default ImageRadioButton