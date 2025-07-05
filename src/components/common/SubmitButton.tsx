import {styles} from "@/src/styles/components/common/submitButtonStyles";
import React from "react";
import {Pressable, PressableProps, StyleProp, Text, ViewStyle} from "react-native";

type SubmitButtonProps = {
  children: React.ReactNode;
  containerStyles?: StyleProp<ViewStyle>;
} & PressableProps;

const SubmitButton = ({children, containerStyles, ...props}: SubmitButtonProps) => {
  return (
    <Pressable
      style={({pressed}) =>
        pressed ? [{opacity: 0.5}, styles.buttonContainer, containerStyles] : [styles.buttonContainer, containerStyles]
      }
      {...props}
    >
      <Text style={styles.text}>{children}</Text>
    </Pressable>
  );
};

export default SubmitButton;
