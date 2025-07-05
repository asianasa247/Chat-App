import {colors} from "@/src/constants/colors";
import {styles} from "@/src/styles/components/ChatListScreen/chatListHeaderActionsStyles";
import React from "react";
import {Text, View} from "react-native";
import MyPressable from "../common/MyPressable";

type ChatListHeaderActionsProps = {
  isEditing: boolean;
};
const ChatListHeaderActions = ({isEditing}: ChatListHeaderActionsProps) => {
  const handleCreateNewGroup = () => {
    //logic later
    console.log("handleCreateNewGroup in ChatListScreen");
  };
  const handleShowBroadcastList = () => {
    //logic later
    console.log("handleShowBroadcastList in ChatListScreen");
  };

  return (
    <View style={styles.chatListHeaderActionsContainer}>
      <MyPressable onPress={handleShowBroadcastList} disabled={isEditing}>
        <Text style={[styles.textHeaderActions, isEditing ? {color: colors.lightGray} : undefined]}>
          Broadcast Lists
        </Text>
      </MyPressable>
      <MyPressable onPress={handleCreateNewGroup} disabled={isEditing}>
        <Text style={[styles.textHeaderActions, isEditing ? {color: colors.lightGray} : undefined]}>New Group</Text>
      </MyPressable>
    </View>
  );
};

export default ChatListHeaderActions;
