import React, { useState } from "react";
import AppContainer from "../../../core/AppContainer";
import { Image, Switch, Text, TextInput, View } from "react-native";
import UserContext from "../../../AuthContaxt";
import { AppStyles } from "../../../theme/styles";
import { Typography } from "../../../theme/Typography";
import colors from "../../../theme/colors";
import { AppButton } from "../../../core/AppButton";
import { wp } from "../../../AppStyle/Dimension";
import { images } from "../../../assets";
import { AppRadioButton } from "../../../core/AppRadioButton";
import { CheckOutView } from "../../../core/CheckOutView";

function PaymentMethod({ navigation }) {
  const state = React.useContext(UserContext);
  const [cashOnDelivery, CashOnDelivery] = useState(false);
  const [saveInfo, SaveInfo] = useState(false);
  const toggleSaveInfo = () => SaveInfo(previousState => !previousState);

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
            line={"#707070"}
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

          <View style={{
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
            <AppRadioButton selected={cashOnDelivery} onSelect={() => {
              CashOnDelivery(!cashOnDelivery);
            }} />
            <Image source={images.cash} style={{ width: 40, height: 40, marginStart: 10, marginEnd: 10 }} />
            <Text
              style={[Typography.LargeBold, { color: colors.black, marginStart: 5 }]}>{"Cash on Delivery"}</Text>
          </View>
          <Text style={[Typography.SmallRegular, { color: colors.red }]}>{"Name"}</Text>
          <TextInput placeholder={"Enter Name"} underlineColorAndroid={colors.grey4} />
          <Text style={[Typography.SmallRegular, { color: colors.red }]}>{"Mobile Number"}</Text>
          <TextInput placeholder={"Enter Name"} underlineColorAndroid={colors.grey4} />
          <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
            <Text style={[Typography.SmallBold, { color: colors.grey }]}>{"Save Information"}</Text>
            <Switch
              trackColor={{ false: colors.grey, true: colors.red }}
              thumbColor={colors.white}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSaveInfo}
              value={saveInfo}
            />
          </View>


          <AppButton label={"Next"} backgroundColor={colors.red} onPress={() => navigation.navigate("ConfirmOrder")}
                     styles={{ alignSelf: "center", position: "absolute", bottom: 30 }} height={45} />
        </View>
      </View>}>
    </AppContainer>
  );
}

export
{
  PaymentMethod,
};
