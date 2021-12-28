import React, { useState } from "react";
import { FlatList } from "react-native";
import UserContext from "../../AuthContaxt";
import AppContainer from "../../core/AppContainer";
import { ProductItem } from "../../core/ProductsItem";
import HttpService from "../../http";
function AllProducts({ navigation, route }) {
    const state = React.useContext(UserContext);
    const [products, Products] = useState([]);
    const { Loading, cartProducts, CartProducts } = state;
    React.useLayoutEffect(() => {
        const { params } = route
        console.log("tehrim", params)
        if (params !== undefined) {
            _all_products(params.id);
        } else
            _all_products();
    }, [navigation]);


    const addCart = (item) => {
        let prevCarts = [...cartProducts];
        let index = prevCarts.indexOf(item);
        if (index === -1) {
            item.quantity = 1;
            prevCarts.push(item);
        } else prevCarts.splice(index, 1);
        CartProducts(prevCarts);
    };

    const _all_products = (category_id) => {
        Loading(true);
        HttpService._productByCatId(category_id, (status, res) => {
            let products = res.data.products;
            Loading(false);
            if (status) {
                Products(products);
            }
        });
    };

    return (<AppContainer
        state={state}
        children={<FlatList
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            style={{width:'100%'}}
            contentContainerStyle={{justifyContent:'center',alignSelf:'center'}}
            data={products}
            numColumns={2}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ index, item }) => <ProductItem navigation={navigation} cartProducts={cartProducts} item={item} onAddCart={() => addCart(item)} />}
        />}>
    </AppContainer>
    );
}

export { AllProducts };
