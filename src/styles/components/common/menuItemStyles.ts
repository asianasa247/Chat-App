import {colors} from "@/src/constants/colors";
import {spacing} from "@/src/constants/spacing";
import {FontFamily, typography} from "@/src/constants/typography";
import {StyleSheet} from "react-native";

const {fontSizes, lineHeights} = typography;
export const menuItemStyle = StyleSheet.create({
  pressableContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: spacing.s15,
    height: spacing.s47,
    backgroundColor: "white",
  },
  titleText: {
    fontSize: fontSizes.f16,
    lineHeight: lineHeights.f16,
    fontFamily: FontFamily.REGULAR,
    color: colors.black,
  },
  descriptionText: {
    marginTop: spacing.s3,
    fontSize: fontSizes.f10,
    lineHeight: lineHeights.f10,
    fontFamily: FontFamily.REGULAR,
    color: colors.textMessage,
  },
  iconContainer: {
    width: spacing.s29,
    height: spacing.s29,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: spacing.s6,
  },
  titleContainer: {
    flex: 1,
    marginLeft: spacing.s15,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: spacing.s1,
    paddingRight: spacing.s8,
    height: "100%",
    borderBottomColor: colors.lightGray,
  },
  accessoryText: {
    marginLeft: "auto",
    fontSize: fontSizes.f16,
    lineHeight: lineHeights.f16,
    fontFamily: FontFamily.REGULAR,
    color: colors.textMessage,
  },
});
