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
import Login from "./src/Screens/login";
import LoginScreen from "./src/Screens/login";
import Signup from "./src/Screens/signup";

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
          <Text style={{
            position: "absolute",
            top: -10,
            right: -10,
            width: 20,
            height: 20,
            textAlign: "center",
            textAlignVertical: "center",
            borderRadius: 10,
            backgroundColor: colors.red,
            color: colors.white,
          }}>{state.cartProducts.length}</Text>
          <Image source={images.header.cart} style={headerIconStyle} />
        </View>
      </TouchableOpacity>
    ),
    headerLeft: () => (
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <TouchableOpacity style={headerTouchIconStyle}>
          <Image source={images.header.side_menu} style={headerIconStyle} />
        </TouchableOpacity>
        <TouchableOpacity style={headerTouchIconStyle}>
          <Image source={images.header.search} style={headerIconStyle} />
        </TouchableOpacity>
      </View>
    ),
  });

  return (
    <BottomTab.Navigator backBehavior="none"
                         screenOptions={{ headerShown: false }}
                         shifting={false}
                         activeColor={colors.tabActiveColor}
                         inactiveColor={colors.tabActiveColor}
                         tabBarOptions={{
                           showLabel: true,
                           activeTintColor: colors.tabActiveColor,
                         }}>

      <BottomTab.Screen name={"Home"} component={Home}
                        options={{
                          headerShown: false,
                          tabBarIcon: ({ color }) => (
                            <Image source={images.nav_home}
                                   style={{ width: 20, height: 20, resizeMode: "contain", tintColor: color }} />
                          ),
                        }}
      />
      <BottomTab.Screen name={"Track"} component={Home}
                        options={{
                          tabBarIcon: ({ color }) => (
                            <Image source={images.nav_track}
                                   style={{ width: 20, height: 20, resizeMode: "contain", tintColor: color }} />
                          ),
                        }} />
      <BottomTab.Screen name={"Chat"} component={Home}
                        options={{
                          tabBarIcon: ({ color }) => (
                            <Image source={images.nav_chat}
                                   style={{ width: 20, height: 20, resizeMode: "contain", tintColor: color }} />
                          ),
                        }} />
      <BottomTab.Screen name={"Brands"} component={Home}
                        options={{
                          tabBarIcon: ({ color }) => (
                            <Image source={images.nav_brands}
                                   style={{ width: 20, height: 20, resizeMode: "contain", tintColor: color }} />
                          ),
                        }} />
    </BottomTab.Navigator>
  );
}

function App() {

  const [isSplash, setSplash] = React.useState(true);
  const [user, setUser] = React.useState({});
  const [userSession, setUserSession] = React.useState({});
  const [userId, setUserId] = React.useState("0");
  const [loading, Loading] = React.useState(false);
  const [cartProducts, CartProducts] = React.useState([]);
  const [login, Login] = React.useState(false);

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
            screenOptions={{
              headerShown: true,
            }}>

            <Stack.Screen name="The Beauty Garage" component={Dashboard} options={{
              headerTitle: "The Beauty Garage",
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

          </Stack.Navigator>
        </NavigationContainer>
      </UserProvider>
    );
  }
}

export default App;
