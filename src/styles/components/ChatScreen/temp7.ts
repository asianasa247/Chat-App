import {spacing} from "@/src/constants/spacing";
import {StyleSheet} from "react-native";
import {layout} from "../../common/platformStyles";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    columnGap: spacing.s25,
    alignItems: "center",
    marginRight: layout.spacingNavigatorHeader,
  },
  icon: {},
});
