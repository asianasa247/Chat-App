import {colors} from "@/src/constants/colors";
import {Screens} from "@/src/constants/screens";
import {FontFamily} from "@/src/constants/typography";
import AccountScreen from "@/src/screens/settings/AccountScreen";
import ChatSettingsScreen from "@/src/screens/settings/ChatSettingsScreen";
import DataStorageScreen from "@/src/screens/settings/DataStorageScreen";
import EditProfileScreen from "@/src/screens/settings/EditProfileScreen";
import NotificationsScreen from "@/src/screens/settings/NotificationsScreen";
import SettingsScreen from "@/src/screens/settings/SettingsScreen";
import StarredMessagesScreen from "@/src/screens/settings/StarredMessagesScreen";
import {SettingStackNavigatorParamList} from "@/src/types/navigation";
import {createNativeStackNavigator, NativeStackNavigationOptions} from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator<SettingStackNavigatorParamList>();

const SettingsStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={Screens.SETTINGS} screenOptions={settingsStackScreenOptions}>
      <Stack.Screen name={Screens.SETTINGS} component={SettingsScreen} options={settingsScreenOptions} />
      <Stack.Screen name={Screens.EDITPROFILE} component={EditProfileScreen} options={editProfileScreenOptions} />
      <Stack.Screen
        name={Screens.STARREDMESSAGES}
        component={StarredMessagesScreen}
        options={starredMessagesScreenOptions}
      />
      <Stack.Screen name={Screens.ACCOUNT} component={AccountScreen} options={accountScreenOptions} />
      <Stack.Screen name={Screens.CHATSETTINGS} component={ChatSettingsScreen} options={chatSettingsScreenOptions} />
      <Stack.Screen name={Screens.NOTIFICATIONS} component={NotificationsScreen} options={notificationsScreenOptions} />
      <Stack.Screen name={Screens.DATASTORAGE} component={DataStorageScreen} options={dataStorageScreenOptions} />
    </Stack.Navigator>
  );
};
export default SettingsStackNavigator;

const settingsStackScreenOptions: NativeStackNavigationOptions = {
  headerStyle: {
    backgroundColor: colors.culturedPearl,
  },
  headerTintColor: colors.primary,
  headerTitleStyle: {
    fontFamily: FontFamily.BOLD,
    color: colors.black,
  },
};

const settingsScreenOptions: NativeStackNavigationOptions = {
  title: "Settings",
};

const editProfileScreenOptions: NativeStackNavigationOptions = {
  title: "Edit Profile",
};

const starredMessagesScreenOptions: NativeStackNavigationOptions = {
  title: "Starred Messages",
};

const accountScreenOptions: NativeStackNavigationOptions = {
  title: "Account",
};

const chatSettingsScreenOptions: NativeStackNavigationOptions = {
  title: "Chats",
};

const notificationsScreenOptions: NativeStackNavigationOptions = {
  title: "Notifications",
};
const dataStorageScreenOptions: NativeStackNavigationOptions = {
  title: "Data and Storage Usage",
};
