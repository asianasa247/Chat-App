import {colors} from "@/src/constants/colors";
import {spacing} from "@/src/constants/spacing";
import {styles} from "@/src/styles/components/ChatListScreen/temp3";
import {useActionSheet} from "@expo/react-native-action-sheet";
import {Feather, FontAwesome} from "@expo/vector-icons";
import React from "react";
import {Text, View} from "react-native";
import MyPressable from "../common/MyPressable";
const ChatItemActions = () => {
  const {showActionSheetWithOptions} = useActionSheet();

  const handleShowModalMore = () => {
    const options = [
      {label: "Mute", action: () => {}},
      {label: "Contact Info", action: () => {}},
      {label: "Export Chat", action: () => {}},
      {label: "Clear Chat", action: () => {}},
      {label: "Delete Chat", action: () => {}, isDestructive: true},
      {label: "Cancel", action: () => {}, isCancel: true},
    ];

    showActionSheetWithOptions(
      {
        options: options.map((opt) => opt.label),
        cancelButtonIndex: options.findIndex((opt) => opt.isCancel),
        destructiveButtonIndex: options.findIndex((opt) => opt.isDestructive),
      },
      (selectedIndex?: number) => {
        if (selectedIndex !== undefined && options[selectedIndex]) {
          options[selectedIndex].action();
        }
      }
    );
  };
  return (
    <View style={styles.rowBack}>
      <MyPressable style={styles.firstBtn} onPress={handleShowModalMore}>
        <Feather name="more-horizontal" size={spacing.s24} color={colors.white} />
        <Text style={styles.firstBtnText}>More</Text>
      </MyPressable>
      <MyPressable style={styles.secondBtn}>
        <FontAwesome name="archive" size={spacing.s24} color={colors.primary} />
        <Text style={styles.secondBtnText}>Archive</Text>
      </MyPressable>
    </View>
  );
};

export default ChatItemActions;
