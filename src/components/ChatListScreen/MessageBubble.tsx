import {colors} from "@/src/constants/colors";
import {spacing} from "@/src/constants/spacing";
import {styles} from "@/src/styles/components/ChatScreen/messageBubbleStyles";
import {Message} from "@/src/types/common/message";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import React from "react";
import {Text, View} from "react-native";

type MessageBubbleProps = {
  message: Message;
};

const MessageBubble = ({message}: MessageBubbleProps) => {
  return (
    <View style={[styles.container, message.isSender ? styles.containerSender : styles.containerParticipant]}>
      <Text style={styles.messageText}>{message.text}</Text>
      <View style={styles.metaContainer}>
        <Text style={styles.time}>11:34</Text>
        <FontAwesome6 name="check" size={spacing.s8} color={colors.primary} />
      </View>
    </View>
  );
};

export default MessageBubble;
