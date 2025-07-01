import {spacing} from "@/src/constants/spacing";
import React from "react";
import {Pressable, PressableProps, StyleProp, ViewStyle} from "react-native";

type MyPressableProps = PressableProps & {
  style?: StyleProp<ViewStyle>;
};

const MyPressable = ({children, style, ...rest}: MyPressableProps) => {
  return (
    <Pressable
      {...rest}
      style={({pressed}) => [pressed && {opacity: 0.5}, style]}
      hitSlop={{top: spacing.s10, bottom: spacing.s10, left: spacing.s10, right: spacing.s10}}
    >
      {children}
    </Pressable>
  );
};

export default MyPressable;
