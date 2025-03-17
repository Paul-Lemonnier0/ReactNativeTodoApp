import { View } from "react-native"
import { BorderIconButton, BorderIconButtonProps } from "../buttons/BasicButtons"
import { FC } from "react"
import { ThemedText } from "../ThemedText"

interface BaseScreenHeaderProps {
  leftButtonProps?: BorderIconButtonProps,
  rightButtonProps?: BorderIconButtonProps,
  title?: string
}

const BaseScreenHeader: FC<BaseScreenHeaderProps> = ({ title, leftButtonProps, rightButtonProps }) => {
  const hasButtons = leftButtonProps || rightButtonProps

  return(
    <View style={{gap: 20}}>
      {
        hasButtons && (
          <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
            { leftButtonProps && <BorderIconButton {...leftButtonProps}/> }
            { rightButtonProps && <BorderIconButton {...rightButtonProps}/> }
          </View>
        )
      }

      <View>
        <ThemedText type="title">{title}</ThemedText>
      </View>
    </View>
  )
}

export default BaseScreenHeader