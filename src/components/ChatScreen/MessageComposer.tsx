import {colors} from "@/src/constants/colors";
import {spacing} from "@/src/constants/spacing";
import {styles} from "@/src/styles/components/ChatScreen/messageComposerStyles";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import React, {useState} from "react";
import {TextInput, View} from "react-native";
import MyPressable from "../common/MyPressable";
const MessageComposer = () => {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  return (
    <View style={styles.container}>
      <MyPressable>
        <MaterialCommunityIcons name="plus" size={spacing.s24} color={colors.primary} />
      </MyPressable>

      <View style={[styles.inputContainer, isFocused && styles.wrapperFocused]}>
        <TextInput
          style={styles.input}
          multiline
          placeholder="Aa"
          placeholderTextColor={colors.textMessage}
          textAlignVertical={"top"}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        <MyPressable>
          <MaterialCommunityIcons name="sticker-outline" size={spacing.s24} color={colors.primary} />
        </MyPressable>
      </View>
      {isFocused ? (
        // Send Icon
        <MyPressable>
          <MaterialCommunityIcons name="send" size={spacing.s24} color={colors.primary} />
        </MyPressable>
      ) : (
        <>
          {/* Camera Icon */}
          <MyPressable style={styles.iconCam}>
            <MaterialCommunityIcons name="camera-outline" size={spacing.s24} color={colors.primary} />
          </MyPressable>
          {/* Micro Icon */}
          <MyPressable>
            <MaterialCommunityIcons name="microphone-outline" size={spacing.s24} color={colors.primary} />
          </MyPressable>
        </>
      )}
    </View>
  );
};

{
  /* 

*/
}
export default MessageComposer;
