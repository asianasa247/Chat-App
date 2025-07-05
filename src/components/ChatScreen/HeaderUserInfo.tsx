import {styles} from "@/src/styles/components/ChatScreen/headerUserInfoStyles";
import React from "react";
import {Image, Text, View} from "react-native";
import MyPressable from "../common/MyPressable";

type HeaderUserInfoProps = {
  onPress: () => void;
};

const HeaderUserInfo = ({onPress}: HeaderUserInfoProps) => {
  return (
    <MyPressable style={styles.container} onPress={onPress}>
      <Image source={require("../../../assets/images/logo.png")} style={styles.avatar} />
      <View style={styles.contentContainer}>
        <Text style={styles.name}>Martha Craig</Text>
        <Text style={styles.desc}>tap here for contact info</Text>
      </View>
    </MyPressable>
  );
};

export default HeaderUserInfo;
