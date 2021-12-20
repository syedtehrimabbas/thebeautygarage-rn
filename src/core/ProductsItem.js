
import React from "react";
import { Text,Image, View, TouchableOpacity } from "react-native";
import HttpService from "../http";
import colors from "../theme/colors";
import { Typography } from "../theme/Typography";
import { AppButton } from "./AppButton";
import { isInCart } from "./CommonMethods";

export const ProductItem = ({ navigation,cartProducts,item ,onAddCart}) => {
  return <TouchableOpacity
  onPress={() => navigation.navigate("ProductDetails", { id: item.id })}
  style={{
    width: 164,
    borderRadius: 20,
    backgroundColor: "#fff",
    elevation: 2,
    margin: 10,
    padding: 20,
  }}>
  <Image source={{ uri: HttpService.getAbsoluteImageUrl(item.photo) }}
         style={{ width: 80, height: 127, alignSelf: "center" }} />
  <Text numberOfLines={2} style={[Typography.SmallRegular, {
    textAlign: "center",
    marginTop: 5,
  }]}>{item.name}</Text>

  <Text style={[Typography.MediumBold, {
    textAlign: "center",
    color: "#FF0000",
    marginTop: 5,
  }]}>{`Rs. ${item.cprice}`}</Text>
  <AppButton label={isInCart(cartProducts, item) ? "Remove" : "Add to cart"}
             backgroundColor={colors.black} onPress={() => onAddCart(item)}
             styles={{ alignSelf: "center" }} />

</TouchableOpacity>;
};