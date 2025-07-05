import MessageBubble from "@/src/components/ChatListScreen/MessageBubble";
import HeaderRightCTA from "@/src/components/ChatScreen/HeaderRightCTA";
import HeaderUserInfo from "@/src/components/ChatScreen/HeaderUserInfo";
import MessageComposer from "@/src/components/ChatScreen/MessageComposer";
import KeyboardSafeArea from "@/src/components/common/KeyboardSafeArea";
import {colors} from "@/src/constants/colors";
import {Navigators} from "@/src/constants/navigator";
import {Screens} from "@/src/constants/screens";
import {spacing} from "@/src/constants/spacing";
import {styles} from "@/src/styles/screens/chatScreenStyles";
import {Message} from "@/src/types/common/message";
import {ChatsStackNavigatorParamList} from "@/src/types/common/navigation";
import {HeaderBackButton} from "@react-navigation/elements";
import {useFocusEffect} from "@react-navigation/native";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {useCallback, useLayoutEffect, useState} from "react";
import {FlatList} from "react-native";
type ScreenProps = NativeStackScreenProps<ChatsStackNavigatorParamList, Screens.CHAT, Navigators.BOTTOMTAB>;

export const mockMessages: Message[] = [
  {
    id: "msg1",
    text: "Hey, how are you?",
    type: "text",
    senderId: "user_001",
    timestamp: Date.now() - 1000 * 60 * 20,
    status: "read",
    isSender: false,
  },
  {
    id: "msg2",
    text: "I'm good! Just got back from work.",
    type: "text",
    senderId: "user_002",
    timestamp: Date.now() - 1000 * 60 * 19,
    status: "read",
    isSender: true,
  },
  {
    id: "msg3",
    text: "Nice! Wanna catch up later?",
    type: "text",
    senderId: "user_001",
    timestamp: Date.now() - 1000 * 60 * 18,
    status: "read",
    isSender: false,
  },
  {
    id: "msg4",
    type: "image",
    senderId: "user_002",
    timestamp: Date.now() - 1000 * 60 * 17,
    status: "delivered",
    isSender: true,
    attachments: ["https://placekitten.com/300/200"],
  },
  {
    id: "msg5",
    text: "So cute 😍",
    type: "text",
    senderId: "user_001",
    timestamp: Date.now() - 1000 * 60 * 16,
    status: "delivered",
    isSender: false,
  },
  {
    id: "msg6",
    text: "Recording a quick voice...",
    type: "audio",
    senderId: "user_002",
    timestamp: Date.now() - 1000 * 60 * 15,
    status: "sent",
    isSender: true,
    attachments: ["https://example.com/audio123.mp3"],
  },
  {
    id: "msg7",
    text: "File not sent yet",
    type: "file",
    senderId: "user_002",
    timestamp: Date.now() - 1000 * 60 * 14,
    status: "sending",
    isSender: true,
    attachments: ["local://file.docx"],
  },
  {
    id: "msg8",
    text: "Oops, this message failed to send.",
    type: "text",
    senderId: "user_002",
    timestamp: Date.now() - 1000 * 60 * 13,
    status: "failed",
    isSender: true,
  },
  {
    id: "msg9",
    text: "This message was deleted.",
    type: "text",
    senderId: "user_002",
    timestamp: Date.now() - 1000 * 60 * 12,
    status: "sent",
    isSender: true,
  },
  {
    id: "msg10",
    text: "Hey check this out",
    type: "text",
    senderId: "user_002",
    timestamp: Date.now() - 1000 * 60 * 11,
    status: "sent",
    isSender: true,
  },
];

const ChatScreen = ({navigation}: ScreenProps) => {
  const bottomTabNavigator = navigation.getParent(Navigators.BOTTOMTAB);
  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <HeaderBackButton
          onPress={() => navigation.goBack()}
          displayMode="default"
          tintColor={colors.primary}
          pressColor={colors.primary}
        />
      ),
      headerRight: () => <HeaderRightCTA />,
    });
  }, [navigation]);
  useFocusEffect(
    useCallback(() => {
      const handleNavigateChatDetailScreen = () => {
        navigation.navigate(Screens.CONTACTDETAIL);
      };
      navigation.setOptions({
        headerTitle: () => <HeaderUserInfo onPress={handleNavigateChatDetailScreen} />,
      });
      bottomTabNavigator?.setOptions({tabBarStyle: {display: "none"}});
    }, [bottomTabNavigator, navigation])
  );

  const [messages, setMessages] = useState<Message[]>([]);

  return (
    <KeyboardSafeArea>
      <FlatList
        data={mockMessages}
        renderItem={({item}) => <MessageBubble message={item} />}
        keyExtractor={(item) => item.id}
        inverted
        showsVerticalScrollIndicator={false}
        style={styles.screen}
        contentContainerStyle={{paddingVertical: spacing.s20}}
        keyboardShouldPersistTaps="handled"
      />
      <MessageComposer />
    </KeyboardSafeArea>
  );
};

export default ChatScreen;
