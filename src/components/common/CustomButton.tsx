import {styles} from "@/src/styles/components/common/temp11";
import React from "react";
import {Pressable, PressableProps, StyleProp, Text, TextStyle, View, ViewStyle} from "react-native";

type CustomButtonProps = {
  children: React.ReactNode;
  containerStyles?: StyleProp<ViewStyle>;
  textStyles?: StyleProp<TextStyle>;
  icon?: React.ReactElement;
} & PressableProps;

const CustomButton = ({children, containerStyles, textStyles, icon, ...props}: CustomButtonProps) => {
  return (
    <Pressable
      style={({pressed}) =>
        pressed ? [{opacity: 0.5}, styles.buttonContainer, containerStyles] : [styles.buttonContainer, containerStyles]
      }
      {...props}
    >
      <View style={styles.textContainer}>
        {icon}
        <Text style={[styles.text, textStyles]}>{children}</Text>
      </View>
    </Pressable>
  );
};

export default CustomButton;
