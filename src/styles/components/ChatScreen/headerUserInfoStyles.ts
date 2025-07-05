import {colors} from "@/src/constants/colors";
import {spacing} from "@/src/constants/spacing";
import {FontFamily, typography} from "@/src/constants/typography";
import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: spacing.s8,
    position: "absolute",
    left: -spacing.s110,
    top: 0,
  },
  avatar: {
    width: spacing.s36,
    height: spacing.s36,
    objectFit: "cover",
  },
  contentContainer: {
    justifyContent: "flex-start",
  },
  name: {
    fontFamily: FontFamily.BOLD,
    fontSize: typography.fontSizes.f16,
    lineHeight: typography.lineHeights.f16,
  },
  desc: {
    fontFamily: FontFamily.REGULAR,
    fontSize: typography.fontSizes.f12,
    lineHeight: typography.lineHeights.f12,
    color: colors.textMessage,
  },
});
