import Ionicons from "@expo/vector-icons/Ionicons";
import {BottomTabNavigationOptions, createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {colors} from "../constants/colors";
import {Navigators} from "../constants/navigator";
import {Screens} from "../constants/screens";
import {FontFamily} from "../constants/typography";
import CameraScreen from "../screens/camera/CameraScreen";
import {BottomTabNavigatorParamList} from "../types/common/navigation";
import CallsStackNavigator from "./calls/CallsStackNavigator";
import ChatsStackNavigator from "./chats/ChatsStackNavigator";
import SettingsStackNavigator from "./settings/SettingsStackNavigator";
import StatusStackNavigator from "./status/StatusStackNavigator";
const BottomTab = createBottomTabNavigator<BottomTabNavigatorParamList, Navigators.BOTTOMTAB>();

const MainTabNavigatorBottom = () => {
  return (
    <BottomTab.Navigator screenOptions={bottomTabScreensOptions} id={Navigators.BOTTOMTAB}>
      <BottomTab.Screen
        name={Navigators.STATUS}
        component={StatusStackNavigator}
        options={statusStackNavigatorOptions}
      />
      <BottomTab.Screen name={Navigators.CALLS} component={CallsStackNavigator} options={callsStackNavigatorOptions} />
      <BottomTab.Screen name={Screens.CAMERA} component={CameraScreen} options={cameraScreenOptions} />
      <BottomTab.Screen name={Navigators.CHATS} component={ChatsStackNavigator} options={chatsStackNavigatorOptions} />
      <BottomTab.Screen
        name={Navigators.SETTINGS}
        component={SettingsStackNavigator}
        options={settingsStackNavigatorOptions}
      />
    </BottomTab.Navigator>
  );
};

export default MainTabNavigatorBottom;

const bottomTabScreensOptions: BottomTabNavigationOptions = {
  headerShown: false,
  tabBarActiveTintColor: colors.primary,
  tabBarInactiveTintColor: colors.mediumGray,
  tabBarLabelStyle: {
    fontFamily: FontFamily.REGULAR,
  },
  tabBarStyle: [
    {
      backgroundColor: colors.culturedPearl,
      borderTopColor: "transparent",
    },
  ],
};

const statusStackNavigatorOptions: BottomTabNavigationOptions = {
  title: "Status",
  tabBarIcon: ({color, size}) => <Ionicons name="ellipse-outline" size={size} color={color} />,
};

const callsStackNavigatorOptions: BottomTabNavigationOptions = {
  title: "Calls",
  tabBarIcon: ({color, size}) => <Ionicons name="call-outline" size={size} color={color} />,
};

const cameraScreenOptions: BottomTabNavigationOptions = {
  title: "Camera",
  tabBarIcon: ({color, size}) => <Ionicons name="camera-outline" size={size} color={color} />,
};

const chatsStackNavigatorOptions: BottomTabNavigationOptions = {
  title: "Chats",
  tabBarIcon: ({color, size}) => <Ionicons name="chatbubbles" size={size} color={color} />,
};

const settingsStackNavigatorOptions: BottomTabNavigationOptions = {
  title: "Settings",
  tabBarIcon: ({color, size}) => <Ionicons name="settings-outline" size={size} color={color} />,
};
