import React, { useState } from "react";
import AppContainer from "../../core/AppContainer";
import { Button, FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import UserContext from "../../AuthContaxt";
import { images } from "../../assets";
import { AppStyles } from "../../theme/styles";
import { hp, wp } from "../../AppStyle/Dimension";
import { Typography } from "../../theme/Typography";
import colors from "../../theme/colors";
import { AppButton } from "../../core/AppButton";
import { ProductAbout } from "./about";
import HttpService from "../../http";
import { ProductPrivacy } from "./privacy";
import { ProductReviews } from "./reviews";
import { isInCart } from "../../core/CommonMethods";

function MyTab({ title, onPress, selectedTab, tabNo }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={[Typography.MediumBold, {
        borderBottomWidth: 2,
        borderBottomColor: selectedTab === tabNo ? colors.red : "transparent",
        paddingBottom:10
      }]}>{title}</Text>
    </TouchableOpacity>
  );
}

function ProductDetails({ navigation, route }) {
  const state = React.useContext(UserContext);
  const [details, Details] = useState(null);
  const [reviews, Reviews] = useState(null);
  const [selectedTab, SelectedTab] = useState(1);
  const { cartProducts, CartProducts } = state;

  React.useEffect(() => {
    let { params } = route;
    let { id } = params;
    _pDetails(id);
    _pReviews(id);
  }, []);

  const _pDetails = (id) => {
    state.Loading(true);
    HttpService._productDetailsById(id, (status, res) => {
      console.log("res", res);
      let data = res.data;
      if (status && res.status) {
        Details(data);
      }
      state.Loading(false);
    });
  };

  const _pReviews = (id) => {
    state.Loading(true);
    HttpService._productReviewsById(id, (status, res) => {
      console.log("res", res);
      let data = res.data;
      if (status && res.status) {
        Reviews(data);
      }
      state.Loading(false);
    });
  };

  const selectTab = (tab) => {
    SelectedTab(tab);
  };

  const addCart = (item) => {
    let prevCarts = [...cartProducts];
    let index = prevCarts.findIndex(thisItem => thisItem.id === item.id);
    if (index === -1) prevCarts.push(item);
    else prevCarts.splice(index, 1);
    CartProducts(prevCarts);
  };

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
  return (details ? <AppContainer
      state={state}
      children={<View style={[AppStyles.centerItems, { backgroundColor: "white" }]}>
        <Image source={{ uri: HttpService.getAbsoluteImageUrl(details.photo) }}
               style={{ width: wp(50), height: hp(20), margin: 20, resizeMode: "contain" }} />
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
            <Text style={[Typography.MediumBold, { width: 200 }]}>{details.name}</Text>
            <View style={{ flexDirection: "row" }}>
              <Image style={{ height: 20, width: 20, alignSelf: "center" }} source={images.star} />
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
            }]}>{`${details.cprice} PKR`}</Text>
            <FlatList
              showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}
              data={[{ title: "50ml", selected: details.size === "50ml" }, { title: "100ml", selected:  details.size === "100ml" }, {
                title: "200ml",
                selected:  details.size === "200ml",
              }]}
              horizontal={true}
              renderItem={({ index, item }) => <SizeItem text={item.title} selected={item.selected} />}
            />

          </View>
          <View style={{
            marginTop: 10,
            justifyContent: "space-between",
            flexDirection: "row",
            borderBottomWidth: .5,
            borderBottomColor: colors.grey,
            marginBottom:5
          }}>
            <MyTab title={"About"} onPress={() => selectTab(1)} selectedTab={selectedTab} tabNo={1} />
            <MyTab title={"Return Policy"} onPress={() => selectTab(2)} selectedTab={selectedTab} tabNo={2} />
            <MyTab title={"Reviews"} onPress={() => selectTab(3)} selectedTab={selectedTab} tabNo={3} />

          </View>

          {selectedTab === 1 ? <ProductAbout html={details.description} /> : selectedTab === 2 ?
            <ProductPrivacy html={details.policy} /> : <ProductReviews />}
          <AppButton label={isInCart(cartProducts,details)?"Remove":"Add to cart"} backgroundColor={colors.red} onPress={() => addCart(details)}
                     styles={{ alignSelf: "center" ,position:'absolute',bottom:40}} height={45} />
        </View>
      </View>}>
    </AppContainer> : <AppContainer
      state={state}
      children={<View style={[AppStyles.centerItems]}>
      </View>}>
    </AppContainer>
  );
}

export { ProductDetails };
