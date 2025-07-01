import {colors} from "@/src/constants/colors";
import {StatusBar} from "expo-status-bar";
import React from "react";
import {KeyboardAvoidingView, Platform, SafeAreaView, StyleSheet} from "react-native";

type Props = {
  children: React.ReactNode;
};

const KeyboardSafeArea = ({children}: Props) => {
  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === "ios" ? "padding" : undefined}>
      <StatusBar style="dark" backgroundColor={colors.culturedPearl} />
      <SafeAreaView style={styles.container}>{children}</SafeAreaView>
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
