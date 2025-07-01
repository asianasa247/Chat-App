import {styles} from "@/src/styles/screens/temp19";
import AntDesign from "@expo/vector-icons/AntDesign";
import type {NativeStackScreenProps} from "@react-navigation/native-stack";
import React, {useState} from "react";
import {ScrollView, View} from "react-native";
import BottomSpacer from "../../components/common/BottomSpacer";
import CustomButton from "../../components/common/CustomButton";
import FormInput from "../../components/common/FormInput";
import KeyboardSafeArea from "../../components/common/KeyboardSafeArea";
import LogoHeader from "../../components/common/LogoHeader";
import SubmitButton from "../../components/common/SubmitButton";
import LanguageDropdown from "../../components/LoginScreen/LanguageDropdown";
import {colors} from "../../constants/colors";
import {Screens} from "../../constants/screens";
import {spacing} from "../../constants/spacing";
import {AuthStackNavigatorParamList} from "../../types/navigation";

type ScreenProps = NativeStackScreenProps<AuthStackNavigatorParamList, Screens.LOGIN>;

const LoginScreen = ({navigation}: ScreenProps) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeUserName = (value: string) => {
    setUserName(value);
  };

  const handleChangePassword = (value: string) => {
    setPassword(value);
  };

  const handleNavigateSignUpScreen = () => {
    navigation.navigate(Screens.SIGNUP);
  };

  const handleSignIn = () => {
    if (userName && password) {
      // ... logic
    }
  };
  const handleSignInWithGoogle = () => {
    // ...logic
  };

  return (
    <KeyboardSafeArea>
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <View style={styles.dropdownContainer}>
          <LanguageDropdown />
        </View>

        <LogoHeader />

        <FormInput
          label="Tên đăng nhập"
          placeholder="Tên đăng nhập"
          containerStyles={styles.formInputContainerFirst}
          onChange={handleChangeUserName}
        />

        <FormInput
          label="Mật khẩu"
          placeholder="Mật khẩu"
          containerStyles={styles.formInputContainerFirst}
          onChange={handleChangePassword}
        />

        <SubmitButton containerStyles={styles.submitButton} onPress={handleSignIn}>
          Đăng nhập
        </SubmitButton>

        <CustomButton
          containerStyles={styles.ggButtonContainer}
          textStyles={styles.signUpTextStyle}
          onPress={handleNavigateSignUpScreen}
        >
          Đăng kí
        </CustomButton>

        <CustomButton
          icon={<AntDesign name="google" size={spacing.s24} color={colors.primary} />}
          containerStyles={styles.ggButtonContainer}
          textStyles={styles.ggTextStyle}
          onPress={handleSignInWithGoogle}
        >
          Đăng nhập với google
        </CustomButton>

        <BottomSpacer height={spacing.s50} />
      </ScrollView>
    </KeyboardSafeArea>
  );
};

export default LoginScreen;
