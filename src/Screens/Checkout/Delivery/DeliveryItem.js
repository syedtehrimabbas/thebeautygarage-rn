import React from "react";
import { Text, View } from "react-native";
import colors from "../../../theme/colors";
import { Typography } from "../../../theme/Typography";
import { wp } from "../../../AppStyle/Dimension";

export const DeliveryItem = ({ selected, title, subTitle }) => {
  return <View style={{
    flexDirection: "column",
    width: wp(90),
    height: 70,
    marginTop: 10,
    borderRadius: 10,
    backgroundColor: selected ? colors.red : colors.white,
    alignSelf: "center",
    justifyContent: "center",
    elevation: .7,
    padding: 10,
  }}>
    <Text
      style={[Typography.LargeBold, { color: selected ? colors.white : colors.black }]}>{title}</Text>
    <Text
      style={[Typography.MediumRegular, { color: selected ? colors.white : colors.black }]}>{subTitle}</Text>
  </View>;
};
