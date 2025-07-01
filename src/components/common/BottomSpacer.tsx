import React from "react";
import {View} from "react-native";
import {spacing} from "../../constants/spacing";

type BottomSpacerProps = {
  height?: number; // chiều cao mặc định có thể tùy chỉnh
};

const BottomSpacer = ({height = spacing.s50}: BottomSpacerProps) => {
  return <View style={{height, backgroundColor: "transparent"}} />;
};

export default BottomSpacer;
