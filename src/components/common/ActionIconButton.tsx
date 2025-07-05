import {styles} from "@/src/styles/components/common/actionIconButtonStyles";
import {ActionIconButtonProps} from "@/src/types/common/actionIconButton";
import MyPressable from "./MyPressable";

export const ActionIconButton = ({children, onPress}: ActionIconButtonProps) => {
  return (
    <MyPressable style={styles.actBtnContainer} onPress={onPress}>
      {children}
    </MyPressable>
  );
};
