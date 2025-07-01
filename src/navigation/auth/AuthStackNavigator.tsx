import CustomHeaderNavigator from "@/src/components/common/CustomHeaderNavigator";
import LoginScreen from "@/src/screens/auth/LoginScreen";
import SignupScreen from "@/src/screens/auth/SignupScreen";
import {createNativeStackNavigator, NativeStackNavigationOptions} from "@react-navigation/native-stack";
import {colors} from "../../constants/colors";
import {Screens} from "../../constants/screens";
import {AuthStackNavigatorParamList} from "../../types/navigation";

const Stack = createNativeStackNavigator<AuthStackNavigatorParamList>();

const AuthStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={Screens.LOGIN} screenOptions={screenOptions}>
      <Stack.Screen name={Screens.LOGIN} component={LoginScreen} options={loginScreenOptions} />
      <Stack.Screen name={Screens.SIGNUP} component={SignupScreen} options={signupScreenOptions} />
    </Stack.Navigator>
  );
};
export default AuthStackNavigator;

const screenOptions: NativeStackNavigationOptions = {
  header: (props) => <CustomHeaderNavigator {...props} />,
};
const loginScreenOptions: NativeStackNavigationOptions = {
  headerTitle: "",
  headerTintColor: colors.primary,
};
const signupScreenOptions: NativeStackNavigationOptions = {
  headerTitle: "",
  headerTintColor: colors.primary,
};
