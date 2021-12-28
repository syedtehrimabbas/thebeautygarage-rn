import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image, LogBox, Platform, Text, TouchableOpacity, UIManager, View } from "react-native";
import {
  Cart,
  CheckoutAddress,
  CheckoutDelivery,
  ConfirmOrder,
  Home,
  PaymentMethod,
  ProductDetails,
} from "./src/Screens";
import colors from "./src/theme/colors";
import { images } from "./src/assets";
import UserContext, { UserProvider } from "./src/AuthContaxt";
import { CheckoutSuccess } from "./src/Screens/Checkout/CheckoutSuccess";
import Splash from "./src/Screens/splash";
import Welcome from "./src/Screens/welcome";
import LoginScreen from "./src/Screens/login";
import Signup from "./src/Screens/signup";
import { Brands } from "./src/Screens/brands";
import { Track } from "./src/Screens/track";
import { Typography } from "./src/theme/Typography";
import { Preferences } from "./src/LocalStorage";
import PreferencesKeys from "./src/LocalStorage/PreferencesKeys";
import { AllProducts } from "./src/Screens/all_products";
import { SearchProduct } from "./src/Screens/search_product";

const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();

function Dashboard({ navigation }) {
  const state = React.useContext(UserContext);

  let headerIconStyle = { width: 20, height: 20, resizeMode: "center" };
  let headerTouchIconStyle = { width: 20, height: 20, marginEnd: 10 };
  navigation.setOptions({
    headerRight: () => (
      <TouchableOpacity style={headerTouchIconStyle} onPress={() => {
        if (state.cartProducts.length > 0)
          navigation.navigate("Cart");
      }}>
        <View>
          {state.cartProducts.length>0?<Text style={{
            position: "absolute",
            top: -10,
            right: -10,
            width: 20,
            height: 20,
            textAlign: "center",
            textAlignVertical: "center",
            borderRadius: 20,
            shadowRadius: 20,
            backgroundColor: colors.red,
            color: colors.white,
          }}>{state.cartProducts.length}</Text>:null}
          <Image source={images.header.cart} style={headerIconStyle} />
        </View>
      </TouchableOpacity>
    ),
    headerLeft: () => (
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        {/* <TouchableOpacity style={headerTouchIconStyle}>
          <Image source={images.header.side_menu} style={headerIconStyle} />
        </TouchableOpacity> */}
        <TouchableOpacity style={headerTouchIconStyle} onPress={() => navigation.navigate("SearchProduct")}>
          <Image source={images.header.search} style={headerIconStyle} />
        </TouchableOpacity>
      </View>
    ),
  });
  const TabIcon = ({ focused, color, title, icon }) => {
    return <View style={{
      flexDirection: "row",
      padding: 10,
      borderRadius: 18,
      alignItems: "center",
      backgroundColor: focused ? colors.red18 : colors.grey6,
    }}>
      <Image source={icon}
        style={{ width: 22, height: 18, resizeMode: "contain", tintColor: color }} />
      <Text
        style={[Typography.SmallRegular, { color: color, fontSize: 10, marginStart: 4 }]}>{title}</Text>
    </View>;
  };

  return (
    <BottomTab.Navigator
      shifting={true}
      backBehavior="none"
      activeColor={colors.white}
      inactiveColor={colors.red}
      tabBarOptions={{
        showLabel: false,
        activeTintColor: colors.red,
        style: {
          borderTopWidth: 0,
          backgroundColor: colors.red,
          height: 70,
        },
      }}
      screenOptions={{ headerShown: false }}>

      <BottomTab.Screen name={"Home"} component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, color }) => (
            <TabIcon color={color} title={"Home"} focused={focused} icon={images.nav_home} />
          ),
        }}
      />
      <BottomTab.Screen name={"Track"} component={Track}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <TabIcon color={color} title={"Track"} focused={focused} icon={images.nav_track} />
          ),
        }} />
      {/* <BottomTab.Screen name={"Chat"} component={Home}
                        options={{
                          tabBarIcon: ({ focused, color }) => (
                            <TabIcon color={color} title={"Chat"} focused={focused} icon={images.nav_chat} />
                          ),
                        }} /> */}
      <BottomTab.Screen name={"Brands"} component={Brands}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <TabIcon color={color} title={"Brands"} focused={focused} icon={images.nav_brands} />
          ),
        }} />
    </BottomTab.Navigator>
  );
}


