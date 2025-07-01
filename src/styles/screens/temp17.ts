import {colors} from "@/src/constants/colors";
import {spacing} from "@/src/constants/spacing";
import {FontFamily, typography} from "@/src/constants/typography";
import {StyleSheet} from "react-native";
import {layout} from "../common/platformStyles";

export const styles = StyleSheet.create({
  headerLeftContainer: {
    marginLeft: layout.spacingNavigatorHeader,
  },
  headerRightContainer: {
    marginRight: layout.spacingNavigatorHeader,
  },
  headerLeftText: {
    fontFamily: FontFamily.REGULAR,
    color: colors.primary,
    fontSize: typography.fontSizes.f16,
  },
  headerRightIcon: {
    marginTop: spacing.s5,
    marginLeft: spacing.s10,
  },
});
