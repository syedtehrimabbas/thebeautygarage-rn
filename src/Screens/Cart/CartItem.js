import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { wp } from "../../AppStyle/Dimension";
import { images } from "../../assets";
import { Typography } from "../../theme/Typography";
import colors from "../../theme/colors";
import HttpService from "../../http";

export const CartItem = ({ item, quantityViewShow, onPlus, onMinus, removeFromCart, canDelete }) => {
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

      {canDelete && canDelete ? <TouchableOpacity onPress={removeFromCart}>
        <Image source={images.ic_delete}
          style={{ width: 20, height: 20, resizeMode: "contain" }} />
      </TouchableOpacity> : null}

      <Image source={{ uri: HttpService.getAbsoluteImageUrl(item.photo) }}style={{ width: 50, height: 50, resizeMode: "contain",marginStart:10,marginEnd:10 ,borderRadius:25}} />

      <View style={{ flexDirection: "column" }}>
        <Text style={[Typography.SmallBold, {
          marginTop: 5,
          width: canDelete ? 150 : 250,
        }]}>{item.name}</Text>

        {item.size && item.size !== null ? <Text style={{
          marginTop: 5,
          paddingStart: 5,
          paddingEnd: 5,
          borderRadius: 10,
          elevation: 2,
          backgroundColor: colors.black,
          color: colors.white,
          width: 40,
          fontSize: 10,
        }}>{item.size}</Text> : null}

        <Text style={[Typography.SmallRegular, {
          marginTop: 5,
          width: 100,
        }]}>{item.cprice * item.quantity + " PKR"}</Text>
      </View>

    </View>
    {quantityViewShow ? <View style={{ flexDirection: "row", height: 30, alignSelf: "center" }}>
      <TouchableOpacity onPress={onPlus}
        style={{ width: 20, height: 20, margin: 5, backgroundColor: colors.red, borderRadius: 5 }}>
        <Text style={[Typography.MediumBold, { color: "white", alignSelf: "center" }]}>{"+"}</Text>
      </TouchableOpacity>
      <Text style={[Typography.MediumBold, { alignSelf: "center" }]}>{item.quantity}</Text>
      <TouchableOpacity onPress={() => {
        if (item.quantity > 1) onMinus();
      }}
        style={{
          width: 20,
          height: 20,
          margin: 5,
          backgroundColor: item.quantity > 1 ? colors.red : colors.grey2,
          borderRadius: 5,
        }}>
        <Text style={[Typography.MediumBold, { color: "white", alignSelf: "center" }]}>{"-"}</Text>
      </TouchableOpacity>
    </View> : null}


  </View>;
};
