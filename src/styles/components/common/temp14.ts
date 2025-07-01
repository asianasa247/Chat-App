import {colors} from "@/src/constants/colors";
import {spacing} from "@/src/constants/spacing";
import {FontFamily, typography} from "@/src/constants/typography";
import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
  buttonContainer: {
    width: spacing.s300,
    height: spacing.s50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.primary,
  },
  text: {
    fontFamily: FontFamily.BOLD,
    color: colors.white,
    fontSize: typography.fontSizes.f20,
  },
});
