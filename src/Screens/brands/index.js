import React, { useState } from "react";
import AppContainer from "../../core/AppContainer";
import { FlatList, Image, Text, View } from "react-native";
import UserContext from "../../AuthContaxt";
import { images } from "../../assets";
import { Typography } from "../../theme/Typography";
import HttpService from "../../http";
function Brands({ navigation }) {
  const state = React.useContext(UserContext);
  const [brands, Brands] = useState([]);
  const { Loading } = state;
  React.useLayoutEffect(() => {
    _brands();
  }, [navigation]);


  const _brands = (type) => {
    Loading(true);
    HttpService._brands((status, res) => {
      let data = res.data;
      Loading(false);
      if (status) {
        Brands(data);
      }
    });
  };

  return (<AppContainer
      state={state}
      children={<View>

        <FlatList
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          data={brands}
          numColumns={2}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ index, item }) => <View
            style={{
              width: "45%",
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
            }]}>{item.sub_name}</Text>

          </View>}
        />

      </View>}>


    </AppContainer>
  );
}

export { Brands };
