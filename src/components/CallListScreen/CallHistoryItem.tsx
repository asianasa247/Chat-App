import {colors} from "@/src/constants/colors";
import {spacing} from "@/src/constants/spacing";
import {styles} from "@/src/styles/components/CallListScreen/callHistoryItemStyles";
import {AntDesign, Ionicons} from "@expo/vector-icons";
import React from "react";
import {Image, Text, View} from "react-native";
import * as Animatable from "react-native-animatable";
import MyPressable from "../common/MyPressable";
type CallRecord = {
  id: string;
  name: string;
  avatar: string;
  status: "incoming" | "outgoing" | "missed";
  date: string;
  timestamp: Date;
};
type CallHistoryItemProps = {
  callRecord: CallRecord;
  onNavigateDetailCallScreen: () => void;
  onCall: () => void;
  isEditing: boolean;
};

const CallHistoryItem = ({isEditing, callRecord, onCall, onNavigateDetailCallScreen}: CallHistoryItemProps) => {
  return (
    <MyPressable style={styles.container} onPress={onCall} disabled={isEditing}>
      {isEditing && (
        <Animatable.View animation="slideInLeft" duration={300} style={styles.deleteButton}>
          <MyPressable>
            <AntDesign name="minuscircle" size={spacing.s21} color={colors.primary} />
          </MyPressable>
        </Animatable.View>
      )}
      <Image source={require("../../../assets/images/logo.png")} style={styles.avatar} />
      <View style={styles.decorContainer}>
        <View style={styles.callContent}>
          <Text style={[styles.callName, callRecord.status === "missed" ? styles.callNameMissed : {}]}>
            {callRecord.name}
          </Text>
          <View style={styles.callStatusContainer}>
            <Ionicons name="call" size={spacing.s14} color={colors.textMessage} />
            <Text style={styles.callStatusText}>{callRecord.status}</Text>
          </View>
        </View>
        <Text style={styles.callDate}>{callRecord.date}</Text>
        <MyPressable onPress={onNavigateDetailCallScreen} disabled={isEditing}>
          <Ionicons name="alert-circle-outline" size={spacing.s24} color={colors.primary} />
        </MyPressable>
      </View>
    </MyPressable>
  );
};

export default CallHistoryItem;
