import React from "react";
import { TouchableOpacity, View } from "react-native";
import colors from "../theme/colors";

export const AppRadioButton = ({ selected, onSelect }) => {
  return <TouchableOpacity onPress={onSelect} style={[{
    height: 24,
    width: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: colors.grey,
    alignItems: "center",
    justifyContent: "center",
  }]}>
    {
      selected ?
        <View style={{
          height: 12,
          width: 12,
          borderRadius: 6,
          backgroundColor: colors.grey,
        }} />
        : null
    }
  </TouchableOpacity>;
};
