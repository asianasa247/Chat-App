import {colors} from "@/src/constants/colors";
import {spacing} from "@/src/constants/spacing";
import {FontFamily, typography} from "@/src/constants/typography";
import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
  rowBack: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  firstBtn: {
    width: spacing.s74,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.coolGray,
  },
  firstBtnText: {
    fontFamily: FontFamily.REGULAR,
    color: colors.white,
    fontSize: typography.fontSizes.f14,
    lineHeight: typography.fontSizes.f14,
    marginTop: spacing.s6,
  },
  secondBtn: {
    width: spacing.s74,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.adobeOrange,
  },
  secondBtnText: {
    fontFamily: FontFamily.REGULAR,
    color: colors.white,
    fontSize: typography.fontSizes.f14,
    lineHeight: typography.fontSizes.f14,
    marginTop: spacing.s6,
  },
});
