import ContactInfo from "@/src/components/ChatDetailScreen/ContactInfo";
import ContactOptions from "@/src/components/ChatDetailScreen/ContactOptions";
import KeyboardSafeArea from "@/src/components/common/KeyboardSafeArea";
import MyPressable from "@/src/components/common/MyPressable";
import {colors} from "@/src/constants/colors";
import {Screens} from "@/src/constants/screens";
import {styles} from "@/src/styles/screens/temp16";
import {ChatsStackNavigatorParamList} from "@/src/types/navigation";
import {HeaderBackButton} from "@react-navigation/elements";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {useLayoutEffect} from "react";
import {Image, ScrollView, Text} from "react-native";
type ScreenProps = NativeStackScreenProps<ChatsStackNavigatorParamList, Screens.CHATDETAIL>;

const ChatDetailScreen = ({navigation}: ScreenProps) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <HeaderBackButton
          onPress={() => navigation.goBack()}
          displayMode="default"
          tintColor={colors.primary}
          pressColor={colors.primary}
          label="Name"
        />
      ),
      headerRight: () => (
        <MyPressable style={styles.leftHeaderContainer}>
          <Text style={styles.textLeftHeader}>Edit</Text>
        </MyPressable>
      ),
      headerTitle: () => <Text style={styles.headerTitle}>Contact Info</Text>,
    });
  }, [navigation]);

  return (
    <KeyboardSafeArea>
      <ScrollView style={styles.screen}>
        <Image source={require("../../../assets/images/contact_img.jpg")} style={styles.imgProfile} />
        <ContactInfo />
        <ContactOptions />
      </ScrollView>
    </KeyboardSafeArea>
  );
};

export default ChatDetailScreen;
