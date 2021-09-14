import React from "react";
import AppContainer from "../../../core/AppContainer";
import { Text, TextInput, View } from "react-native";
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

function CheckoutAddress({ navigation }) {
  const state = React.useContext(UserContext);

  return (<AppContainer
      state={state}
      children={<View style={[AppStyles.centerItems, { paddingTop: 10 }]}>
        <Text style={Typography.ALargeBold}>{"Address"}</Text>
        <View style={{ flexDirection: "row", marginTop: 10, marginBottom: 10 }}>
          <CheckOutView
            fill={colors.red}
            line={"#707070"}
            isLast={false}
            label={"Address"}
          />

          <CheckOutView
            fill={colors.grey}
            line={colors.grey}
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
          <Text style={[Typography.SmallRegular, { color: colors.red }]}>{"Name"}</Text>
          <TextInput placeholder={"Enter Name"} underlineColorAndroid={colors.grey4} />

          <Text style={[Typography.SmallRegular, { color: colors.red }]}>{"Email"}</Text>
          <TextInput placeholder={"Enter Email"} underlineColorAndroid={colors.grey4} />

          <Text style={[Typography.SmallRegular, { color: colors.red }]}>{"City"}</Text>
          <TextInput placeholder={"Enter City"} underlineColorAndroid={colors.grey4} />

          <Text style={[Typography.SmallRegular, { color: colors.red }]}>{"Zip Code"}</Text>
          <TextInput placeholder={"Enter Zipcode"} underlineColorAndroid={colors.grey4} />

          <Text style={[Typography.SmallRegular, { color: colors.red }]}>{"Address"}</Text>
          <TextInput placeholder={"Enter Address"} underlineColorAndroid={colors.grey4} />

          <Text style={[Typography.SmallRegular, { color: colors.red }]}>{"Phone Number"}</Text>
          <TextInput placeholder={"Enter Phone Number"} underlineColorAndroid={colors.grey4} />

          <AppButton label={"Next"} backgroundColor={colors.red} onPress={() => navigation.navigate("CheckoutDelivery")}
                     styles={{ alignSelf: "center", position: "absolute", bottom: 30 }} height={45} />
        </View>
      </View>}>
    </AppContainer>
  );
}

export
{
  CheckoutAddress,
};
