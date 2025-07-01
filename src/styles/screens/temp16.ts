import {colors} from "@/src/constants/colors";
import {spacing} from "@/src/constants/spacing";
import {FontFamily, typography} from "@/src/constants/typography";
import {StyleSheet} from "react-native";
import {layout} from "../common/platformStyles";

export const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.bgScreen02,
  },

  headerTitle: {
    fontFamily: FontFamily.BOLD,
    color: colors.black,
    fontSize: typography.fontSizes.f16,
    lineHeight: typography.lineHeights.f16,
  },
  leftHeaderContainer: {
    marginRight: layout.spacingNavigatorHeader,
  },
  textLeftHeader: {
    fontFamily: FontFamily.REGULAR,
    color: colors.primary,
    fontSize: typography.fontSizes.f16,
    lineHeight: typography.lineHeights.f16,
  },
  imgProfile: {
    width: spacing.sFullWidth,
    height: spacing.sFullWidth,
    objectFit: "cover",
  },
});
