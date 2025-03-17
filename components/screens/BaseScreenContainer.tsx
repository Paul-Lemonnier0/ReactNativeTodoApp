import { FC } from "react"
import { ThemedView } from "../ThemedView"
import { StyleSheet } from "react-native"

interface BaseScreenContainerProps {
  children: React.ReactNode,
  isScrollable?: boolean
}

const BaseScreenContainer: FC<BaseScreenContainerProps> = ({children, isScrollable}) => {
  return(
    <ThemedView style={[styles.container, {paddingBottom: isScrollable ? 0 : 30}]}>
      {children}
    </ThemedView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 30,
    gap: 20
  }
})

export default BaseScreenContainer