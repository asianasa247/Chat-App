import {styles} from "@/src/styles/components/common/logoHeaderStyles";
import React from "react";
import {Image, Text} from "react-native";

const LogoHeader = () => {
  return (
    <>
      <Image source={require("../../../assets/images/logo.png")} style={styles.logo} />

      <Text style={styles.heading}>CÔNG TY CỔ PHẦN JWKIM</Text>

      <Text style={styles.subheading}>Đăng kí để tiếp tục</Text>
    </>
  );
};

export default React.memo(LogoHeader);
