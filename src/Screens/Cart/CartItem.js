import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { wp } from "../../AppStyle/Dimension";
import { images } from "../../assets";
import { Typography } from "../../theme/Typography";
import colors from "../../theme/colors";

export const CartItem = ({ item, quantityViewShow }) => {
  return <View
    style={{
      width: wp(90),
      marginTop: 10,
      borderRadius: 10,
      backgroundColor: "#FFEEEE",
      elevation: 1,
      padding: 10,
      flexDirection: "row",
      justifyContent: "space-between",
    }}>
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <TouchableOpacity>
        <Image source={images.ic_delete}
               style={{ width: 20, height: 20, resizeMode: "contain" }} />
      </TouchableOpacity>

      <Image source={images.featured_product} style={{ width: 50, height: 50, resizeMode: "contain" }} />

      <View style={{ flexDirection: "column" }}>
        <Text style={[Typography.SmallBold, {
          marginTop: 5,
          width: 100,
        }]}>{item.title}</Text>

        <Text style={{
          marginTop: 5,
          paddingStart: 5,
          paddingEnd: 5,
          borderRadius: 10,
          elevation: 2,
          backgroundColor: colors.black,
          color: colors.white,
          width: 40,
          fontSize: 10,
        }}>{item.size}</Text>

        <Text style={[Typography.SmallRegular, {
          marginTop: 5,
          width: 100,
        }]}>{item.price + item.currency}</Text>
      </View>

    </View>
    {quantityViewShow ? <View style={{ flexDirection: "row", height: 30, alignSelf: "center" }}>
      <TouchableOpacity
        style={{ width: 20, height: 20, margin: 5, backgroundColor: colors.red, borderRadius: 5 }}>
        <Text style={[Typography.MediumBold, { color: "white", alignSelf: "center" }]}>{"+"}</Text>
      </TouchableOpacity>
      <Text style={[Typography.MediumBold, { alignSelf: "center" }]}>{"01"}</Text>
      <TouchableOpacity
        style={{ width: 20, height: 20, margin: 5, backgroundColor: colors.grey2, borderRadius: 5 }}>
        <Text style={[Typography.MediumBold, { color: "white", alignSelf: "center" }]}>{"-"}</Text>
      </TouchableOpacity>
    </View> : null}


  </View>;
};
