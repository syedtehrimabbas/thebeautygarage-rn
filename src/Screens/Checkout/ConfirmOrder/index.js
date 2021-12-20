import React, { useState, useEffect } from "react";
import AppContainer from "../../../core/AppContainer";
import { FlatList, Image, Text, View } from "react-native";
import UserContext from "../../../AuthContaxt";
import { AppStyles } from "../../../theme/styles";
import { Typography } from "../../../theme/Typography";
import colors from "../../../theme/colors";
import { AppButton } from "../../../core/AppButton";
import { CheckOutView } from "../../../core/CheckOutView";
import { hp, wp } from "../../../AppStyle/Dimension";
import { CartItem } from "../../Cart/CartItem";
import { DeliveryItem } from "../Delivery/DeliveryItem";
import { images } from "../../../assets";

function ConfirmOrder({ navigation, route }) {
  const state = React.useContext(UserContext);
  const [cashOnDelivery, CashOnDelivery] = useState(false);
  const { cartProducts, CartProducts, login } = state;

  useEffect(() => {
    console.log("params", route.params)
    CashOnDelivery(route.params.cashOnDelivery)
  }, [])

  return (<AppContainer
    state={state}
    children={<View style={[AppStyles.centerItems, { paddingTop: 10 }]}>
      <Text style={Typography.ALargeBold}>{"Payment"}</Text>
      <View style={{ flexDirection: "row", marginTop: 10, marginBottom: 10 }}>
        <CheckOutView
          fill={colors.red}
          line={colors.red}
          isLast={false}
          label={"Address"}
        />

        <CheckOutView
          fill={colors.red}
          line={colors.red}
          isLast={false}
          label={"Delivery"}
        />

        <CheckOutView
          fill={colors.red}
          line={colors.red}
          isLast={false}
          label={"Payment"}
        />

        <CheckOutView
          fill={colors.red}
          line={colors.red}
          isLast={true}
          label={"Confirm"}
        />

      </View>
      <View style={{
        padding: 20,
        width: "100%",
        height: "90%",
        borderTopRightRadius: 50,
        borderTopLeftRadius: 50,
        elevation: 3,
        backgroundColor: "white",
      }}>

        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
          <Text
            style={[Typography.MediumBold, { color: colors.black }]}>{"In you cart "}</Text>
          <Text
            style={[Typography.MediumBold, { color: colors.black }]}>{cartProducts.length}</Text>
        </View>
        <View style={{ height: hp(30) }}>
          <FlatList
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            data={cartProducts}
            style={{ width: wp(90), alignSelf: "center" }}
            renderItem={({ item }) => <CartItem item={item} quantityViewShow={false} />}
          />
        </View>

        <Text
          style={[Typography.MediumBold, { color: colors.black, marginTop: 5 }]}>{"Delivery"}</Text>
        <DeliveryItem selected={false} title="Standard - PKR 0.00" subTitle="1-3 working days" />

        <Text
          style={[Typography.MediumBold, { color: colors.black, marginTop: 5 }]}>{"Payment"}</Text>
        {cashOnDelivery ? <View style={{
          flexDirection: "row",
          width: wp(90),
          height: 60,
          marginTop: 10,
          borderRadius: 10,
          backgroundColor: colors.white,
          alignSelf: "center",
          alignItems: "center",
          padding: 10,
          borderWidth: 1,
          borderColor: colors.grey,
          marginBottom: 10,
        }}>
          <Image source={images.cash} style={{ width: 40, height: 40, marginStart: 10, marginEnd: 10 }} />
          <Text
            style={[Typography.LargeBold, { color: colors.black, marginStart: 5 }]}>{"Cash on Delivery"}</Text>
        </View> : null}
        <AppButton label={"Confirm order"} backgroundColor={colors.red} onPress={() => navigation.navigate("CheckoutSuccess")}
          styles={{ alignSelf: "center", position: "absolute", bottom: 30 }} height={45} />
      </View>
    </View>}>
  </AppContainer>
  );
}

export {
  ConfirmOrder,
};
