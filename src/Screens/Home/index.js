import React from "react";
import AppContainer from "../../core/AppContainer";
import { FlatList, Image, ScrollView, StyleSheet, Text, View } from "react-native";
import UserContext from "../../AuthContaxt";
import Swiper from "react-native-swiper";
import { images } from "../../assets";
import { Typography } from "../../theme/Typography";
import colors from "../../theme/colors";

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

function Home() {
  const state = React.useContext(UserContext);

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
        <View style={{marginBottom:30}}>
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

          <Text style={[Typography.ALargeBold, { textAlign: "center" }]}>{"Categories"}</Text>

          <View style={{ height: 50 }}>
            <FlatList
              showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}
              data={["Skin Care", "Eye Care", "Hair Care", "Hand and foot care", "Kits $ gifts", "Supplements", "Toners", "Baby Care"]}
              horizontal={true}
              renderItem={({ index, item }) => <Text style={{
                color: colors.black,
                margin: 5,
                elevation: 1,
                backgroundColor: "#FFF",
                borderRadius: 17,
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

          <Text style={[Typography.ALargeBold, { textAlign: "center" }]}>{"Best Sellers"}</Text>
          <FlatList
            showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}
            data={["Skin Care", "Eye Care", "Hair Care", "Hand and foot care", "Kits $ gifts", "Supplements", "Toners", "Baby Care"]}
            horizontal={true}
            renderItem={({ index, item }) => <View
              style={{ width: 164, borderRadius: 20, backgroundColor: "#fff", elevation: 3, margin: 10, padding: 20 }}>
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

            </View>}
          />
          <Text style={[Typography.ALargeBold, { textAlign: "center" }]}>{"Featured Products"}</Text>

          <FlatList
            showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}
            data={["Skin Care", "Eye Care", "Hair Care", "Hand and foot care", "Kits $ gifts", "Supplements", "Toners", "Baby Care"]}
            horizontal={true}
            renderItem={({ index, item }) => <View
              style={{ width: 164, borderRadius: 20, backgroundColor: "#fff", elevation: 3, margin: 10, padding: 20 }}>
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
