import { useThemeColor } from "@/hooks/useThemeColor"
import { BottomSheetTextInput } from "@gorhom/bottom-sheet";
import { FC, useState } from "react"
import { Control, Controller, RegisterOptions } from "react-hook-form"
import React, { StyleSheet, TextInput, View } from "react-native"

interface CustomTextInputProps {
  placeholder?: string,
  disabled?: boolean,
  name: any;
  isError?: boolean;
  control: Control<any>;
  rules?: Omit<RegisterOptions<any, any>, "disabled" | "valueAsNumber" | "valueAsDate" | "setValueAs">
  bottomSheetInput?: boolean // If true, the input will be rendered as a BottomSheetTextInput (need to be true when using in a bottom sheet modal in order to prevent the input to be hidden by the keyboard)
}

/**
 * Custom text input component
 */
export const CustomTextInput: FC<CustomTextInputProps> = ({
  placeholder,
  disabled,
  control,
  name,
  bottomSheetInput,
  rules,
  isError
}) => {

  // This state is used to change the border color when the input is focused
  const [isFocus, setIsFocus] = useState<boolean>(false)

  // Accessing to the colors depending on the theme
  const fontColor = useThemeColor({}, "font")
  const fontGray = useThemeColor({}, "fontGray")
  const secondary = useThemeColor({}, "secondary")
  const fieldColor = useThemeColor({}, "field")
  const contrast = useThemeColor({}, "contrast")
  const error = useThemeColor({}, "error")

  // Colors depending on the state of the input
  const backgroundColor = disabled ? secondary : fieldColor;
  const borderColor =
    disabled ? secondary
    : isFocus ? contrast
    : isError ? error
    : secondary;

  // Depending on the bottomSheetInput prop, the TextInput component will be changed
  const TextComponent = bottomSheetInput ? BottomSheetTextInput : TextInput

  return(
    <View style={[styles.container, { borderColor, backgroundColor }]}>
      <Controller // React Hook Form controller it order to avoid the reredering of the component at each typed letter in the input
        control={control}
        name={name}
        rules={rules}
        render={({ field: { onChange, value } }) => (
          <TextComponent
            value={value ?? ""}
            onChangeText={onChange}
            placeholder={placeholder ?? ""}
            placeholderTextColor={fontGray}
            editable={!disabled}
            selectionColor={fontColor}
            autoCorrect={false}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            style={[styles.textInput, { color: fontColor }]}
          />
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    borderWidth: 2,
    borderRadius: 15,
  },

  textInput: {
    flex: 1,
    fontSize: 16,
    padding: 15,
    borderRadius: 15,
    fontFamily: "fontMedium",
    margin: 5,
  },
})