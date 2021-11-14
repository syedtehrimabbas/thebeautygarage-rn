import React from "react";
import { Text, TouchableOpacity } from "react-native";
import colors from "../theme/colors";
import { Typography } from "../theme/Typography";

export const AppButtonBorder = ({ label, onPress, backgroundColor, styles, height,width, textColor ,borderRadius,borderColor}) => {
  return <TouchableOpacity
    onPress={onPress}
    style={[{
      borderRadius: borderRadius !== undefined ? borderRadius : 50,
      borderColor: borderColor !== undefined ? borderColor : 50,
      borderWidth: 1,
      backgroundColor: backgroundColor,
      width: width !== undefined ? width : '80%',
      justifyContent: "center",
      alignItems: "center",
      height: height !== undefined ? height : 25,
      marginTop: 10,
      alignSelf: "center",
      shadowOpacity: 0.5,
      elevation: 2,
      shadowRadius: 15,
      /* Brand */
      shadowOffset: { width: 1, height: 13 },
    }, styles]}
  >
    <Text style={[Typography.MediumRegular, {
      color: textColor !== undefined ? textColor : colors.white,
    }]}>{label}</Text>
  </TouchableOpacity>;
};
