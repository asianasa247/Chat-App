import {colors} from "@/src/constants/colors";
import {spacing} from "@/src/constants/spacing";
import {typography} from "@/src/constants/typography";
import {styles} from "@/src/styles/components/ChatListScreen/chatItemStyles";
import {MaterialCommunityIcons as MCI} from "@expo/vector-icons";
import Entypo from "@expo/vector-icons/Entypo";
import React from "react";
import {Image, Pressable, PressableProps, Text, View} from "react-native";
import * as Animatable from "react-native-animatable";

type ChatItemProps = {
  isEditing: boolean;
  isSelected: boolean;
} & PressableProps;

const ChatItem = ({isEditing, isSelected, ...props}: ChatItemProps) => {
  return (
    <Pressable
      style={({pressed}) =>
        pressed ? [styles.chatItemContainer, {backgroundColor: colors.culturedPearl}] : [styles.chatItemContainer]
      }
      {...props}
    >
      {isEditing && (
        <Animatable.View animation="slideInLeft" duration={300} style={styles.checkboxContainer}>
          {isSelected ? (
            <MCI name="check-circle" size={spacing.s24} color={colors.primary} />
          ) : (
            <MCI name="checkbox-blank-circle-outline" size={spacing.s24} color={colors.lightGray} />
          )}
        </Animatable.View>
      )}
      <Image style={styles.avatar} source={require("../../../assets/images/logo.png")} />

      <View style={styles.contentContainer}>
        <View style={styles.contentInner}>
          <View style={styles.infoContainer}>
            <Text style={styles.name}>Andrew Tate</Text>
            <Text style={styles.date}>12/23/25</Text>
          </View>

          <View style={styles.messageContainer}>
            <Text style={styles.message}>
              <Entypo name="check" size={typography.fontSizes.f14} color={colors.primary} style={styles.iconMessage} />
              {"  "}
              Actually I wanted to check Actually I wanted to check Actually I wanted...
            </Text>
          </View>
        </View>

        <Entypo
          name="chevron-right"
          size={typography.fontSizes.f16}
          color={colors.lightGray}
          style={styles.iconChevronRight}
        />
      </View>
    </Pressable>
  );
};

export default ChatItem;
