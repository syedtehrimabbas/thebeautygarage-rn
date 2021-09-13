import React from "react";
import AppContainer from "../../core/AppContainer";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import UserContext from "../../AuthContaxt";
import { wp } from "../../AppStyle/Dimension";
import { images } from "../../assets";
import { Typography } from "../../theme/Typography";
import colors from "../../theme/colors";

function Cart() {
  const state = React.useContext(UserContext);
  const [cartItems] = React.useState([{
    title: "Pixi Rose Tonic",
    size: "100 ML",
    price: 2400,
    currency: "PKR",
  }, { title: "Pixi Tonic", size: "150 ML", price: 2000, currency: "PKR" }]);
  return (<AppContainer
      state={state}
      children={<View style={{ background: "white" }}>
        <FlatList
          showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}
          data={cartItems}
          style={{ width: wp(90), alignSelf: "center" }}
          renderItem={({ index, item }) => <View
            style={{
              width: wp(90),
              marginTop: 10,
              borderRadius: 10,
              backgroundColor: "#FFEEEE",
              elevation: 1,
              padding: 10,
              flexDirection: "row",
            }}>
            <Image source={images.featured_product} style={{ width: 50, height: 50, resizeMode: "contain" }} />
            <View style={{ flexDirection: "column" }}>
              <Text style={[Typography.SmallBold, {
                marginTop: 5,
                width: 100,
              }]}>{item.title}</Text>

              <Text style={{
                marginTop: 5,
                paddingStart: 5,
                paddingEnd: 5,
                borderRadius: 10,
                elevation: 2,
                backgroundColor: colors.black,
                color: colors.white,
                width: 50,
              }}>{item.size}</Text>

              <Text style={[Typography.SmallRegular, {
                marginTop: 5,
                width: 100,
              }]}>{item.price + item.currency}</Text>
            </View>
            <View style={{ flexDirection: "row", height: 30 }}>
              <TouchableOpacity
                style={{ width: 20, height: 20, margin: 5, backgroundColor: colors.red, borderRadius: 5 }}>
                <Text style={[Typography.MediumBold, { color: "white", alignSelf: "center" }]}>{"+"}</Text>
              </TouchableOpacity>
              <Text style={[Typography.MediumBold, { alignSelf: "center" }]}>{"01"}</Text>
              <TouchableOpacity
                style={{ width: 20, height: 20, margin: 5, backgroundColor: colors.grey2, borderRadius: 5 }}>
                <Text style={[Typography.MediumBold, { color: "white", alignSelf: "center" }]}>{"-"}</Text>
              </TouchableOpacity>
            </View>

          </View>}
        />
      </View>}>
    </AppContainer>
  );
}

export { Cart };
