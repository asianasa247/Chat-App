import {styles} from "@/src/styles/components/CallListScreen/headerTabSwitchStyles";
import {CallFilterOptionView} from "@/src/types/calls/callFilterOptionView";
import React from "react";
import {Text, View} from "react-native";
import MyPressable from "../common/MyPressable";

type HeaderTabSwitchProps = {
  selected: CallFilterOptionView;
  onHandlerSwitchView: (option: CallFilterOptionView) => void;
};
const HeaderTabSwitch = ({selected, onHandlerSwitchView}: HeaderTabSwitchProps) => {
  return (
    <View style={styles.container}>
      <MyPressable
        style={[
          styles.buttonContainer,
          styles.buttonContainerLeft,
          selected === CallFilterOptionView.ALL ? styles.buttonContainerActive : styles.buttonContainerInActive,
        ]}
        onPress={() => onHandlerSwitchView(CallFilterOptionView.ALL)}
      >
        <Text
          style={[
            styles.buttonText,
            selected === CallFilterOptionView.ALL ? styles.buttonTextActive : styles.buttonTextInActive,
          ]}
        >
          All
        </Text>
      </MyPressable>
      <MyPressable
        style={[
          styles.buttonContainer,
          styles.buttonContainerRight,
          selected === CallFilterOptionView.MISSED ? styles.buttonContainerActive : styles.buttonContainerInActive,
        ]}
        onPress={() => onHandlerSwitchView(CallFilterOptionView.MISSED)}
      >
        <Text
          style={[
            styles.buttonText,
            selected === CallFilterOptionView.MISSED ? styles.buttonTextActive : styles.buttonTextInActive,
          ]}
        >
          Missed
        </Text>
      </MyPressable>
    </View>
  );
};

export default HeaderTabSwitch;
