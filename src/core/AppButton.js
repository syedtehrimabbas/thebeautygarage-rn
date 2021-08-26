import React from "react";
import { Text, TouchableOpacity } from "react-native";
import colors from "../theme/colors";
import { Typography } from "../theme/Typography";

export const AppButton = ({ label, onPress, backgroundColor, styles, height }) => {
  return <TouchableOpacity
    onPress={onPress}
    style={[{
      borderRadius: 50,
      backgroundColor: backgroundColor,
      width: "80%",
      justifyContent: "center",
      alignItems: "center",
      height: height !== undefined ? height : 20,
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
      color: colors.white,
    }]}>{label}</Text>
  </TouchableOpacity>;
};
