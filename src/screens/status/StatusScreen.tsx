import MyPressable from "@/src/components/common/MyPressable";
import UserStatusCard from "@/src/components/StatusScreen/UserStatusCard";
import {Screens} from "@/src/constants/screens";
import {styles} from "@/src/styles/screens/statusScreenStyles";
import {StatusStackNavigatorParamList} from "@/src/types/common/navigation";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {useLayoutEffect} from "react";
import {ScrollView, Text, View} from "react-native";
import KeyboardSafeArea from "../../components/common/KeyboardSafeArea";

type ScreenProps = NativeStackScreenProps<StatusStackNavigatorParamList, Screens.STATUS>;

const StatusScreen = ({navigation}: ScreenProps) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <MyPressable style={styles.headerLeftContainer}>
          <Text style={styles.headerLeftText}>Privacy</Text>
        </MyPressable>
      ),
    });
  }, [navigation]);

  return (
    <KeyboardSafeArea>
      <ScrollView style={styles.screen}>
        <UserStatusCard />
        <NoDataPlaceholder />
      </ScrollView>
    </KeyboardSafeArea>
  );
};

export default StatusScreen;

const NoDataPlaceholder = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.noDataText}>No recent updates to show right now.</Text>
    </View>
  );
};
