import {colors} from "@/src/constants/colors";
import {spacing} from "@/src/constants/spacing";
import {FontFamily, typography} from "@/src/constants/typography";
import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
  chatItemContainer: {
    paddingLeft: spacing.s16,
    paddingTop: spacing.s8,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.white,
  },
  checkboxContainer: {
    marginRight: spacing.s17,
  },

  avatar: {
    width: spacing.s52,
    height: spacing.s52,
    borderRadius: spacing.s26,
    objectFit: "cover",
  },
  contentContainer: {
    marginLeft: spacing.s13,
    flex: 1,
    paddingBottom: spacing.s4,
    borderBottomWidth: spacing.s1,
    borderBottomColor: colors.lightGray,
    flexDirection: "row",
    alignItems: "center",
    paddingRight: spacing.s12,
  },
  contentInner: {
    flex: 1,
  },
  infoContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  name: {
    fontFamily: FontFamily.BOLD,
    fontSize: typography.fontSizes.f16,
    lineHeight: typography.lineHeights.f16,
  },
  date: {
    fontFamily: FontFamily.REGULAR,
    fontSize: typography.fontSizes.f14,
    lineHeight: typography.lineHeights.f14,
    color: colors.textMessage,
  },
  messageContainer: {
    height: spacing.s42,
    justifyContent: "center",
  },
  iconMessage: {
    marginRight: spacing.s8,
  },
  message: {
    fontFamily: FontFamily.REGULAR,
    fontSize: typography.fontSizes.f14,
    lineHeight: typography.lineHeights.f14,
    color: colors.textMessage,
  },
  iconChevronRight: {
    marginLeft: spacing.s10,
  },
});
