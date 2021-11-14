import React, { useState } from "react";
import AppContainer from "../../core/AppContainer";
import { FlatList, Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import UserContext from "../../AuthContaxt";
import { images } from "../../assets";
import { Typography } from "../../theme/Typography";
import HttpService from "../../http";
import colors from "../../theme/colors";
import { wp } from "../../AppStyle/Dimension";

function Track({ navigation }) {
  const state = React.useContext(UserContext);
  const { Loading } = state;
  React.useLayoutEffect(() => {
  }, [navigation]);


  return (<AppContainer
      state={state}
      children={<View style={{alignItems:'center'}}>
        <Text style={[Typography.SmallMedium, {
          backgroundColor: "#444444",
          padding: 5,
          width:'100%',
          color: colors.white,
          textAlign: "center",
        }]}>{"Lorem ipsum dolor sit amet, consetetur"}</Text>

        <Text style={[Typography.MediumBold,{marginTop:20}]}>{"Track Your Shipment"}</Text>

        <View style={{
          flexDirection: "row",
          backgroundColor: colors.white,
          borderRadius: 100,
          height: 45,
          width: wp(90),
          paddingStart: 10,
          alignItems: "center",
          marginTop: 20,
          justifyContent: "space-between",
          borderWidth:1,
          borderColor:colors.grey3
        }}>
          <TextInput style={[Typography.SmallMedium, { color: colors.grey2 }]}
                     placeholder={"Enter Tracking Number"}>
          </TextInput>
          <TouchableOpacity style={{
            backgroundColor: colors.red,
            borderRadius: 100,
            height: 45,
            width: wp(20),
            alignItems: "center",
            justifyContent: "center",
          }}>
            <Text style={[Typography.SmallMedium, { color: colors.white }]}>{"Track"}</Text>
          </TouchableOpacity>
        </View>
      </View>}>
    </AppContainer>
  );
}

export { Track };
