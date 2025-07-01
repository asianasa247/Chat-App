import {colors} from "@/src/constants/colors";
import {spacing} from "@/src/constants/spacing";
import {FontFamily, typography} from "@/src/constants/typography";
import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
  logo: {
    marginTop: spacing.s18,
    height: spacing.s150,
    width: spacing.s150,
  },
  heading: {
    marginTop: spacing.s7,
    fontFamily: FontFamily.BOLD,
    color: colors.primary,
    fontSize: typography.fontSizes.f22,
  },
  subheading: {
    marginTop: spacing.s5,
    fontFamily: FontFamily.REGULAR,
    color: colors.text,
    fontSize: typography.fontSizes.f14,
  },
});
