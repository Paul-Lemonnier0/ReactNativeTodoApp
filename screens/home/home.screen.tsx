import { BorderIconButton } from "@/components/buttons/BasicButtons";
import { TodoListRenderer } from "@/components/lists/TodoList";
import { ThemedText } from "@/components/ThemedText";
import { useTodoList } from "@/context/TodoListContext";
import { FC, useCallback, useRef } from "react";
import { Platform, View } from "react-native";
import { AddTodoBottomSheet } from "@/components/bottomSheets/AddTodoBottomSheet";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import ProgressBar from "@/components/chart/ProgressBar";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { HomeStackParamsList } from "@/navigation/HomeNavigationStack";
import { ThemedView } from "@/components/ThemedView";
import BaseScreenContainer from "@/components/screens/BaseScreenContainer";
import { useAppContext } from "@/context/AppContext";
import { i18nKeys } from "@/localizations/localizations_keys";
import { BaseImpact } from "@/constants/Impacts";
import useTranslations from "@/hooks/useTranslations";

type HomeScreenProps = NativeStackScreenProps<HomeStackParamsList, "HomeScreen">;

const HomeScreen: FC<HomeScreenProps> = ({ navigation }) => {

  // Get the methods and variables from the todolist context
  const { addTodoItem } = useTodoList()

  // Refs for the bottom sheets
  const addTodoBottomSheetRef = useRef<BottomSheetModal>(null)

  // Callbacks to open the bottom sheets (those will not be rerendered at each state change)
  const openAddTodoBottomSheet = useCallback(() => {
    BaseImpact()
    addTodoBottomSheetRef.current?.present()
  }, [])

  const handlePressOnTodo = (id: string) => {
    BaseImpact()
    navigation.navigate("TodoItemDetails", { id })
  }

  return(
    <>
      <BaseScreenContainer isScrollable>
        <HomeScreenHeader handleAddTodo={openAddTodoBottomSheet}/>
        <HomeScreenContent handlePressOnTodo={handlePressOnTodo}/>
      </BaseScreenContainer>

      <AddTodoBottomSheet
        bottomSheetRef={addTodoBottomSheetRef}
        addTodoItem={(title: string) => addTodoItem(title)}
      />
    </>
  )
}

interface HomeScreenHeaderProps {
  handleAddTodo: (() => void)
}

const HomeScreenHeader: FC<HomeScreenHeaderProps> = ({
  handleAddTodo
}) => {

  // Get the method to get the progress of the todo list using the todolist context
  const {
    getTodoListProgress
  } = useTodoList()

  const {
    getTranslation
  } = useTranslations()

  const { locale, i18n } = useAppContext()

  // Get the date in the format "Month Day, Year"
  const dateString = new Date().toLocaleDateString(locale, {
    year: "numeric",
    month: 'long',
    day: 'numeric'
  })

  // Get the platform name (iOS or Android)
  const platform = Platform.OS === 'ios' ? 'iOS' : 'Android'

  // Get the progress of the todo list
  const progress = getTodoListProgress()

  return(
    <ThemedView style={{gap: 10}}>
      <View style={{flexDirection: "row", justifyContent: 'space-between'}}>
        <View>
          <ThemedText type="title">{getTranslation(i18nKeys.appName)}</ThemedText>
          <ThemedText type="subtitle" gray>{dateString}</ThemedText>
          <ThemedText type="defaultSemiBold">{platform}</ThemedText>
        </View>

        <BorderIconButton
          onPress={handleAddTodo}
          iconName={"add"}
        />
      </View>

      <ProgressBar progress={progress / 100} showPercentage/>
    </ThemedView>
  )
}

interface HomeScreenContentProps {
  handlePressOnTodo: (id: string) => void
}

const HomeScreenContent: FC<HomeScreenContentProps> = ({
  handlePressOnTodo
}) => {

  // Get the todo list and the method from the context to toggle a todo item
  const {
    todoList,
    toggleTodoItem
  } = useTodoList()

  return(
    <View style={{flex: 1}}>
      <TodoListRenderer
        todoList={todoList}
        handleClickOnTodo={handlePressOnTodo}
        handleCheckTodo={toggleTodoItem}
      />
    </View>
  )
}

export default HomeScreen;