import React,{useEffect} from "react";
import AppContainer from "../../../core/AppContainer";
import { Text, View } from "react-native";
import UserContext from "../../../AuthContaxt";
import { AppStyles } from "../../../theme/styles";
import { Typography } from "../../../theme/Typography";
import colors from "../../../theme/colors";
import { AppButton } from "../../../core/AppButton";
import { CheckOutView } from "../../../core/CheckOutView";
import { DeliveryItem } from "./DeliveryItem";

function CheckoutDelivery({ navigation,route }) {
  const state = React.useContext(UserContext);

  useEffect(()=>{
    console.log("params",route.params)
  },[])
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
          <AppButton label={"Next"} backgroundColor={colors.red} onPress={() => navigation.navigate("PaymentMethod",{addressInfo:route.params.addressInfo})}
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
