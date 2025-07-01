import BottomSpacer from "@/src/components/common/BottomSpacer";
import KeyboardSafeArea from "@/src/components/common/KeyboardSafeArea";
import MenuItem from "@/src/components/common/MenuItem";
import UserProfile from "@/src/components/SettingScreen/UserProfile";
import {colors} from "@/src/constants/colors";
import {Screens} from "@/src/constants/screens";
import {spacing} from "@/src/constants/spacing";
import {SettingStackNavigatorParamList} from "@/src/types/navigation";
import {FontAwesome} from "@expo/vector-icons/";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {ScrollView, StyleSheet, View} from "react-native";
import {bottomMenuItem, EnhancedMenuItem, middleMenuItem, topMenuItems} from "./settingsScreen.constants";

type ScreenProps = NativeStackScreenProps<SettingStackNavigatorParamList, Screens.SETTINGS>;
type ScreenName = keyof SettingStackNavigatorParamList;
export default function SettingScreen({navigation}: ScreenProps) {
  const handleNavigateScreen = (screen: ScreenName) => {
    navigation.navigate(screen);
  };
  return (
    <KeyboardSafeArea>
      <ScrollView style={styles.container}>
        <UserProfile name="Sabohiddin" desc="Digital goodies designer - Pixsellz" />

        {/* Top Menu Item */}
        <View style={styles.menuItemContainer}>
          {topMenuItems.map((item: EnhancedMenuItem) => (
            <MenuItem
              key={item.id}
              icon={<FontAwesome name={item.iconName} size={spacing.s19} color="white" />}
              title={item.title}
              backgroundColorIcon={item.backgroundColorIcon}
              isLastItem={item.isLastItem}
              onPress={() => handleNavigateScreen(item.navigateTo)}
            />
          ))}
        </View>

        {/* Middle Menu Item */}

        <View style={styles.menuItemContainer}>
          {middleMenuItem.map((item: EnhancedMenuItem) => (
            <MenuItem
              key={item.id}
              icon={<FontAwesome name={item.iconName} size={spacing.s19} color="white" />}
              title={item.title}
              backgroundColorIcon={item.backgroundColorIcon}
              isLastItem={item.isLastItem}
              onPress={() => handleNavigateScreen(item.navigateTo)}
            />
          ))}
        </View>

        {/* Bottom Menu Item */}

        <View style={styles.menuItemContainer}>
          {bottomMenuItem.map((item: EnhancedMenuItem) => (
            <MenuItem
              key={item.id}
              icon={<FontAwesome name={item.iconName} size={spacing.s19} color="white" />}
              title={item.title}
              backgroundColorIcon={item.backgroundColorIcon}
              isLastItem={item.isLastItem}
              onPress={() => handleNavigateScreen(item.navigateTo)}
            />
          ))}
        </View>
        <BottomSpacer />
      </ScrollView>
    </KeyboardSafeArea>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bgScreen02,
  },
  menuItemContainer: {
    marginTop: spacing.s35,
    borderTopWidth: spacing.s1,
    borderBottomWidth: spacing.s1,
    borderTopColor: colors.lightGray,
    borderBottomColor: colors.lightGray,
  },
});
