import React from "react";
import { Text, TouchableOpacity } from "react-native";
import colors from "../theme/colors";
import { Typography } from "../theme/Typography";

export const AppButton = ({ label, onPress, backgroundColor, styles }) => {
  return <TouchableOpacity
    onPress={onPress}
    style={[{
      borderRadius: 8,
      backgroundColor: backgroundColor,
      width: "50%",
      justifyContent: "center",
      alignItems: "center",
      height: 45,
      marginTop: 10,
      alignSelf: "center",
      shadowOpacity: 0.5,
      elevation: 2,
      shadowRadius: 15,
      /* Brand */
      shadowOffset: { width: 1, height: 13 },
    }, styles]}
  >
    <Text style={[Typography.MediumBold, {
      color: colors.black,
    }]}>{label}</Text>
  </TouchableOpacity>;
};
