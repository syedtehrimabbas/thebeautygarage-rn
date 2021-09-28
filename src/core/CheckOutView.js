import React from "react";
import { Text, View } from "react-native";
import { wp } from "../AppStyle/Dimension";
import { Typography } from "../theme/Typography";

export const CheckOutView = ({ fill, line, isLast, label }) => {
  return <View style={{ flexDirection: "column" }}>
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <View>
        <View style={{ borderRadius: 100, width: 10, height: 10, backgroundColor: fill }} />
      </View>
      {isLast ? null : <View style={{ width: wp(20), height: 1, backgroundColor: line }} />}
    </View>
    <Text style={[Typography.SmallMedium, { marginStart: -wp(5), marginTop: 5, color: fill }]}>{label}</Text>
  </View>;
};
