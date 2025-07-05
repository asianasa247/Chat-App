import {colors} from "@/src/constants/colors";
import {Screens} from "@/src/constants/screens";
import {spacing} from "@/src/constants/spacing";
import {userProfileStyle as styles} from "@/src/styles/screens/settingsScreenStyles";
import {SettingStackNavigatorParamList} from "@/src/types/common/navigation";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import {useNavigation} from "@react-navigation/native";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {Image, Pressable, Text, View, ViewStyle} from "react-native";
type UserProfileProp = {
  name: string;
  desc: string;
  style?: ViewStyle | ViewStyle[];
};

const UserProfile = ({name, desc, style}: UserProfileProp) => {
  const navigation = useNavigation<NativeStackNavigationProp<SettingStackNavigatorParamList>>();
  const handleNavigateToEditProfileScreen = () => {
    navigation.navigate(Screens.EDITPROFILE);
  };
  // Chỉnh sửa source ảnh thành động sau
  return (
    <Pressable
      style={({pressed}) => (pressed ? [{opacity: 0.5}, styles.container, style] : [styles.container, style])}
      onPress={handleNavigateToEditProfileScreen}
    >
      <Image source={require("../../../assets/images/setting-screen-avatar.jpg")} style={styles.img} />
      <View>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.desc}>{desc}</Text>
      </View>
      <EvilIcons name="chevron-right" size={spacing.s24} color={colors.lightGray} style={styles.iconRight} />
    </Pressable>
  );
};

export default UserProfile;
