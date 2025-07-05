import CustomHeaderNavigator from "@/src/components/common/CustomHeaderNavigator";
import {Screens} from "@/src/constants/screens";
import ChatListScreen from "@/src/screens/chats/ChatListScreen";
import ChatScreen from "@/src/screens/chats/ChatScreen";
import ContactDetailScreen from "@/src/screens/shared/ContactDetailScreen";
import {ChatsStackNavigatorParamList} from "@/src/types/common/navigation";
import {createNativeStackNavigator, NativeStackNavigationOptions} from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator<ChatsStackNavigatorParamList>();
const ChatsStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={Screens.CHATLIST} screenOptions={chatsStackNavigatorOptions}>
      <Stack.Screen name={Screens.CHATLIST} component={ChatListScreen} options={chatListScreenOptions} />
      <Stack.Screen name={Screens.CHAT} component={ChatScreen} />
      <Stack.Screen name={Screens.CONTACTDETAIL} component={ContactDetailScreen} />
    </Stack.Navigator>
  );
};

export default ChatsStackNavigator;

const chatsStackNavigatorOptions: NativeStackNavigationOptions = {
  header: (props) => <CustomHeaderNavigator {...props} />,
};

const chatListScreenOptions: NativeStackNavigationOptions = {
  title: "Chats",
};
