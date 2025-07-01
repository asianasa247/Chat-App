import {colors} from "@/src/constants/colors";
import {spacing} from "@/src/constants/spacing";
import {styles} from "@/src/styles/components/ChatScreen/temp7";
import Ionicons from "@expo/vector-icons/Ionicons";
import {View} from "react-native";
import MyPressable from "../common/MyPressable";
const HeaderRightCTA = () => {
  return (
    <View style={styles.container}>
      <MyPressable>
        <Ionicons name="videocam-outline" size={spacing.s24} color={colors.primary} />
      </MyPressable>
      <MyPressable>
        <Ionicons name="call-outline" size={spacing.s21} color={colors.primary} />
      </MyPressable>
    </View>
  );
};

export default HeaderRightCTA;
