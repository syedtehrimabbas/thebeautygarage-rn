import React, { useState } from "react";
import AppContainer from "../../core/AppContainer";
import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import UserContext from "../../AuthContaxt";
import Swiper from "react-native-swiper";
import { images } from "../../assets";
import { Typography } from "../../theme/Typography";
import colors from "../../theme/colors";
import { AppButton } from "../../core/AppButton";
import { wp } from "../../AppStyle/Dimension";
import HttpService from "../../http";
import { PRODUCT_TYPE } from "../../constants/Constants";

const SliderComponent = () => {
  return <View>
    <Image
      source={images.slider}
      style={{ width: "100%", resizeMode: "contain", alignSelf: "center" }} />
    {/*<Text style={[Typography.Normal, { marginStart: 20, fontSize: 22 }]}>{"Deliver work &\n" +*/}
    {/*"Earn More"}</Text>*/}
    {/*<Text style={[Typography.Normal, { marginStart: 20 }]}>{"Start earning by joining our platform"}</Text>*/}
  </View>;
};

function Home({ navigation }) {
  const state = React.useContext(UserContext);
  const [productsTop, ProductsTop] = useState([]);
  const [productsBestSelling, ProductsBestSelling] = useState([]);
  const [productsFeatured, ProductsFeatured] = useState([]);
  const [homeSliders, HomeSliders] = useState([]);
  const [categories, Categories] = useState([]);
  React.useEffect(() => {

    _productByType(PRODUCT_TYPE.top);
    _productByType(PRODUCT_TYPE.bestSeller);
    _productByType(PRODUCT_TYPE.featured);
    _homeSliders();
    _allCategories();

  }, []);

  const _productByType = (type) => {
    state.Loading(true);
    HttpService._productByType(type, (status, res) => {
      console.log("res", res);
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
      console.log("res", res);
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
        console.log("res", res);
        let data = res.data;
        if (status && res.status) {
          Categories(data);
        }
        state.Loading(false);
      });
    }
  ;

  return (<AppContainer
      state={state}
      children={<View>
        <Text style={[Typography.SmallMedium, {
          backgroundColor: "#444444",
          padding: 5,
          color: colors.white,
          textAlign: "center",
        }]}>{"Get 40% flat discount on PIXI Products"}</Text>
        <ScrollView>
          <View style={{ marginBottom: 30 }}>
            <View style={{ height: 150 }}>
              <Swiper
                height={150}
                showsButtons={false}
                style={styles.wrapper}
                containerStyle={{ flex: 1 }}
              >
                <SliderComponent />
                <SliderComponent />
              </Swiper>
            </View>

            <Text style={[Typography.MediumBold, {
              textAlign: "center",
              margin: 20,
            }]}>{"Categories".toLocaleUpperCase()}</Text>

            <View style={{ height: 50 }}>
              <FlatList
                showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}
                data={["Skin Care", "Eye Care", "Hair Care", "Hand and foot care", "Kits $ gifts", "Supplements", "Toners", "Baby Care"]}
                horizontal={true}
                renderItem={({ index, item }) => <Text style={{
                  color: colors.black,
                  margin: 5,
                  elevation: 1,
                  backgroundColor: colors.grey3,
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
                }}>{item}</Text>}
              />
            </View>

            <Text style={[Typography.MediumBold, { textAlign: "center", margin: 20 }]}>{"Best Sellers"}</Text>
            <FlatList
              showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}
              data={["Skin Care", "Eye Care", "Hair Care", "Hand and foot care", "Kits $ gifts", "Supplements", "Toners", "Baby Care"]}
              horizontal={true}
              renderItem={({ index, item }) => <TouchableOpacity onPress={() => navigation.navigate("ProductDetails")}
                                                                 activeOpacity={0.7} style={{
                width: 164,
                borderRadius: 20,
                backgroundColor: "#fff",
                elevation: 2,
                margin: 10,
                padding: 20,
              }}>
                <View>
                  <Image source={images.product} style={{ width: 80, height: 127, alignSelf: "center" }} />
                  <Text style={[Typography.SmallRegular, {
                    textAlign: "center",
                    marginTop: 5,
                  }]}>{"Vitabiotics Wellwoman Original"}</Text>

                  <Text style={[Typography.MediumBold, {
                    textAlign: "center",
                    color: "#FF0000",
                    marginTop: 5,
                  }]}>{"Rs. 2200"}</Text>
                  <AppButton label={"Add to cart"} backgroundColor={colors.black} onPress={() => alert("under dev")}
                             styles={{ alignSelf: "center" }} />

                </View>
              </TouchableOpacity>}
            />

            <AppButton
              label={"Load more"}
              backgroundColor={colors.grey3}
              textColor={colors.black}
              width={wp(25)}
              onPress={() => alert("under dev")}
              styles={{ alignSelf: "center" }}
              borderRadius={2} />

            <View>
              <Image
                source={images.slider}
                style={{ width: "100%", resizeMode: "contain", alignSelf: "center" }} />
            </View>

            <Text style={[Typography.MediumBold, { textAlign: "center", margin: 20 }]}>{"Featured Products"}</Text>

            <FlatList
              showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}
              data={["Skin Care", "Eye Care", "Hair Care", "Hand and foot care", "Kits $ gifts", "Supplements", "Toners", "Baby Care"]}
              horizontal={true}
              renderItem={({ index, item }) => <View
                style={{
                  width: 164,
                  borderRadius: 20,
                  backgroundColor: "#fff",
                  elevation: 2,
                  margin: 10,
                  padding: 20,
                }}>
                <Image source={images.featured_product} style={{ width: 80, height: 127, alignSelf: "center" }} />
                <Text style={[Typography.SmallRegular, {
                  textAlign: "center",
                  marginTop: 5,
                }]}>{"Soap & Glory Wonder\nSerum Leave"}</Text>

                <Text style={[Typography.MediumBold, {
                  textAlign: "center",
                  color: "#FF0000",
                  marginTop: 5,
                }]}>{"Rs. 1600"}</Text>
                <AppButton label={"Add to cart"} backgroundColor={colors.black} onPress={() => alert("under dev")}
                           styles={{ alignSelf: "center" }} />

              </View>}
            />

            <AppButton
              label={"Load more"}
              backgroundColor={colors.grey3}
              textColor={colors.black}
              width={wp(25)}
              onPress={() => alert("under dev")}
              styles={{ alignSelf: "center" }}
              borderRadius={2} />

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
