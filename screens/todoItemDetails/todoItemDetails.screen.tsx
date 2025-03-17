import { SettingsTodoBottomSheet } from "@/components/bottomSheets/SettingsTodoBottomSheet";
import { BackgroundTextButton } from "@/components/buttons/BasicButtons";
import BaseScreenContainer from "@/components/screens/BaseScreenContainer";
import BaseScreenHeader from "@/components/screens/BaseScreenHeader";
import { ThemedText } from "@/components/ThemedText";
import { BaseImpact } from "@/constants/Impacts";
import { useAppContext } from "@/context/AppContext";
import { useTodoList } from "@/context/TodoListContext";
import { useThemeColor } from "@/hooks/useThemeColor";
import { i18nKeys } from "@/localizations/localizations_keys";
import { HomeStackParamsList } from "@/navigation/HomeNavigationStack";
import { getTodoDateString } from "@/utils/todoUtils/todoUtils";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { FC, useCallback, useRef } from "react";
import { View } from "react-native";
import todoItemDetailsStyles from "./todoItemDetails.style";
import useTranslations from "@/hooks/useTranslations";
import { CustomCheckbox } from "@/components/buttons/checkBox/Checkbox";

type TodoItemDetailsScreenProps = NativeStackScreenProps<HomeStackParamsList, "TodoItemDetails">;

const TodoItemDetailsScreen: FC<TodoItemDetailsScreenProps> = ({ navigation, route }) => {

  const { id } = route.params

  const errorColor = useThemeColor({}, "error")

  const { locale } = useAppContext()
  const { getTranslation } = useTranslations()

  const {
    getTodoByID,
    toggleTodoItem,
    updateTodoItemTitle,
    removeTodoItem
  } = useTodoList()

  const todoItem = getTodoByID(id)

  const settingsBottomSheetModalRef = useRef<BottomSheetModal>(null)
  const openSettingsBottomSheet = useCallback(() => {
    BaseImpact()
    settingsBottomSheetModalRef.current?.present()
  }, [])

  const handleGoBack = () => {
    navigation.goBack()
    BaseImpact()
  }

  const handleDeleteTodoItem = () => {
    removeTodoItem(id)
    handleGoBack()
  }

  const sentences = {
    title: getTranslation(i18nKeys.taskDetailsScreen.title),
    remove: getTranslation(i18nKeys.taskDetailsScreen.remove)
  }

  return(
    <BaseScreenContainer>
      <BaseScreenHeader
        title={sentences.title}
        leftButtonProps={{ iconName: "arrow-back", onPress: handleGoBack }}
        rightButtonProps={{ iconName: "create-outline", onPress: openSettingsBottomSheet}}
      />
      {
        todoItem ? (
          <View style={todoItemDetailsStyles.container}>

            <View style={todoItemDetailsStyles.bodyContainer}>

              <View style={todoItemDetailsStyles.todoDetailsContainer}>
                <View style={todoItemDetailsStyles.todoTitleContainer}>
                  <ThemedText type="subtitle">{todoItem.title}</ThemedText>
                  <ThemedText type="defaultSemiBold">{getTodoDateString(todoItem.creationDate, locale)}</ThemedText>
                </View>

                <CustomCheckbox
                  isChecked={todoItem.done}
                  onPress={() => toggleTodoItem(id)}
                />
              </View>

            </View>

            <BackgroundTextButton text={sentences.remove} onPress={handleDeleteTodoItem} backgroundColor={errorColor}/>
          </View>
        ) :

        <NoTodoItemFound/>
      }

      <SettingsTodoBottomSheet
        bottomSheetRef={settingsBottomSheetModalRef}
        todoTitle={todoItem?.title || ""}
        editTodoItem={(title) => updateTodoItemTitle(id, title)}
      />
    </BaseScreenContainer>
  )
}

const NoTodoItemFound = () => {
  return(
    <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
      <ThemedText type="title">Tâche introuvable</ThemedText>
    </View>
  )
}

export default TodoItemDetailsScreen;