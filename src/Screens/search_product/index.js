import React, { useState } from "react";
import { TextInput, View ,FlatList} from "react-native";
import { wp } from "../../AppStyle/Dimension";
import UserContext from "../../AuthContaxt";
import AppContainer from "../../core/AppContainer";
import { ProductItem } from "../../core/ProductsItem";
import HttpService from "../../http";
import colors from "../../theme/colors";
import { Typography } from "../../theme/Typography";
function SearchProduct({ navigation }) {
  const state = React.useContext(UserContext);
  const [cartProducts, CartProducts] = useState([]);
  React.useLayoutEffect(() => {
  }, [navigation]);

  const onSearch = (query) => {
    HttpService._searchProducts(query, (status, res) => {
      CartProducts(res.data)
    });
  } 
  
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
      <View style={{
        flexDirection: "row",
        backgroundColor: colors.white,
        borderRadius: 100,
        height: 45,
        width: wp(95),
        paddingStart: 10,
        alignSelf: "center",
        marginTop: 20,
        justifyContent: "space-between",
        borderWidth: 1,
        borderColor: colors.grey3
      }}>
        <TextInput style={[Typography.SmallMedium, { color: colors.black }]}
          placeholder={"Search"}
          onChangeText={text => onSearch(text)}>
        </TextInput>
      </View>

      <FlatList
            showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}
            style={{width:'100%'}}
            data={cartProducts}
            horizontal={false}
            contentContainerStyle={{justifyContent:'center',alignSelf:'center'}}
            numColumns={2}
            renderItem={({ index, item }) => <ProductItem navigation={navigation} cartProducts={cartProducts} item={item} onAddCart={() => addCart(item)} />}
          />

    </View>}>
  </AppContainer>
  );
}

export { SearchProduct };
