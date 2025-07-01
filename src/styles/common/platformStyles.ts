import {spacing} from "@/src/constants/spacing";
import {Platform} from "react-native";

export const layout = {
  spacingNavigatorHeader: Platform.select({
    ios: spacing.s10,
    android: spacing.s16,
  }),
};
