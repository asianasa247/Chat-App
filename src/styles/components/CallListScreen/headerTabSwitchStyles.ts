import {colors} from "@/src/constants/colors";
import {spacing} from "@/src/constants/spacing";
import {FontFamily, typography} from "@/src/constants/typography";
import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    overflow: "hidden",
    width: spacing.s150,
  },
  buttonContainer: {
    paddingVertical: spacing.s5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.white,
    flex: 1,
    borderColor: colors.primary,
    borderWidth: spacing.s1,
  },
  buttonContainerLeft: {
    borderTopLeftRadius: spacing.s10,
    borderBottomLeftRadius: spacing.s10,
  },
  buttonContainerRight: {
    borderTopRightRadius: spacing.s10,
    borderBottomRightRadius: spacing.s10,
  },
  buttonText: {
    fontFamily: FontFamily.REGULAR,
    fontSize: typography.fontSizes.f13,
    lineHeight: typography.lineHeights.f13,
    textAlign: "center",
  },
  buttonContainerActive: {
    backgroundColor: colors.primary,
  },
  buttonContainerInActive: {
    backgroundColor: colors.white,
  },
  buttonTextActive: {
    color: colors.white,
  },
  buttonTextInActive: {
    color: colors.primary,
  },
});
