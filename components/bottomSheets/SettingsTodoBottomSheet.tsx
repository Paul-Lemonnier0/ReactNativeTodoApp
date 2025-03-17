import { FC, useCallback, useEffect } from "react";
import { BaseBottomSheet } from "./BaseBottomSheet";
import { StyleSheet, View } from "react-native";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { CustomTextInput } from "../inputs/TextInput";
import { useForm } from "react-hook-form";
import { i18nKeys } from "@/localizations/localizations_keys";
import { BaseImpact, ErrorImpact } from "@/constants/Impacts";
import ErrorText from "../ErrorText";
import useTranslations from "@/hooks/useTranslations";

interface SettingsTodoBottomSheetProps {
  bottomSheetRef: React.RefObject<BottomSheetModal>,
  todoTitle: string,
  editTodoItem: (title: string) => void
}

interface BasicTodoInfo {
  title: string
}

/**
 * The bottom sheet to edit an existing todo item
 */
export const SettingsTodoBottomSheet: FC<SettingsTodoBottomSheetProps> = ({
  bottomSheetRef,
  todoTitle,
  editTodoItem,
}) => {

  const { getTranslation } = useTranslations()

  // Form management with react-hook-form (we just need a title field)
  const { control, handleSubmit, setValue, formState: { errors } } = useForm<BasicTodoInfo>({
    defaultValues: {
      title: todoTitle,
    },
  });

  //Sets the form title value when the todo item title changes
  useEffect(() => {
    setValue("title", todoTitle);
  }, [todoTitle, setValue]);

  const closeModal = useCallback(() => {
    bottomSheetRef.current?.close()
  }, [])

  // Submittion management
  const onSubmit = (data: BasicTodoInfo) => {
    editTodoItem(data.title)
    closeModal()
    BaseImpact()
  }

  // Triggers an error impact when the form has errors
  const onErrors = () => {
    ErrorImpact()
  }

  const sentences = {
    title: getTranslation(i18nKeys.editTodoItemBottomSheet.title),
    edit: getTranslation(i18nKeys.editTodoItemBottomSheet.edit),
    emptyTitleErrorMessage: getTranslation(i18nKeys.addTodoListBottomSheet.emptyTitleErrorMessage),
    titleInputPlaceholder: getTranslation(i18nKeys.editTodoItemBottomSheet.titleInputPlaceholder)
  }

  //UI Definition using the BaseBottomSheet component we defined earlier
  return(
    <BaseBottomSheet
      bottomSheetRef={bottomSheetRef}
      title={sentences.title}
      baseFooterButton={{
        text: sentences.edit,
        iconName: "checkmark-outline",
        action: handleSubmit(onSubmit, onErrors)
      }}
    >
      <View style={styles.container}>
        <CustomTextInput
          control={control}
          rules={{ required: sentences.emptyTitleErrorMessage }}
          name={"title"}
          placeholder={sentences.titleInputPlaceholder}
          bottomSheetInput
          isError={!!errors.title}
        />

        <ErrorText errorMessage={errors.title?.message} />
      </View>
    </BaseBottomSheet>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})