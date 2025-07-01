import {widthPercentageToDP as wp} from "react-native-responsive-screen";

export enum FontFamily {
  REGULAR = "SF-Pro-Regular",
  BOLD = "SF-Pro-Bold",
  HEAVY_ITALIC = "SF-Pro-Heavy-Italic",
  LIGHT_ITALIC = "SF-Pro-Light-Italic",
  MEDIUM = "SF-Pro-Medium",
  SEMIBOLD_ITALIC = "SF-Pro-Semibold-Italic",
  THIN_ITALIC = "SF-Pro-Thin-Italic",
  ULTRA_THIN_ITALIC = "SF-Pro-Ultra-Thin-Italic",
}

const round = (value: number, decimals = 1) => Number(value.toFixed(decimals));

export const typography = {
  fontSizes: {
    f8: round(wp("2.1%")), // ≈ 8px
    f10: round(wp("2.6%")), // ≈ 10px
    f12: round(wp("3.2%")), // ≈ 12px
    f14: round(wp("3.7%")), // ≈ 14px
    f16: round(wp("4.2%")), // ≈ 16px
    f18: round(wp("4.7%")), // ≈ 18px
    f20: round(wp("5.3%")), // ≈ 20px
    f22: round(wp("5.8%")), // ≈ 22px
    f24: round(wp("6.3%")), // ≈ 24px
    f26: round(wp("6.8%")), // ≈ 26px
    f28: round(wp("7.4%")), // ≈ 28px
    f30: round(wp("7.9%")), // ≈ 30px
    f32: round(wp("8.4%")), // ≈ 32px
    f34: round(wp("8.9%")), // ≈ 34px
    f36: round(wp("9.5%")), // ≈ 36px
    f38: round(wp("10%")), // ≈ 38px
    f40: round(wp("10.5%")), // ≈ 40px
    f42: round(wp("11.1%")), // ≈ 42px
  },
  lineHeights: {
    f8: round(wp("2.1%") * 1.4),
    f10: round(wp("2.6%") * 1.4),
    f12: round(wp("3.2%") * 1.4),
    f14: round(wp("3.7%") * 1.4),
    f16: round(wp("4.2%") * 1.4),
    f18: round(wp("4.7%") * 1.4),
    f20: round(wp("5.3%") * 1.4),
    f22: round(wp("5.8%") * 1.4),
    f24: round(wp("6.3%") * 1.4),
    f26: round(wp("6.8%") * 1.4),
    f28: round(wp("7.4%") * 1.4),
    f30: round(wp("7.9%") * 1.4),
    f32: round(wp("8.4%") * 1.4),
    f34: round(wp("8.9%") * 1.4),
    f36: round(wp("9.5%") * 1.4),
    f38: round(wp("10%") * 1.4),
    f40: round(wp("10.5%") * 1.4),
    f42: round(wp("11.1%") * 1.4),
  },
};
