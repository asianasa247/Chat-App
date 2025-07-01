import {colors} from "@/src/constants/colors";
import {spacing} from "@/src/constants/spacing";
import {menuItemStyle as styles} from "@/src/styles/components/common/temp13";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import React from "react";
import {Pressable, PressableProps, Text, View} from "react-native";
export type MenuItemProp = {
  icon: React.ReactNode;
  title: string;
  backgroundColorIcon: string;
  isLastItem: boolean;
  accessory?: string | number;
} & PressableProps;
const MenuItem = ({icon, title, backgroundColorIcon, isLastItem, accessory, ...props}: MenuItemProp) => {
  return (
    <Pressable
      style={({pressed}) => (pressed ? {...styles.pressableContainer, opacity: 0.5} : {...styles.pressableContainer})}
      {...props}
    >
      <View style={{...styles.iconContainer, backgroundColor: backgroundColorIcon}}>{icon}</View>
      <View style={{...styles.titleContainer, borderBottomWidth: isLastItem ? 0 : spacing.s1}}>
        <Text style={styles.titleText}>{title}</Text>
        <Text style={styles.accessoryText}>{accessory?.toString()}</Text>
        <EvilIcons name="chevron-right" size={spacing.s24} color={colors.lightGray} />
      </View>
    </Pressable>
  );
};

export default MenuItem;
