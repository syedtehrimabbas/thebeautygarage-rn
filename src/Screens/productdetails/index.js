import React from "react";
import AppContainer from "../../core/AppContainer";
import { FlatList, Image, Text, View } from "react-native";
import UserContext from "../../AuthContaxt";
import { images } from "../../assets";
import { AppStyles } from "../../theme/styles";
import { hp, wp } from "../../AppStyle/Dimension";
import { Typography } from "../../theme/Typography";
import colors from "../../theme/colors";
import { AppButton } from "../../core/AppButton";
import { ProductAbout } from "./about";
import { ProductReviews } from "./reviews";
import { ProductPrivacy } from "./privacy";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const BottomTab = createBottomTabNavigator();

function MyTabs() {
  return (
    <BottomTab.Navigator backBehavior="none"
                         screenOptions={{
                           headerShown: false,
                         }}
                         shifting={false}
                         tabBarOptions={{
                           showLabel: false,
                           activeTintColor: colors.tabActiveColor,
                         }}>
      <BottomTab.Screen name="About" component={ProductAbout} />
      <BottomTab.Screen name="Return Privacy" component={ProductPrivacy} />
      <BottomTab.Screen name="Reviews" component={ProductReviews} />
    </BottomTab.Navigator>
  );
}

function ProductDetails({navigation}) {
  const state = React.useContext(UserContext);
  const SizeItem = ({ text, selected }) => {
    return <Text style={{
      margin: 5,
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
          borderTopRightRadius: 50,
          borderTopLeftRadius: 50,
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
            <Text style={[Typography.MediumBold, {
              color: colors.red,
              marginEnd: 10,
              alignSelf: "center",
            }]}>{"2400 PKR"}</Text>
            <FlatList
              showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}
              data={[{ title: "50ML", selected: false }, { title: "100ML", selected: true }, {
                title: "200ML",
                selected: false,
              }]}
              horizontal={true}
              renderItem={({ index, item }) => <SizeItem text={item.title} selected={item.selected} />}
            />

          </View>
          <ProductAbout />

          <AppButton label={"Add to cart"} backgroundColor={colors.red} onPress={() => navigation.navigate("Cart")}
                     styles={{ alignSelf: "center" }} height={45} />
        </View>
      </View>}>
    </AppContainer>
  );
}

export { ProductDetails };
