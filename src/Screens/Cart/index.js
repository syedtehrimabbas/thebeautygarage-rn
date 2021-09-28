import React from "react";
import AppContainer from "../../core/AppContainer";
import { FlatList, Image, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import UserContext from "../../AuthContaxt";
import { hp, wp } from "../../AppStyle/Dimension";
import { images } from "../../assets";
import { Typography } from "../../theme/Typography";
import colors from "../../theme/colors";
import { AppButton } from "../../core/AppButton";
import { CartItem } from "./CartItem";

function Cart({ navigation }) {
  const state = React.useContext(UserContext);
  const [subTotal, SubTotal] = React.useState(7200);
  const [tax, Tax] = React.useState(450);
  const [fee, Fee] = React.useState(350);
  const totalPrice = React.useState(subTotal + tax + fee);

  const [cartItems] = React.useState([
    { title: "Pixi Rose Tonic", size: "100 ML", price: 2400, currency: "PKR" },
    { title: "Pixi Tonic", size: "150 ML", price: 2000, currency: "PKR" },
    { title: "Pixi Tonic", size: "150 ML", price: 2000, currency: "PKR" },
    { title: "Pixi Tonic", size: "150 ML", price: 2000, currency: "PKR" },
    { title: "Pixi Tonic", size: "150 ML", price: 2000, currency: "PKR" },
    { title: "Pixi Tonic", size: "150 ML", price: 2000, currency: "PKR" },
    { title: "Pixi Tonic", size: "150 ML", price: 2000, currency: "PKR" },
    { title: "Pixi Tonic", size: "150 ML", price: 2000, currency: "PKR" },
  ]);
  return (<AppContainer
      state={state}
      children={<View style={{ background: "white" }}>
        <FlatList
          showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}
          data={cartItems}
          style={{ width: wp(90), height: hp(40), alignSelf: "center" }}
          renderItem={({ index, item }) => <CartItem item={item} quantityViewShow={true}/>}
        />

        <View style={{
          flexDirection: "column", width: wp(90),
          marginTop: 10,
          borderRadius: 10,
          backgroundColor: colors.white,
          alignSelf: "center",
          elevation: 1,
          padding: 10,
          justifyContent: "space-between",
        }}>
          <Text style={[Typography.MediumBold]}>{"Have a coupon?"}</Text>
          <Text style={[Typography.SmallMedium, {
            color: colors.grey2,
            marginTop: 5,
          }]}>{"Enter your coupon code here & get awesome discounts!"}</Text>
          <View style={{
            flexDirection: "row",
            backgroundColor: colors.grey3,
            borderRadius: 100,
            height: 35,
            width: wp(80),
            paddingStart: 10,
            alignItems: "center",
            marginTop: 5,
            justifyContent: "space-between",
          }}>
            <TextInput style={[Typography.SmallMedium, { color: colors.grey2 }]}
                       placeholder={"Enter Coupon Code"}>
            </TextInput>
            <TouchableOpacity style={{
              backgroundColor: colors.red,
              borderRadius: 100,
              height: 35,
              width: wp(20),
              alignItems: "center",
              justifyContent: "center",
            }}>
              <Text style={[Typography.SmallMedium, { color: colors.white }]}>{"Apply"}</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{
          flexDirection: "column",
          width: wp(90),
          marginTop: 10,
          marginBottom: 10,
          borderRadius: 10,
          backgroundColor: colors.white,
          alignSelf: "center",
          elevation: 1,
          padding: 10,
        }}>
          <View style={{ flexDirection: "row", alignItems: "center", marginTop: 5, justifyContent: "space-between" }}>
            <Text style={[Typography.MediumRegular, { color: colors.grey2 }]}>{"Subtotal"}</Text>
            <Text style={[Typography.MediumBold]}>{subTotal}</Text>
          </View>

          <View style={{ flexDirection: "row", alignItems: "center", marginTop: 5, justifyContent: "space-between" }}>
            <Text style={[Typography.MediumRegular, { color: colors.grey2 }]}>{"Tax"}</Text>
            <Text style={[Typography.MediumBold]}>{tax}</Text>
          </View>

          <View style={{
            flexDirection: "row", alignItems: "center", marginTop: 5, justifyContent: "space-between",
            borderBottomWidth: 0.5,
            borderBottomColor: colors.grey3,
            paddingBottom: 10,
            marginBottom: 10,
          }}>
            <Text style={[Typography.MediumRegular, { color: colors.grey2 }]}>{"Shipping Fee"}</Text>
            <Text style={[Typography.MediumBold]}>{fee}</Text>
          </View>

          <View style={{ flexDirection: "row", alignItems: "center", marginTop: 5, justifyContent: "space-between" }}>
            <Text style={[Typography.MediumRegular, { color: colors.grey2 }]}>{"Total Price"}</Text>
            <Text style={[Typography.MediumBold]}>{totalPrice}</Text>
          </View>

        </View>
        <AppButton label={"Check Out"} backgroundColor={colors.red}
                   onPress={() => navigation.navigate("CheckoutAddress")}
                   styles={{ alignSelf: "center", marginBottom: 20 }} height={45} />
      </View>}>
    </AppContainer>
  );
}

export { Cart };
