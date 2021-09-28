import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import UserContext from "../../../AuthContaxt";
import { AppStyles } from "../../../theme/styles";
import { wp } from "../../../AppStyle/Dimension";
import { images } from "../../../assets";
import { Typography } from "../../../theme/Typography";
import colors from "../../../theme/colors";

function CheckoutSuccess({ navigation }) {
  const state = React.useContext(UserContext);

  return (<View
      style={[AppStyles.centerItems, { paddingTop: 10, backgroundColor: "#009E68", height: "100%", width: "100%" }]}>
      <Image style={{width:wp(12),height:wp(12)}} source={images.ic_checked}/>
      <Text style={[Typography.LargeBold,{color:colors.white,marginTop:30}]}>{"Thanks!"}</Text>
      <Text style={[Typography.MediumBold,{color:colors.white,marginTop:15}]}>{"For Completing Payment!"}</Text>
      <Text style={[Typography.MediumRegular,{color:colors.white,marginTop:5,textAlign:'center'}]}>{"Your order has been processed\nand will be deliver soon."}</Text>
      <TouchableOpacity
        style={[{
          borderRadius:  50,
          width: '30%',
          borderWidth:1,
          borderColor:colors.white,
          justifyContent: "center",
          alignItems: "center",
          height: 35,
          marginTop: 20,
          alignSelf: "center",
        }]}
      >
        <Text style={[Typography.MediumRegular, {
          color:  colors.white,
        }]}>{"Back to Home"}</Text>
      </TouchableOpacity>
  </View>
  );
}

export
{
  CheckoutSuccess,
};
