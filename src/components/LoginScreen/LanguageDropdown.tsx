import {colors} from "@/src/constants/colors";
import {spacing} from "@/src/constants/spacing";
import {typography} from "@/src/constants/typography";
import React, {useState} from "react";
import {StyleSheet} from "react-native";
import {Dropdown} from "react-native-element-dropdown";

const data = [
  {label: "Việt Nam", value: "vn"},
  {label: "English", value: "en"},
  {label: "Korea", value: "ko"},
];

const LanguageDropdown = () => {
  const [value, setValue] = useState(data[0].value);

  return (
    <Dropdown
      style={styles.dropdown}
      placeholderStyle={styles.placeholderStyle}
      selectedTextStyle={styles.selectedTextStyle}
      //   inputSearchStyle={styles.inputSearchStyle}
      //   iconStyle={styles.iconStyle}
      data={data}
      maxHeight={300}
      labelField="label"
      valueField="value"
      placeholder="Select item"
      searchPlaceholder="Search..."
      value={value}
      onChange={(item) => {
        setValue(item.value);
      }}
      //   renderLeftIcon={() => <AntDesign style={styles.icon} color="black" name="Safety" size={20} />}
    />
  );
};

export default LanguageDropdown;

const styles = StyleSheet.create({
  dropdown: {
    height: spacing.s37,
    borderColor: colors.mediumGray,
    borderWidth: 1,
    borderRadius: spacing.s5,
    width: spacing.s114,
    backgroundColor: colors.snowWhite,
  },

  placeholderStyle: {
    fontSize: typography.fontSizes.f16,
  },
  selectedTextStyle: {
    fontSize: typography.fontSizes.f16,
    marginLeft: spacing.s20,
  },
  //     icon: {
  //     marginRight: 5,
  //   },
  //   iconStyle: {
  //     width: 20,
  //     height: 20,
  //   },
});
