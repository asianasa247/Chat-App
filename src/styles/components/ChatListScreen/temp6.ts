import {colors} from "@/src/constants/colors";
import {spacing} from "@/src/constants/spacing";
import {FontFamily, typography} from "@/src/constants/typography";
import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
  chatListHeaderActionsContainer: {
    paddingVertical: spacing.s12,
    marginHorizontal: spacing.s16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  textHeaderActions: {
    fontFamily: FontFamily.REGULAR,
    color: colors.primary,
    fontSize: typography.fontSizes.f16,
  },
});
