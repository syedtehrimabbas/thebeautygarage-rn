import React from "react";
import AppContainer from "../../../core/AppContainer";
import { Text, View } from "react-native";
import UserContext from "../../../AuthContaxt";
import { AppStyles } from "../../../theme/styles";
import { Typography } from "../../../theme/Typography";
import colors from "../../../theme/colors";
import { AppButton } from "../../../core/AppButton";
import { wp } from "../../../AppStyle/Dimension";

const CheckOutView = ({ fill, line, isLast, label }) => {
  return <View style={{ flexDirection: "column" }}>
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <View>
        <View style={{ borderRadius: 100, width: 10, height: 10, backgroundColor: fill }} />
      </View>
      {isLast ? null : <View style={{ width: wp(20), height: 1, backgroundColor: line }} />}
    </View>
    <Text style={[Typography.SmallMedium, { marginStart: -wp(5), marginTop: 5, color: fill }]}>{label}</Text>
  </View>;
};

const DeliveryItem = ({ selected, title, subTitle }) => {
  return <View style={{
    flexDirection: "column",
    width: wp(90),
    height: 100,
    marginTop: 10,
    borderRadius: 10,
    backgroundColor: selected ? colors.red : colors.white,
    alignSelf: "center",
    justifyContent: "center",
    elevation: .7,
    padding: 10,
  }}>
    <Text
      style={[Typography.LargeBold, { color: selected ? colors.white : colors.grey }]}>{title}</Text>
    <Text
      style={[Typography.MediumRegular, { color: selected ? colors.white : colors.grey }]}>{subTitle}</Text>
  </View>;
};

function CheckoutDelivery({ navigation }) {
  const state = React.useContext(UserContext);

  return (<AppContainer
      state={state}
      children={<View style={[AppStyles.centerItems, { paddingTop: 10 }]}>
        <Text style={Typography.ALargeBold}>{"Delivery"}</Text>
        <View style={{ flexDirection: "row", marginTop: 10, marginBottom: 10 }}>
          <CheckOutView
            fill={colors.red}
            line={colors.red}
            isLast={false}
            label={"Address"}
          />

          <CheckOutView
            fill={colors.red}
            line={"#707070"}
            isLast={false}
            label={"Delivery"}
          />

          <CheckOutView
            fill={colors.grey}
            line={colors.grey}
            isLast={false}
            label={"Payment"}
          />

          <CheckOutView
            fill={colors.grey}
            line={colors.grey}
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
          <DeliveryItem selected={false} title="Free Delivery - PKR 0.00" subTitle="5-6 working days delivery" />
          <DeliveryItem selected={true} title="Standard - PKR 0.00" subTitle="1-3 working days" />
          <DeliveryItem selected={false} title="Express - PKR 0.00" subTitle="Next Day Delivery Within City" />
          <AppButton label={"Next"} backgroundColor={colors.red} onPress={() => navigation.navigate("Cart")}
                     styles={{ alignSelf: "center", position: "absolute", bottom: 30 }} height={45} />
        </View>
      </View>}>
    </AppContainer>
  );
}

export
{
  CheckoutDelivery,
};
