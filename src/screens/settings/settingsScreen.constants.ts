import {colors} from "@/src/constants/colors";
import {Screens} from "@/src/constants/screens";
import {SettingStackNavigatorParamList} from "@/src/types/navigation";
import {FontAwesome} from "@expo/vector-icons/";
type IconName = keyof typeof FontAwesome.glyphMap;
type ScreenName = keyof SettingStackNavigatorParamList;
export type EnhancedMenuItem = {
  id: number;
  iconName: IconName;
  title: string;
  backgroundColorIcon: string;
  isLastItem: boolean;
  navigateTo: ScreenName;
};

export const topMenuItems: EnhancedMenuItem[] = [
  {
    id: 1,
    iconName: "star-o",
    title: "Starred Messages",
    backgroundColorIcon: colors.amber,
    isLastItem: false,
    navigateTo: Screens.STARREDMESSAGES,
  },
  {
    id: 2,
    iconName: "laptop",
    title: "WhatsApp Web/Desktop",
    backgroundColorIcon: colors.seaTeal,
    isLastItem: true,
    navigateTo: Screens.STARREDMESSAGES, // fix later
  },
];

export const middleMenuItem: EnhancedMenuItem[] = [
  {
    id: 1,
    iconName: "key",
    title: "Account",
    backgroundColorIcon: colors.skyBlue,
    isLastItem: false,
    navigateTo: Screens.ACCOUNT,
  },
  {
    id: 2,
    iconName: "whatsapp",
    title: "Chats",
    backgroundColorIcon: colors.limeGreen,
    isLastItem: false,
    navigateTo: Screens.CHATSETTINGS,
  },
  {
    id: 3,
    iconName: "bullhorn",
    title: "Notifications",
    backgroundColorIcon: colors.coralRed,
    isLastItem: false,
    navigateTo: Screens.NOTIFICATIONS,
  },
  {
    id: 4,
    iconName: "hdd-o",
    title: "Data and Storage Usage",
    backgroundColorIcon: colors.limeGreen,
    isLastItem: true,
    navigateTo: Screens.DATASTORAGE,
  },
];

export const bottomMenuItem: EnhancedMenuItem[] = [
  {
    id: 1,
    iconName: "info",
    title: "Help",
    backgroundColorIcon: colors.infoBlue,
    isLastItem: false,
    navigateTo: Screens.STARREDMESSAGES, //fix later
  },
  {
    id: 2,
    iconName: "heart-o",
    title: "Tell a Friend",
    backgroundColorIcon: colors.magentaRed,
    isLastItem: true,
    navigateTo: Screens.STARREDMESSAGES, //fix later
  },
];
