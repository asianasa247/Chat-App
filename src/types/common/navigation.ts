import {Navigators} from "../../constants/navigator";
import {Screens} from "../../constants/screens";

/**
 * Authentication Stack Navigator Parameter List
 * Defines the parameter types for authentication-related screens
 */
export type AuthStackNavigatorParamList = {
  /** Login screen - no parameters required */
  [Screens.LOGIN]: undefined;
  /** Sign up screen - no parameters required */
  [Screens.SIGNUP]: undefined;
};

/**
 * Status Stack Navigator Parameter List
 * Defines the parameter types for all status-related screens
 */

export type StatusStackNavigatorParamList = {
  [Screens.STATUS]: undefined;
};

/**
 * Settings Stack Navigator Parameter List
 * Defines the parameter types for all settings-related screens
 */
export type SettingStackNavigatorParamList = {
  /** Main settings screen - no parameters required */
  [Screens.SETTINGS]: undefined;
  /** Edit profile screen - no parameters required */
  [Screens.EDITPROFILE]: undefined;
  /** Starred messages screen - no parameters required */
  [Screens.STARREDMESSAGES]: undefined;
  /** Account settings screen - no parameters required */
  [Screens.ACCOUNT]: undefined;
  /** Chat settings screen - no parameters required */
  [Screens.CHATSETTINGS]: undefined;
  /** Notifications settings screen - no parameters required */
  [Screens.NOTIFICATIONS]: undefined;
  /** Data storage settings screen - no parameters required */
  [Screens.DATASTORAGE]: undefined;
};

/**
 * Calls Stack Navigator Parameter List
 * Defines the parameter types for call-related screens
 * Extends ContactDetailScreenParamList to include contact detail functionality
 */
export type CallsStackNavigatorParamList = {
  /** Call list screen - no parameters required */
  [Screens.CALLLIST]: undefined;
} & ContactDetailScreenParamList;

/**
 * Chats Stack Navigator Parameter List
 * Defines the parameter types for chat-related screens
 * Extends ContactDetailScreenParamList to include contact detail functionality
 */
export type ChatsStackNavigatorParamList = {
  /** Individual chat screen - no parameters required */
  [Screens.CHAT]: undefined;
  /** Chat list screen - no parameters required */
  [Screens.CHATLIST]: undefined;
} & ContactDetailScreenParamList;

/**
 * Bottom Tab Navigator Parameter List
 * Defines the parameter types for main bottom tab navigation
 * Includes all primary app sections accessible from bottom tabs
 */
export type BottomTabNavigatorParamList = {
  /** Status screen - no parameters required */
  [Navigators.STATUS]: undefined;
  /** Calls navigator - no parameters required */
  [Navigators.CALLS]: undefined;
  /** Camera screen - no parameters required */
  [Screens.CAMERA]: undefined;
  /** Chats navigator - no parameters required */
  [Navigators.CHATS]: undefined;
  /** Settings navigator - no parameters required */
  [Navigators.SETTINGS]: undefined;
};

/**
 * Contact Detail Screen Parameter List
 * Shared type for contact detail screen that can be accessed from multiple stacks
 * Used as a mixin type for other navigator param lists
 */
export type ContactDetailScreenParamList = {
  /** Contact detail screen - no parameters required */
  [Screens.CONTACTDETAIL]: undefined;
};
