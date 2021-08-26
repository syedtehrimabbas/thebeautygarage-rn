import React from "react";
import AppContainer from "../../core/AppContainer";
import { Image, Text, View } from "react-native";
import UserContext from "../../AuthContaxt";
import { images } from "../../assets";
import { AppStyles } from "../../theme/styles";
import { hp, wp } from "../../AppStyle/Dimension";
import { Typography } from "../../theme/Typography";
import colors from "../../theme/colors";
import { AppButton } from "../../core/AppButton";

function ProductDetails() {
  const state = React.useContext(UserContext);
  const SizeItem = ({ text, selected }) => {
    return <Text style={{
      margin:5,
      paddingStart: 5,
      paddingEnd: 5,
      borderRadius: 20,
      elevation: 2,
      backgroundColor: selected ? colors.red : colors.white,
      color: selected ? colors.white : colors.black,
    }}>{text}</Text>;
  };
  return (<AppContainer
      state={state}
      children={<View style={[AppStyles.centerItems]}>
        <Image source={images.product} style={{ width: wp(50), height: hp(20), margin: 20, resizeMode: "contain" }} />
        <View style={{
          padding: 20,
          width: "100%",
          borderRadius: 50,
          elevation: 3,
          height: hp(70),
          backgroundColor: "white",
        }}>
          <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <Text style={Typography.MediumBold}>{"Pixi Rose Tonic"}</Text>
            <View style={{ flexDirection: "row" }}>
              <Image style={{ height: 20, width: 20 }} source={images.star} />
              <Text style={[Typography.MediumBold, {
                fontSize: 12,
                marginStart: 5, alignSelf: "center",
              }]}>{"3.5"}</Text>
            </View>
          </View>

          <View style={{ flexDirection: "row" }}>
            <Text style={[Typography.MediumBold, { color: colors.red,marginEnd:10,alignSelf:'center' }]}>{"2400 PKR"}</Text>
            <SizeItem text={"50ML"} selected={false}/>
            <SizeItem text={"100ML"} selected={true}/>
            <SizeItem text={"200ML"} selected={false}/>
          </View>
          <Text style={Typography.MediumBold}>{"About"}</Text>
          <Text>{"The number on the front of the pot represents the mg per kg of MGO (Methylglyoxal) and the related strength of Antimicrobial Activity, which is known to kill certain types of bacteria. The greater the number, the stronger the Antimicrobial Activity. MGO in Mānuka honey is naturally made in the hive from DHA which is present in the nectar of the Manuka Bush. Within the hive, DHA undergoes the Maillard reaction to naturally form MGO. 100% Genuine New Zealand Mānuka Honey. Independently tested to show it meets the New Zealand Government's definition of Mānuka honey. Honey should not be given to infants under 12 months old. Manuka Pharm Mānuka Honey purchased directly from us will have an expiry date with a minimum of 6 months remaining from the date of purchase. Please note that Manuka Pharm Honey is not for resale. Manuka Pharm honey pots are BPA free. In hot weather we recommend that our Manuka Pharm Honey is refrigerated to maintain a thick, golden consistency. If your honey does become runny then simply chill for a few hours."}</Text>
          <AppButton label={"Add to cart"} backgroundColor={colors.red} onPress={()=>alert("under dev")} styles={{alignSelf:'center'}} height={45}/>
        </View>
      </View>}>
    </AppContainer>
  );
}

export { ProductDetails };
