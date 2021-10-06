import React from "react";
import { View } from "react-native";
import { RenderHTML } from "react-native-render-html";

function ProductAbout({ html }) {
  return (<View>
    <RenderHTML source={{ html }} />
  </View>);
}

export { ProductAbout };
