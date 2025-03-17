import { FC, useRef } from "react";
import { BaseBottomSheet } from "./BaseBottomSheet";
import { View } from "react-native";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { CustomTextInput } from "../inputs/TextInput";
import { FieldErrors, useForm } from "react-hook-form";
import { useAppContext } from "@/context/AppContext";
import { i18nKeys } from "@/localizations/localizations_keys";
import { BaseImpact, ErrorImpact } from "@/constants/Impacts";
import { ThemedText } from "../ThemedText";
import { useThemeColor } from "@/hooks/useThemeColor";
import ErrorText from "../ErrorText";
import useTranslations from "@/hooks/useTranslations";

interface AddTodoBottomSheetProps {
  bottomSheetRef: React.RefObject<BottomSheetModal>,
  addTodoItem: (title: string) => void
}

interface BasicTodoInfo {
  title: string
}

/**
 * The bottom sheet to add a new todo item
 */
export const AddTodoBottomSheet: FC<AddTodoBottomSheetProps> = ({
  bottomSheetRef,
  addTodoItem
}) => {

  const { getTranslation } = useTranslations()

  // Form management with react-hook-form (we just need a title field)
  const { control, handleSubmit, formState: {errors} } = useForm<BasicTodoInfo>({
    defaultValues: {
      title: "",
    },
  });

  // Submittion management
  const onSubmit = (data: BasicTodoInfo) => {
    addTodoItem(data.title)
    bottomSheetRef.current?.close()
    BaseImpact()
    control._reset()
  }

  /**
   * Triggers an error impact when the form has errors
   */
  const onErrors = (error: FieldErrors<BasicTodoInfo>) => {
    ErrorImpact()
  }

  const sentences = {
    title: getTranslation(i18nKeys.addTodoListBottomSheet.title),
    add: getTranslation(i18nKeys.addTodoListBottomSheet.add),
    emptyTitleErrorMessage: getTranslation(i18nKeys.addTodoListBottomSheet.emptyTitleErrorMessage),
    titleInputPlaceholder: getTranslation(i18nKeys.addTodoListBottomSheet.titleInputPlaceholder)
  }

  //UI Definition using the BaseBottomSheet component we defined earlier
  return(
    <BaseBottomSheet
      bottomSheetRef={bottomSheetRef}
      title={sentences.title}
      baseFooterButton={{
        text: sentences.add,
        iconName: "arrow-up-outline",
        action: handleSubmit(onSubmit, onErrors)
      }}
    >
      {/* View ~= div in React Native, it's the base container */}
      <View style={{flex: 1, gap: 5, marginBottom: 20}}>
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