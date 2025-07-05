import {colors} from "@/src/constants/colors";
import {spacing} from "@/src/constants/spacing";
import {styles} from "@/src/styles/components/StatusScreen/userStatusCardStyles";
import {ActionIconButtonProps} from "@/src/types/common/actionIconButton";
import {MaterialCommunityIcons as MCI} from "@expo/vector-icons";
import React from "react";
import {Image, Text, View} from "react-native";
import {ActionIconButton} from "../common/ActionIconButton";
import MyPressable from "../common/MyPressable";
const UserStatusCard = () => {
  const actionButtonList: ActionIconButtonProps[] = [
    {
      id: 1,
      children: <MCI name="camera" size={spacing.s18} color={colors.primary} />,
      onPress: () => {},
    },
    {
      id: 2,
      children: <MCI name="pencil" size={spacing.s18} color={colors.primary} />,
      onPress: () => {},
    },
  ];
  return (
    <View style={styles.container}>
      <MyPressable style={styles.imageContainer}>
        <Image source={require("../../../assets/images/logo.png")} style={styles.image} />
        <Image source={require("../../../assets/images/icon-add-photo.png")} style={styles.imageIconButton} />
      </MyPressable>
      <View style={styles.statusContainer}>
        <Text style={styles.statusHeading}>My Status</Text>
        <Text style={styles.statusSubheading}>Add to my status</Text>
      </View>
      <View style={styles.actionsContainer}>
        {actionButtonList.map((actionButton) => (
          <ActionIconButton key={actionButton.id} onPress={actionButton.onPress}>
            {actionButton.children}
          </ActionIconButton>
        ))}
      </View>
    </View>
  );
};

export default UserStatusCard;
