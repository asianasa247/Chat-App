import KeyboardSafeArea from "@/src/components/common/KeyboardSafeArea";
import {ScrollView, Text} from "react-native";

const StarredMessagesScreen = () => {
  return (
    <KeyboardSafeArea>
      <ScrollView>
        <Text>StarredMessagesScreen</Text>
      </ScrollView>
    </KeyboardSafeArea>
  );
};

export default StarredMessagesScreen;
