import {colors} from "@/src/constants/colors";
import {spacing} from "@/src/constants/spacing";
import {FontFamily, typography} from "@/src/constants/typography";
import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    minHeight: spacing.s50,
    height: "auto",
    maxHeight: spacing.s100,
    backgroundColor: colors.culturedPearl,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: spacing.s14,
    paddingVertical: spacing.s7,
  },
  inputContainer: {
    marginLeft: spacing.s14,
    marginRight: spacing.s19,
    borderRadius: spacing.s12,
    borderColor: colors.textMessage,
    borderWidth: spacing.s1,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: spacing.s7,
  },
  input: {
    minHeight: spacing.s30,
    height: "auto",
    fontFamily: FontFamily.REGULAR,
    fontSize: typography.fontSizes.f14,
    lineHeight: typography.lineHeights.f14,
    flex: 1,
    marginRight: spacing.s7,
    paddingBottom: spacing.s3,
  },
  wrapperFocused: {
    borderColor: colors.primary,
  },
  iconCam: {
    marginRight: spacing.s15,
  },
});
