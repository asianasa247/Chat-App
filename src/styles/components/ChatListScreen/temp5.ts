import {colors} from "@/src/constants/colors";
import {spacing} from "@/src/constants/spacing";
import {FontFamily, typography} from "@/src/constants/typography";
import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
  container: {
    position: "absolute",
    backgroundColor: colors.culturedPearl,
    height: spacing.s50,
    flex: 1,
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: spacing.s10,
  },
  actionLabel: {
    fontFamily: FontFamily.REGULAR,
    color: colors.textMessage,
    fontSize: typography.fontSizes.f16,
    lineHeight: typography.lineHeights.f16,
  },
});
