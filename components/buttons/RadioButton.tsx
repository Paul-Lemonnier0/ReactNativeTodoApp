import { FC } from "react"
import Card from "../utils/Card"

export interface RadioButtonProps {
  small?: boolean,
  noFlex?: boolean,
  onPress: () => void,
  isSelected?: boolean,
  children: React.ReactNode
}

const RadioButton: FC<RadioButtonProps> = ({
  small,
  noFlex,
  onPress,
  isSelected,
  children
}) => {
  return(
    <Card noFlex={noFlex} small={small} onPress={onPress} isSelected={isSelected}>
      {children}
    </Card>
  )
}

export default RadioButton