import {colors} from "@/src/constants/colors";
import {spacing} from "@/src/constants/spacing";
import {FontFamily, typography} from "@/src/constants/typography";
import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: spacing.s16,
  },
  deleteButton: {
    marginRight: spacing.s9,
  },

  decorContainer: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    borderBottomColor: colors.textMessage,
    borderBottomWidth: spacing.s1,
    paddingVertical: spacing.s8,
    marginLeft: spacing.s12,
    paddingRight: spacing.s16,
  },
  avatar: {
    height: spacing.s40,
    width: spacing.s40,
  },
  callContent: {},
  callName: {
    fontFamily: FontFamily.REGULAR,
    color: colors.black,
    fontSize: typography.fontSizes.f16,
    lineHeight: typography.lineHeights.f16,
    marginBottom: spacing.s5,
  },
  callNameMissed: {
    color: colors.dangerSignal,
  },
  callStatusContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  callStatusText: {
    marginLeft: spacing.s7,
    fontFamily: FontFamily.REGULAR,
    color: colors.textMessage,
    fontSize: typography.fontSizes.f14,
    lineHeight: typography.lineHeights.f14,
  },
  callDate: {
    marginLeft: "auto",
    fontFamily: FontFamily.REGULAR,
    color: colors.textMessage,
    fontSize: typography.fontSizes.f14,
    lineHeight: typography.lineHeights.f14,
    marginRight: spacing.s10,
  },
});
