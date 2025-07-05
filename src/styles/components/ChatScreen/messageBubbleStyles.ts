import {colors} from "@/src/constants/colors";
import {spacing} from "@/src/constants/spacing";
import {FontFamily, typography} from "@/src/constants/typography";
import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
  container: {
    paddingTop: spacing.s5,
    paddingLeft: spacing.s8,
    paddingBottom: spacing.s10,
    paddingRight: spacing.s8,
    marginVertical: spacing.s2,
    backgroundColor: colors.white,
    borderRadius: spacing.s10,
    maxWidth: spacing.s234,
    minWidth: spacing.s162,
    position: "relative",
    // iOS
    shadowColor: colors.black,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 6,
    // Android
    elevation: 4,
  },
  containerWithLongText: {
    paddingRight: spacing.s8,
    minHeight: spacing.s60,
  },
  containerSender: {
    backgroundColor: colors.bgSenderMsg,
    marginLeft: "auto",
  },
  containerParticipant: {
    backgroundColor: colors.bgParticipantMsg,
    marginRight: "auto",
  },
  messageText: {
    fontFamily: FontFamily.REGULAR,
    color: colors.black,
    fontSize: typography.fontSizes.f16,
    lineHeight: typography.lineHeights.f16,
  },
  metaContainer: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: spacing.s8,
    marginLeft: "auto",
  },
  time: {
    fontFamily: FontFamily.REGULAR,
    color: colors.textMessage,
    fontSize: typography.fontSizes.f12,
    lineHeight: typography.lineHeights.f12,
  },
});
