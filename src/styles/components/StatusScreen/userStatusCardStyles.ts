import {colors} from "@/src/constants/colors";
import {spacing} from "@/src/constants/spacing";
import {FontFamily, typography} from "@/src/constants/typography";
import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
  container: {
    marginTop: spacing.s35,
    paddingVertical: spacing.s9,
    paddingLeft: spacing.s13,
    paddingRight: spacing.s16,
    backgroundColor: colors.white,
    borderTopWidth: spacing.s1,
    borderBottomWidth: spacing.s1,
    borderColor: colors.lightGray,
    flexDirection: "row",
    alignItems: "center",
  },
  imageContainer: {
    width: spacing.s58,
    height: spacing.s58,
    position: "relative",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  imageIconButton: {
    position: "absolute",
    width: spacing.s20,
    height: spacing.s20,
    right: 0,
    bottom: 0,
    zIndex: 1,
  },
  statusContainer: {
    marginLeft: spacing.s9,
  },
  statusHeading: {
    fontFamily: FontFamily.BOLD,
    fontSize: typography.fontSizes.f16,
    lineHeight: typography.lineHeights.f16,
    color: colors.black,
    marginBottom: spacing.s4,
  },
  statusSubheading: {
    fontFamily: FontFamily.REGULAR,
    fontSize: typography.fontSizes.f14,
    lineHeight: typography.lineHeights.f14,
    color: colors.textMessage,
  },
  actionsContainer: {
    marginLeft: "auto",
    flexDirection: "row",
    alignItems: "center",
    columnGap: spacing.s16,
  },
});
