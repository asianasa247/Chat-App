import CustomHeaderNavigator from "@/src/components/common/CustomHeaderNavigator";
import {Screens} from "@/src/constants/screens";
import StatusScreen from "@/src/screens/status/StatusScreen";
import {StatusStackNavigatorParamList} from "@/src/types/common/navigation";
import {createNativeStackNavigator, NativeStackNavigationOptions} from "@react-navigation/native-stack";
import React from "react";

const Stack = createNativeStackNavigator<StatusStackNavigatorParamList>();

const StatusStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={Screens.STATUS} screenOptions={statusStackNavigatorOptions}>
      <Stack.Screen name={Screens.STATUS} component={StatusScreen} options={statusScreenOptions} />
    </Stack.Navigator>
  );
};

export default StatusStackNavigator;

const statusStackNavigatorOptions: NativeStackNavigationOptions = {
  header: (props) => <CustomHeaderNavigator {...props} />,
};

const statusScreenOptions: NativeStackNavigationOptions = {
  title: "Status",
};
