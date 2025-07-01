import {colors} from "@/src/constants/colors";
import {spacing} from "@/src/constants/spacing";
import {styles} from "@/src/styles/components/ChatDetailScreen/temp1";
import {MaterialCommunityIcons as MCI} from "@expo/vector-icons/";
import React from "react";
import {Text, View} from "react-native";
import MyPressable from "../common/MyPressable";
type ActionButtonProps = {
  id?: number;
  children: React.ReactElement;
  onPress: () => void;
};

const ContactInfo = () => {
  const actionButtonList: ActionButtonProps[] = [
    {
      id: 1,
      children: <MCI name="chat" size={spacing.s18} color={colors.primary} />,
      onPress: () => {},
    },
    {
      id: 2,
      children: <MCI name="video" size={spacing.s18} color={colors.primary} />,
      onPress: () => {},
    },
    {
      id: 3,
      children: <MCI name="phone" size={spacing.s18} color={colors.primary} />,
      onPress: () => {},
    },
  ];
  return (
    <>
      <View style={styles.container}>
        <View style={styles.contactContainer}>
          <Text style={styles.nameContact}>Martha Craig</Text>
          <Text style={styles.numberContact}>+1 202 555 0181</Text>
        </View>
        <View style={styles.actionsContainer}>
          {actionButtonList.map((item) => (
            <ActionButton key={item.id} onPress={item.onPress}>
              {item.children}
            </ActionButton>
          ))}
        </View>
      </View>
      <View style={{backgroundColor: colors.white}}>
        <View style={styles.containerMore}>
          <Text style={styles.moreTitle}>Design adds value faster, than it adds cost</Text>
          <Text style={styles.moreDesc}>Dec 18, 2018</Text>
        </View>
      </View>
    </>
  );
};

const ActionButton = ({children, onPress}: ActionButtonProps) => {
  return (
    <MyPressable style={styles.actBtnContainer} onPress={onPress}>
      {children}
    </MyPressable>
  );
};

export default ContactInfo;
