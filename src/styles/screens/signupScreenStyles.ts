import {StyleSheet} from "react-native";
import {colors} from "../../constants/colors";
import {spacing} from "../../constants/spacing";
import {FontFamily, typography} from "../../constants/typography";

export const styles = StyleSheet.create({
  contentContainer: {
    alignItems: "center",
  },
  container: {
    flex: 1,
    flexDirection: "column",
  },
  dropdownContainer: {
    marginLeft: "auto",
    marginTop: spacing.s33,
    marginRight: spacing.s55,
  },
  formInputContainerFirst: {
    marginTop: spacing.s20,
  },
  submitButton: {
    marginTop: spacing.s30,
  },
  ggButtonContainer: {
    marginTop: spacing.s10,
    backgroundColor: colors.white,
    borderWidth: spacing.s1,
    borderColor: colors.primary,
  },
  signUpTextStyle: {
    color: colors.primary,
    fontSize: typography.fontSizes.f20,
    fontFamily: FontFamily.BOLD,
  },
  ggTextStyle: {
    color: colors.primary,
  },
});
