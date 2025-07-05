import {colors} from "@/src/constants/colors";
import {spacing} from "@/src/constants/spacing";
import {styles} from "@/src/styles/components/common/contactOptionsStyles";
import {FontAwesome, MaterialCommunityIcons as MCI} from "@expo/vector-icons/";
import React from "react";
import {View} from "react-native-animatable";
import BottomSpacer from "../common/BottomSpacer";
import MenuItem from "../common/MenuItem";

const ContactOptions = () => {
  const contactOptionListFirst = [
    {
      id: 1,
      icon: <MCI name="image-outline" size={spacing.s19} color={colors.white} />,
      backgroundColorIcon: colors.infoBlue,
      isLastItem: false,
      title: "Media, Links, and Docs",
      accessory: 12,
    },
    {
      id: 2,
      icon: <MCI name="star" size={spacing.s19} color={colors.white} />,
      backgroundColorIcon: colors.amber,
      isLastItem: false,
      title: "Starred Messages",
      accessory: "None",
    },
    {
      id: 3,
      icon: <FontAwesome name="search" size={spacing.s19} color={colors.white} />,
      backgroundColorIcon: colors.infoBlue,
      isLastItem: false,
      title: "Chat Search",
      accessory: "",
    },
  ];

  const contactOptionListSecond = [
    {
      id: 1,
      icon: <MCI name="volume-high" size={spacing.s19} color={colors.white} />,
      backgroundColorIcon: colors.limeGreen,
      isLastItem: false,
      title: "Mute",
      accessory: "No",
    },
    {
      id: 2,
      icon: <FontAwesome name="music" size={spacing.s19} color={colors.white} />,
      backgroundColorIcon: colors.cyberPink,
      isLastItem: false,
      title: "Custom Tone",
      accessory: "Default (None)",
    },
    {
      id: 3,
      icon: <MCI name="tray-arrow-down" size={spacing.s19} color={colors.white} />,
      backgroundColorIcon: colors.amber,
      isLastItem: false,
      title: "Save to Camera Roll",
      accessory: "Default",
    },
    {
      id: 4,
      icon: <FontAwesome name="lock" size={spacing.s19} color={colors.white} />,
      backgroundColorIcon: colors.infoBlue,
      isLastItem: true,
      title: "Encryption",
      accessory: "",
    },
  ];
  return (
    <View style={styles.container}>
      <View style={styles.contactOptionContainer}>
        {contactOptionListFirst.map((item) => (
          <MenuItem
            key={item.id}
            icon={item.icon}
            backgroundColorIcon={item.backgroundColorIcon}
            isLastItem={item.isLastItem}
            title={item.title}
            accessory={item.accessory}
          />
        ))}
      </View>
      <View style={styles.contactOptionContainer}>
        {contactOptionListSecond.map((item) => (
          <MenuItem
            key={item.id}
            icon={item.icon}
            backgroundColorIcon={item.backgroundColorIcon}
            isLastItem={item.isLastItem}
            title={item.title}
            accessory={item.accessory}
          />
        ))}
      </View>
      <BottomSpacer />
    </View>
  );
};

export default ContactOptions;
