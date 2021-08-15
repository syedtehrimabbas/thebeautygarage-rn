import React from "react";
import { Image } from "react-native";
import { images } from "../assets";


export const AppLogo = () => {
  return <Image
    source={images.logo}
    style={{ height: 151, width: 200, resizeMode: "contain" }} />;
};
