import { useThemeColor } from "@/hooks/useThemeColor"
import { FC } from "react"
import { View } from "react-native"
import { ThemedText } from "./ThemedText"

interface ErrorTextProps {
  errorMessage?: string
}

const ErrorText: FC<ErrorTextProps> = ({
  errorMessage
}) => {

  const errorColor = useThemeColor({}, "error")

  if(!errorMessage) return <View/>

  return(
    <ThemedText type="defaultSemiBold" style={{color: errorColor}}>
      {errorMessage}
    </ThemedText>
  )
}

export default ErrorText