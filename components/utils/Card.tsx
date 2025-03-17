import { useThemeColor } from "@/hooks/useThemeColor"
import { FC } from "react"
import { StyleSheet, TouchableOpacity, View } from "react-native"

interface CardProps {
  isSelected?: boolean,
  onPress?: () => void,
  small?: boolean,
  noFlex?: boolean,
  children: React.ReactNode
}

/**
 * Base card component to render a selectable card
 */
const Card: FC<CardProps> = ({
  onPress,
  isSelected,
  small,
  noFlex,
  children
}) => {

  // Get the theme colors
  const secondary = useThemeColor({}, 'secondary')
  const field = useThemeColor({}, 'field')
  const contrast = useThemeColor({}, 'contrast')

  return(
    <TouchableOpacity onPress={onPress} disabled={!onPress}>
      <View
        style={[
          small ? styles.smallContainer : styles.container,
          {
            flex: noFlex ? undefined : 1,
            borderColor: isSelected ? contrast : secondary,
            backgroundColor: field,
          }
        ]}
      >
        {children}
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },

  smallContainer: {
    borderWidth: 2,
    borderRadius: 15,
    paddingHorizontal: 20,
    paddingVertical: 20,
  }
})

export default Card