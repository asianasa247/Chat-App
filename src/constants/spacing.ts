import {widthPercentageToDP as wp} from "react-native-responsive-screen";

export const spacing: Record<string, number> = {};

for (let i = 0; i <= 500; i++) {
  const percent = (i * 0.263).toFixed(2); // ~1px = 0.263% width
  spacing[`s${i}`] = wp(`${percent}%`);
}
//Full width
spacing.sFullWidth = wp("100%");
