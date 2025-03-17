import React from "react";
import notFoundStyles from "./notFound.style";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Text, TouchableOpacity, View } from "react-native";
import { RootStackParamList } from "../../navigation";
import { FC } from "react";
import useTranslations from "@/hooks/useTranslations";
import { i18nKeys } from "@/localizations/localizations_keys";
import { BackgroundTextButton } from "@/components/buttons/BasicButtons";

type NotFoundScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "NotFound"
>;

export const NotFoundScreen: FC<NotFoundScreenProps> = ({ navigation }) => {

  const { getTranslation } = useTranslations()

  const sentences = {
    title: getTranslation(i18nKeys.notFoundScreen.title),
    link: getTranslation(i18nKeys.notFoundScreen.link)
  }

  return (
    <View style={notFoundStyles.container}>
      <Text style={notFoundStyles.title}>{sentences.title}</Text>
      <BackgroundTextButton
        text={sentences.link}
        onPress={() => navigation.replace("Root")}
      />
    </View>
  );
};

export default NotFoundScreen;
