import {styles} from "@/src/styles/components/LoginScreen/formInputStyle";
import React, {useState} from "react";
import {StyleProp, Text, TextInput, View, ViewStyle} from "react-native";
import {colors} from "../../constants/colors";
type FormInputProps = {
  label: string;
  placeholder: string;
  containerStyles?: StyleProp<ViewStyle>;
  onChange?: (value: string) => void;
};
const FormInput = ({label, placeholder, containerStyles, onChange}: FormInputProps) => {
  const [valueInput, setValueInput] = useState("");

  const handleChangeValueInput = (value: string) => {
    setValueInput(value);
    if (onChange) {
      onChange(value);
    }
  };

  return (
    <View style={[styles.formInputContainer, containerStyles]}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor={colors.lightGray}
        value={valueInput}
        onChangeText={handleChangeValueInput}
      />
    </View>
  );
};

export default FormInput;
