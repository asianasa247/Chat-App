import {colors} from "@/src/constants/colors";
import {spacing} from "@/src/constants/spacing";
import {FontFamily, typography} from "@/src/constants/typography";
import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
  formInputContainer: {
    flexDirection: "column",
    justifyContent: "flex-start",
  },
  label: {
    fontFamily: FontFamily.BOLD,
    color: colors.primary,
    fontSize: typography.fontSizes.f16,
  },
  input: {
    marginTop: spacing.s3,
    width: spacing.s300,
    borderRadius: spacing.s5,
    height: spacing.s45,
    borderWidth: spacing.s1,
    borderColor: colors.mediumGray,
    fontFamily: FontFamily.REGULAR,
    fontSize: typography.fontSizes.f14,
    paddingHorizontal: spacing.s10,
  },
});
