import {Navigators} from "../constants/navigator";
import {Screens} from "../constants/screens";

export type AuthStackNavigatorParamList = {
  [Screens.LOGIN]: undefined;
  [Screens.SIGNUP]: undefined;
};

export type SettingStackNavigatorParamList = {
  [Screens.SETTINGS]: undefined;
  [Screens.EDITPROFILE]: undefined;
  [Screens.STARREDMESSAGES]: undefined;
  [Screens.ACCOUNT]: undefined;
  [Screens.CHATSETTINGS]: undefined;
  [Screens.NOTIFICATIONS]: undefined;
  [Screens.DATASTORAGE]: undefined;
};

export type ChatsStackNavigatorParamList = {
  [Screens.CHAT]: undefined;
  [Screens.CHATDETAIL]: undefined;
  [Screens.CHATLIST]: undefined;
};

export type BottomTabNavigatorParamList = {
  [Screens.STATUS]: undefined;
  [Screens.CALLS]: undefined;
  [Screens.CAMERA]: undefined;
  [Navigators.CHATS]: undefined;
  [Navigators.SETTINGS]: undefined;
};
