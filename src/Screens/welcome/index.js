import React from "react";
import { Image, ImageBackground, Text, TouchableOpacity, View } from "react-native";
import colors from "../../theme/colors";
import { images } from "../../assets";
import { AppButton } from "../../core/AppButton";
import { AppButtonBorder } from "../../core/AppButtonBorder";
import { Typography } from "../../theme/Typography";

const Welcome = ({ navigation }) => {
  return (
    <View style={{
      width: "100%",
      height: "100%",
      backgroundColor: colors.white,
    }}>
      <ImageBackground imageStyle={{ resizeMode: "cover" }}
                       style={{
                         width: "100%",
                         height: "80%",
                         position: "absolute",
                         top: 0,
                         right: 0,
                         left: 0,
                         alignItems: "center",
                       }} source={images.splash.bg}>
        <Image style={{ width: 220, height: 150, resizeMode: "contain", marginTop: 60 }} source={images.splash.logo} />
      </ImageBackground>
      <View style={{ position: "absolute", bottom: 0, lef: 0, right: 0, width: "100%" }}>
        <AppButton onPress={()=>navigation.navigate("LoginScreen")} label={"Sign in"} backgroundColor={colors.red}
                   styles={{ alignSelf: "center", marginBottom: 10 }} height={45} width={"50%"} />
        <AppButtonBorder onPress={()=>navigation.navigate("Signup")} label={"Sign up"} backgroundColor={colors.white} borderColor={colors.grey}
                         textColor={colors.black}
                         styles={{ alignSelf: "center", marginBottom: 10 }} height={45} width={"50%"} />
        <TouchableOpacity onPress={() => navigation.pop()}>
          <Text style={[Typography.SmallRegular, { alignSelf: "center", marginBottom: 10 }]}>{"Continue To App"}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Welcome;
