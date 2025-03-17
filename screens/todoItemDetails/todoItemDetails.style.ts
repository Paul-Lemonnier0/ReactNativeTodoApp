import { StyleSheet } from "react-native";

const todoItemDetailsStyles = StyleSheet.create({
  container: {
    flex: 1
  },

  bodyContainer: {
    flex: 1
  },

  todoDetailsContainer: {
    justifyContent: 'space-between',
    alignItems: "center",
    flexDirection: "row",
    gap: 20
  },

  todoTitleContainer: {
    flex: 1,
    gap: 5
  }
})

export default todoItemDetailsStyles;