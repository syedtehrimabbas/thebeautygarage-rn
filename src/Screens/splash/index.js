import React from "react";
import { Text, View } from "react-native";
import colors from "../../theme/colors";
import { Typography } from "../../theme/Typography";

const Splash = () => {
  return (
    <View style={{
      width: "100%",
      height: "100%",
      backgroundColor: colors.red,
      justifyContent: "center",
      alignItems: "center",
    }}>
      <Text style={[Typography.ALargeBold,{color:colors.white}]}>{"The Beauty Garage"}</Text>
    </View>
  );
};
export default Splash;
