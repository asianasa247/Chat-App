import {colors} from "@/src/constants/colors";
import {spacing} from "@/src/constants/spacing";
import {FontFamily, typography} from "@/src/constants/typography";
import {Header, HeaderBackButton} from "@react-navigation/elements";
import {NativeStackHeaderProps} from "@react-navigation/native-stack";

const CustomHeaderNavigator = ({navigation, back, options}: NativeStackHeaderProps) => {
  return (
    <Header
      title=""
      headerLeft={() =>
        back ? (
          <HeaderBackButton
            onPress={() => navigation.goBack()}
            label="Back"
            displayMode="generic"
            tintColor={colors.primary}
            pressColor={colors.primary}
          />
        ) : null
      }
      {...options}
      back={back}
      headerTitleAlign="center"
      headerStyle={{
        backgroundColor: colors.culturedPearl,
        height: spacing.s60,
      }}
      headerTitleStyle={{
        fontFamily: FontFamily.BOLD,
        color: colors.black,
        fontSize: typography.fontSizes.f16,
      }}
    />
  );
};

export default CustomHeaderNavigator;
