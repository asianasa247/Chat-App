import {colors} from "@/src/constants/colors";
import {styles} from "@/src/styles/components/ChatListScreen/temp5";
import {useState} from "react";
import {Text} from "react-native";
import {View as AnimatedView} from "react-native-animatable";
import ConfirmDialog from "../common/ConfirmDialog";
import MyPressable from "../common/MyPressable";

type ActionItem = {
  id: number;
  label: string;
  onPress: () => void;
  isActive: boolean;
};

type ChatListEditActionsBarProps = {
  isAnyChatSelected: boolean;
};

const ChatListEditActionsBar = ({isAnyChatSelected}: ChatListEditActionsBarProps) => {
  const [dialogVisible, setDialogVisible] = useState<boolean>(false);
  const actionList: ActionItem[] = [
    {
      id: 1,
      label: "Archive",
      onPress: () => {
        setDialogVisible(true);
      },
      isActive: isAnyChatSelected,
    },
    {
      id: 2,
      label: "Read All",
      onPress: () => {
        setDialogVisible(true);
      },
      isActive: true,
    },
    {
      id: 3,
      label: "Delete",
      onPress: () => {
        setDialogVisible(true);
      },
      isActive: isAnyChatSelected,
    },
  ];
  const handleConfirmDialog = () => {
    setDialogVisible(false);
  };
  const handleCancelDialog = () => {
    setDialogVisible(false);
  };

  return (
    <>
      <AnimatedView animation="slideInUp" duration={300} style={styles.container}>
        {actionList.map((action) => (
          <MyPressable key={action.id} onPress={action.onPress} disabled={!action.isActive}>
            <Text style={[styles.actionLabel, action.isActive ? {color: colors.primary} : {}]}>{action.label}</Text>
          </MyPressable>
        ))}
      </AnimatedView>
      <ConfirmDialog visible={dialogVisible} onCancel={handleCancelDialog} onConfirm={handleConfirmDialog} />
    </>
  );
};

export default ChatListEditActionsBar;
