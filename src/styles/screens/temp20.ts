import {colors} from "@/src/constants/colors";
import {spacing} from "@/src/constants/spacing";
import {FontFamily, typography} from "@/src/constants/typography";
import {StyleSheet} from "react-native";
const {fontSizes, lineHeights} = typography;

export const userProfileStyle = StyleSheet.create({
  container: {
    paddingTop: spacing.s8,
    paddingLeft: spacing.s16,
    paddingBottom: spacing.s10,
    paddingRight: spacing.s12,
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
  },
  img: {
    width: spacing.s58,
    height: spacing.s58,
    borderRadius: spacing.s29,
    marginRight: spacing.s12,
  },
  name: {
    fontSize: fontSizes.f20,
    lineHeight: lineHeights.f20,
    fontFamily: FontFamily.BOLD,
  },
  desc: {
    marginTop: spacing.s3,
    fontSize: fontSizes.f16,
    lineHeight: lineHeights.f16,
    color: colors.lightGray,
    fontFamily: FontFamily.REGULAR,
  },
  iconRight: {
    marginLeft: "auto",
  },
});
