import ChatItem from "@/src/components/ChatListScreen/ChatItem";
import ChatItemActions from "@/src/components/ChatListScreen/ChatItemActions";
import ChatListEditActionsBar from "@/src/components/ChatListScreen/ChatListEditActionsBar";
import ChatListHeaderActions from "@/src/components/ChatListScreen/ChatListHeaderActions";
import KeyboardSafeArea from "@/src/components/common/KeyboardSafeArea";
import MyPressable from "@/src/components/common/MyPressable";
import {colors} from "@/src/constants/colors";
import {Navigators} from "@/src/constants/navigator";
import {Screens} from "@/src/constants/screens";
import {spacing} from "@/src/constants/spacing";
import {styles} from "@/src/styles/screens/temp17";
import {ChatsStackNavigatorParamList} from "@/src/types/navigation";
import {FontAwesome} from "@expo/vector-icons";
import {useFocusEffect} from "@react-navigation/native";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {useCallback, useLayoutEffect, useState} from "react";
import {Text} from "react-native";
import {SwipeListView} from "react-native-swipe-list-view";

type ScreenProps = NativeStackScreenProps<ChatsStackNavigatorParamList, Screens.CHATLIST, Navigators.BOTTOMTAB>;

const data = [
  {id: "1", text: "Công việc A"},
  {id: "2", text: "Công việc B"},
  {id: "3", text: "Công việc C"},
  {id: "4", text: "Công việc C"},
  {id: "5", text: "Công việc C"},
  {id: "6", text: "Công việc C"},
  {id: "7", text: "Công việc C"},
  {id: "8", text: "Công việc C"},
  {id: "9", text: "Công việc C"},
  {id: "10", text: "Công việc C"},
  {id: "11", text: "Công việc C"},
];
const ChatListScreen = ({navigation}: ScreenProps) => {
  const [listData, setListData] = useState(data);
  const [selectedChatIds, setSelectedChatIds] = useState<string[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const bottomTabNavigator = navigation.getParent(Navigators.BOTTOMTAB);
  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <MyPressable style={styles.headerLeftContainer} onPress={handleToggleEdit}>
          <Text style={styles.headerLeftText}>{isEditing ? "Done" : "Edit"}</Text>
        </MyPressable>
      ),
      headerRight: () =>
        isEditing ? null : (
          <MyPressable style={styles.headerRightContainer}>
            <FontAwesome name="pencil-square-o" size={spacing.s24} color={colors.primary} />
          </MyPressable>
        ),
    });
    bottomTabNavigator?.setOptions({
      tabBarStyle: {display: isEditing ? "none" : "flex", backgroundColor: colors.culturedPearl},
    });
  }, [navigation, isEditing, bottomTabNavigator]);

  useFocusEffect(
    useCallback(() => {
      bottomTabNavigator?.setOptions({tabBarStyle: {display: "flex", backgroundColor: colors.culturedPearl}});
    }, [bottomTabNavigator])
  );

  const isAnyChatSelected = selectedChatIds.length > 0;

  const toggleChatSelect = (id: string) => {
    setSelectedChatIds((prev: string[]) =>
      prev.includes(id) ? prev.filter((chatId) => chatId !== id) : [...prev, id]
    );
  };

  const handleToggleEdit = () => {
    setIsEditing((prev) => !prev);
    setSelectedChatIds([]);
  };

  const handleNavigateToChatScreen = () => {
    navigation.navigate(Screens.CHAT);
  };

  return (
    <KeyboardSafeArea>
      <SwipeListView
        data={listData}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => (
          <ChatItem
            isSelected={selectedChatIds.includes(item.id)}
            isEditing={isEditing}
            onPress={isEditing ? () => toggleChatSelect(item.id) : handleNavigateToChatScreen}
          />
        )}
        renderHiddenItem={({item}) => <ChatItemActions />}
        leftOpenValue={0}
        rightOpenValue={-spacing.s74 * 2}
        disableRightSwipe={true}
        disableLeftSwipe={isEditing}
        ListHeaderComponent={<ChatListHeaderActions isEditing={isEditing} />}
        contentContainerStyle={{paddingBottom: spacing.s60}}
      />
      {isEditing && <ChatListEditActionsBar isAnyChatSelected={isAnyChatSelected} />}
    </KeyboardSafeArea>
  );
};

export default ChatListScreen;
