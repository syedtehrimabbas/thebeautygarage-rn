import React from "react";
import { View } from "react-native";
import { RenderHTML } from "react-native-render-html";

function ProductPrivacy({ html }) {
  return (<View>
    <RenderHTML contentWidth={"100%"} source={{ html }} />
  </View>);
}

export { ProductPrivacy };
