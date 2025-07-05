import CustomHeaderNavigator from "@/src/components/common/CustomHeaderNavigator";
import {Screens} from "@/src/constants/screens";
import CallListScreen from "@/src/screens/calls/CallListScreen";
import ContactDetailScreen from "@/src/screens/shared/ContactDetailScreen";
import {CallsStackNavigatorParamList} from "@/src/types/common/navigation";
import {createNativeStackNavigator, NativeStackNavigationOptions} from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator<CallsStackNavigatorParamList>();
const CallsStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={Screens.CALLLIST} screenOptions={callsStackNavigatorOptions}>
      <Stack.Screen name={Screens.CALLLIST} component={CallListScreen} />
      <Stack.Screen name={Screens.CONTACTDETAIL} component={ContactDetailScreen} />
    </Stack.Navigator>
  );
};

export default CallsStackNavigator;

const callsStackNavigatorOptions: NativeStackNavigationOptions = {
  header: (props) => <CustomHeaderNavigator {...props} />,
};
