import React, { useState } from "react";
import AppContainer from "../../core/AppContainer";
import {
  FlatList,
  Image,
  ImageBackground,
  Linking,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import UserContext from "../../AuthContaxt";
import Swiper from "react-native-swiper";
import { images } from "../../assets";
import { Typography } from "../../theme/Typography";
import colors from "../../theme/colors";
import { AppButton } from "../../core/AppButton";
import { wp } from "../../AppStyle/Dimension";
import HttpService from "../../http";
import { PRODUCT_TYPE } from "../../constants/Constants";
import { isInCart } from "../../core/CommonMethods";
import { OPEN_CART } from "../../core/EVENTS";
import { ProductItem } from "../../core/ProductsItem";

const SliderComponent = ({ item }) => {
  let image = HttpService.getAbsoluteImageUrl(item.photo);

  return <ImageBackground source={{ uri: image }} resizeMode="cover"
    style={{ width: "100%", resizeMode: "stretch", alignSelf: "center", height: 200 }}>
    <View style={{ position: "absolute", bottom: 20, left: 30 }}>
      <Text style={[Typography.LargeBold, {
        color: colors.red.title_color,
      }]}>{item.title}</Text>
      <Text
        style={[Typography.SmallBold, { color: item.desc_color, marginBottom: 10 }]}>{item.description}</Text>
      <TouchableOpacity onPress={() => {
        Linking.openURL(item.link);
      }} style={{
        paddingStart: 10,
        paddingEnd: 10,
        paddingBottom: 5,
        paddingTop: 5,
        borderColor: colors.red,
        backgroundColor: colors.red,
        borderWidth: 2,
        borderRadius: 20,
        width: 100,
        alignItems: "center",
      }}>
        <Text style={[Typography.SmallBold, { color: colors.white }]}>{"Shop now"}</Text>
      </TouchableOpacity>

    </View>

  </ImageBackground>;
};

function Home({ navigation }) {
  const state = React.useContext(UserContext);
  const [productsTop, ProductsTop] = useState([]);
  const [productsBestSelling, ProductsBestSelling] = useState([]);
  const [productsFeatured, ProductsFeatured] = useState([]);
  const [homeSliders, HomeSliders] = useState([]);
  const [categories, Categories] = useState([]);
  const [selectedPosition, SelectedPosition] = useState([]);
  const { cartProducts, CartProducts } = state;
  React.useLayoutEffect(() => {
    _productByType(PRODUCT_TYPE.top);
    _productByType(PRODUCT_TYPE.bestSeller);
    _productByType(PRODUCT_TYPE.featured);
    _homeSliders();
    _allCategories();
  }, [navigation]);


  const _productByType = (type) => {
    state.Loading(true);
    HttpService._productByType(type, (status, res) => {

      let data = res.data;
      if (status && res.status) {
        switch (type) {
          case PRODUCT_TYPE.top: {
            ProductsTop(res.data);
          }
            break;
          case PRODUCT_TYPE.bestSeller: {
            ProductsBestSelling(data);
          }
            break;
          case PRODUCT_TYPE.featured: {
            ProductsFeatured(data);
          }
            break;
        }
      }
      state.Loading(false);
    });
  };

  const _homeSliders = () => {
    state.Loading(true);
    HttpService._homeSliders((status, res) => {
      let data = res.data;
      if (status && res.status) {
        HomeSliders(data);
      }
      state.Loading(false);
    });
  };

  const _allCategories = () => {
    state.Loading(true);
    HttpService._allCategories((status, res) => {
      let data = res.data;
      if (status && res.status) {
        Categories(data);
      }
      state.Loading(false);
    });
  };

  const addCart = (item) => {
    let prevCarts = [...cartProducts];
    let index = prevCarts.indexOf(item);
    if (index === -1) {
      item.quantity = 1;
      prevCarts.push(item);
    } else prevCarts.splice(index, 1);
    CartProducts(prevCarts);
  };

  return (<AppContainer
    state={state}
    children={<View>
      {/* <Text style={[Typography.SmallMedium, {
        backgroundColor: "#444444",
        padding: 5,
        color: colors.white,
        textAlign: "center",
      }]}>{"Get 40% flat discount on PIXI Products"}</Text> */}
      <ScrollView>
        <View style={{ marginBottom: 30 }}>

          <Swiper
            height={200}
            showsButtons={false}
            style={styles.wrapper}
          >
            {homeSliders.map((item) => {
              return <SliderComponent item={item} />;
            })}
          </Swiper>

          <Text style={[Typography.MediumBold, {
            textAlign: "center",
            margin: 20,
          }]}>{"Categories".toLocaleUpperCase()}</Text>

          <View style={{ height: 50 }}>
            <FlatList
              showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}
              data={categories}
              horizontal={true}
              renderItem={({ index, item }) => <TouchableOpacity onPress={() => {
                navigation.navigate("AllProducts", { id: item.id })
                SelectedPosition(index)
              }}>
                <Text style={{
                  color: selectedPosition === index ? colors.white : colors.black,
                  margin: 5,
                  backgroundColor: selectedPosition === index ? colors.red : colors.grey3,
                  borderTopRightRadius: 17,
                  borderTopLeftRadius: 17,
                  borderBottomLeftRadius: 17,
                  borderBottomRightRadius: 0,
                  height: 30,
                  paddingStart: 10,
                  paddingEnd: 10,
                  paddingTop: 5,
                  paddingBottom: 5,
                  textAlign: "center",
                  textAlignVertical: "center",
                }}>{item.cat_name}</Text>
              </TouchableOpacity>}
            />
          </View>

          <Text style={[Typography.MediumBold, { textAlign: "center", margin: 20 }]}>{"Best Sellers"}</Text>
          <FlatList
            showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}
            data={productsBestSelling}
            horizontal={true}
            renderItem={({ index, item }) => <ProductItem navigation={navigation} cartProducts={cartProducts} item={item} onAddCart={() => addCart(item)} />}
          />

          {/* <AppButton
            label={"Load more"}
            backgroundColor={colors.grey3}
            textColor={colors.black}
            width={wp(25)}
            onPress={() => alert("under dev")}
            styles={{ alignSelf: "center" }}
            borderRadius={2} /> */}

          <View>
            <Image
              source={images.slider}
              style={{ width: "100%", resizeMode: "contain", alignSelf: "center" }} />
          </View>

          <Text style={[Typography.MediumBold, { textAlign: "center", margin: 20 }]}>{"Featured Products"}</Text>

          <FlatList
            showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}
            data={productsFeatured}
            horizontal={true}
            renderItem={({ index, item }) => <ProductItem navigation={navigation} cartProducts={cartProducts} item={item} onAddCart={() => addCart(item)} />}
          />

          {/* <AppButton
            label={"Load more"}
            backgroundColor={colors.grey3}
            textColor={colors.black}
            width={wp(25)}
            onPress={() => alert("under dev")}
            styles={{ alignSelf: "center" }}
            borderRadius={2} /> */}

          <Text style={[Typography.MediumBold, { textAlign: "center", margin: 20 }]}>{"Featured Brands"}</Text>


          <FlatList
            showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}
            data={["Pixi", "Clinique", "Pixi", "Clinique", "Pixi", "Clinique", "Pixi", "Clinique"]}
            horizontal={true}
            renderItem={({ index, item }) => <View
              style={{
                width: 150,
                borderRadius: 20,
                backgroundColor: "#fff",
                elevation: 2,
                margin: 10,
                padding: 20,
              }}>
              <Image source={images.feature_bran_dummy} style={{ width: 80, height: 127, alignSelf: "center" }} />
              <Text style={[Typography.MediumBold, {
                textAlign: "center",
                marginTop: 5,
              }]}>{item}</Text>

            </View>}
          />


        </View>
      </ScrollView>
    </View>}>


  </AppContainer>
  );
}

export { Home };

const styles = StyleSheet.create({
  wrapper:
  {
    alignSelf: "center",
    position: "absolute",
    top: 0,
  },
})
  ;
