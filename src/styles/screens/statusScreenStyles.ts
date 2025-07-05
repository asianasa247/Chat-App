import {colors} from "@/src/constants/colors";
import {spacing} from "@/src/constants/spacing";
import {FontFamily, typography} from "@/src/constants/typography";
import {StyleSheet} from "react-native";
import {layout} from "../common/platformStyles";

export const styles = StyleSheet.create({
  headerLeftContainer: {
    marginLeft: layout.spacingNavigatorHeader,
  },
  headerLeftText: {
    fontFamily: FontFamily.REGULAR,
    color: colors.primary,
    fontSize: typography.fontSizes.f16,
  },
  screen: {
    flex: 1,
    backgroundColor: colors.bgScreen02,
  },

  //No Data Placeholder
  container: {
    marginTop: spacing.s35,
    backgroundColor: colors.white,
    paddingVertical: spacing.s14,
    paddingHorizontal: spacing.s66,
  },
  noDataText: {
    fontFamily: FontFamily.REGULAR,
    color: colors.textMessage,
    fontSize: typography.fontSizes.f14,
    lineHeight: typography.fontSizes.f14,
  },
});