const navigatorOptions = {
  cardStyle: { backgroundColor: "transparent" },
  gestureEnabled: true,
  cardStyleInterpolator: ({ current: { progress } }) => ({
    cardStyle: {
      opacity: progress.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1],
      }),
    },
    overlayStyle: {
      opacity: progress.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 0.5],
        extrapolate: "clamp",
      }),
    },
  }),
};

function App() {

  const [isSplash, setSplash] = React.useState(true);
  const [user, setUser] = React.useState({});
  const [userSession, setUserSession] = React.useState({});
  const [userId, setUserId] = React.useState("0");
  const [loading, Loading] = React.useState(false);
  const [cartProducts, CartProducts] = React.useState([]);
  const [login, Login] = React.useState(false);

  const [tax, Tax] = React.useState(0);
  const [fee, Fee] = React.useState(250);
  const [totalPrice, TotalPrice] = React.useState(0 + tax + fee);

  let state = {
    splash: isSplash,
    setSplash: setSplash,
    user: user,
    setUser: setUser,
    userId: userId,
    setUserId: setUserId,
    userSession: userSession,
    setUserSession: setUserSession,
    loading: loading,
    Loading: Loading,
    cartProducts: cartProducts,
    CartProducts: CartProducts,
    login: login,
    Login: Login,
    tax: tax,
    fee: fee,
    totalPrice: totalPrice,
    TotalPrice: TotalPrice
  };

  React.useEffect(() => {
    if (
      Platform.OS === "android" &&
      UIManager.setLayoutAnimationEnabledExperimental
    ) {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
    LogBox.ignoreLogs(["Warning: ..."]); // Ignore log notification by message
    LogBox.ignoreAllLogs();//Ignore all log notifications
    setTimeout(() => {
      Preferences._GetStoredData(PreferencesKeys.USER).then((data) => {
        console.log('_GetStoredData', data)
        if (data) {
          setUserId(data.id);
          setUser(true);
          Login(true)
          setUserSession(data);
        }
      });
      setSplash(false);
    }, 2000);
  }, []);


  const config = {
    animation: "linear",
    config: {
      stiffness: 1000,
      damping: 500,
      mass: 3,
      overshootClamping: true,
      restDisplacementThreshold: 0.01,
      restSpeedThreshold: 0.01,
    },
  };
  if (isSplash) {
    return <Splash />;
  } else {
    return (<UserProvider value={state}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={navigatorOptions}
        >
          <Stack.Screen name="The Beauty Garage" component={Dashboard} options={{
            headerTitle: "The Beauty Garage",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }} />

          <Stack.Screen name="AllProducts" component={AllProducts} options={{
            headerTitle: "Products",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }} />

          <Stack.Screen name="ProductDetails" options={{
            headerTitle: "Product Details",
            showLabel: false,
          }} component={ProductDetails} />
          <Stack.Screen name="Cart" options={{
            headerTitle: "TBG Cart",
            showLabel: false,
          }}
            component={Cart} />

          <Stack.Screen name="CheckoutAddress" options={{
            headerTitle: "Checkout",
            showLabel: false,
          }} component={CheckoutAddress} />

          <Stack.Screen name="CheckoutDelivery" options={{
            headerTitle: "Checkout",
            showLabel: false,
          }} component={CheckoutDelivery} />

          <Stack.Screen name="PaymentMethod" options={{
            headerTitle: "Payment",
            showLabel: false,
          }} component={PaymentMethod} />

          <Stack.Screen name="ConfirmOrder" options={{
            headerTitle: "Confirm Order",
            showLabel: false,
          }} component={ConfirmOrder} />

          <Stack.Screen name="CheckoutSuccess" options={{
            headerTitle: "",
            showLabel: false,
            headerShown: false,
          }} component={CheckoutSuccess} />

          <Stack.Screen name="Welcome" options={{
            headerTitle: "",
            showLabel: false,
            headerShown: false,
          }} component={Welcome} />

          <Stack.Screen name="LoginScreen" options={{
            headerTitle: "Sign In Your Account",
            showLabel: true,
            headerShown: true,
          }} component={LoginScreen} />

          <Stack.Screen name="Signup" options={{
            headerTitle: "Create an account",
            showLabel: true,
            headerShown: true,
          }} component={Signup} />

          <Stack.Screen name="SearchProduct" options={{
            headerTitle: "Search Product",
            showLabel: true,
            headerShown: true,
          }} component={SearchProduct} />

        </Stack.Navigator>
      </NavigationContainer>
    </UserProvider>
    );
  }
}

export default App;
