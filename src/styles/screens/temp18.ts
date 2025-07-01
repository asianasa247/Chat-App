import {colors} from "@/src/constants/colors";
import {StyleSheet} from "react-native";
import {layout} from "../common/platformStyles";

export const styles = StyleSheet.create({
  screen: {backgroundColor: colors.bgChatScreen, paddingHorizontal: layout.spacingNavigatorHeader},
});
