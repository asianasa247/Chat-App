import KeyboardSafeArea from "@/src/components/common/KeyboardSafeArea";
import {ScrollView, Text} from "react-native";

const AccountScreen = () => {
  return (
    <KeyboardSafeArea>
      <ScrollView>
        <Text>AccountScreen</Text>
      </ScrollView>
    </KeyboardSafeArea>
  );
};

export default AccountScreen;
