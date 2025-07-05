import {colors} from "@/src/constants/colors";
import {StatusBar} from "expo-status-bar";
import React from "react";
import {KeyboardAvoidingView, Platform, StyleSheet, View} from "react-native";
import {useSafeAreaInsets} from "react-native-safe-area-context";

type Props = {
  children: React.ReactNode;
};

const KeyboardSafeArea = ({children}: Props) => {
  const insets = useSafeAreaInsets();
  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === "ios" ? "padding" : undefined}>
      <StatusBar style="dark" backgroundColor={colors.culturedPearl} />
      <View style={[styles.container, {paddingBottom: insets.bottom}]}>{children}</View>
    </KeyboardAvoidingView>
  );
};
export default KeyboardSafeArea;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
});
