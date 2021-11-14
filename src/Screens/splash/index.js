import React from "react";
import { Image, ImageBackground, View } from "react-native";
import colors from "../../theme/colors";
import { images } from "../../assets";

const Splash = () => {
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
    </View>
  );
};
export default Splash;
