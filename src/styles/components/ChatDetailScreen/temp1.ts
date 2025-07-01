import {colors} from "@/src/constants/colors";
import {spacing} from "@/src/constants/spacing";
import {FontFamily, typography} from "@/src/constants/typography";
import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
  container: {
    padding: spacing.s15,
    backgroundColor: colors.white,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  contactContainer: {
    flex: 1,
    alignItems: "flex-start",
  },
  nameContact: {
    fontFamily: FontFamily.BOLD,
    color: colors.black,
    fontSize: typography.fontSizes.f18,
    lineHeight: typography.lineHeights.f18,
    marginBottom: spacing.s5,
  },
  numberContact: {
    fontFamily: FontFamily.REGULAR,
    color: colors.textMessage,
    fontSize: typography.fontSizes.f12,
    lineHeight: typography.lineHeights.f12,
  },
  actionsContainer: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: spacing.s12,
  },

  actBtnContainer: {
    width: spacing.s36,
    height: spacing.s36,
    borderRadius: spacing.s36,
    backgroundColor: colors.lavenderMist,
    alignItems: "center",
    justifyContent: "center",
  },
  containerMore: {
    marginLeft: spacing.s15,
    paddingTop: spacing.s12,
    paddingRight: spacing.s15,
    paddingBottom: spacing.s10,
    borderTopColor: colors.textMessage,
    borderTopWidth: spacing.s1,
    backgroundColor: colors.white,
  },
  moreTitle: {
    fontFamily: FontFamily.REGULAR,
    color: colors.black,
    fontSize: typography.fontSizes.f14,
    lineHeight: typography.lineHeights.f14,
    marginBottom: spacing.s7,
  },
  moreDesc: {
    fontFamily: FontFamily.REGULAR,
    color: colors.textMessage,
    fontSize: typography.fontSizes.f12,
    lineHeight: typography.lineHeights.f12,
  },
});
