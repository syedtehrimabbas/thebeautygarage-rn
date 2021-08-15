import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image } from "react-native";
import { Home } from "./src/Screens";
import colors from "./src/theme/colors";
import { images } from "./src/assets";
import { UserProvider } from "./src/AuthContaxt";

const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();


function Dashboard({ navigation }) {
  return (
    <BottomTab.Navigator backBehavior="none"
                         shifting={false}
                         activeColor={colors.tabActiveColor}
                         inactiveColor={colors.tabActiveColor}
                         tabBarOptions={{
                           showLabel: true,
                           activeTintColor: colors.tabActiveColor,
                         }}>

      <BottomTab.Screen name={"Home"} component={Home}
                        options={{
                          tabBarIcon: ({ color }) => (
                            <Image source={images.nav_home}
                                   style={{ width: 20, height: 20, resizeMode: "contain", tintColor: color }} />
                          ),
                        }} />
      <BottomTab.Screen name={"Track"} component={Home}
                        options={{
                          tabBarIcon: ({ color }) => (
                            <Image source={images.nav_home}
                                   style={{ width: 20, height: 20, resizeMode: "contain", tintColor: color }} />
                          ),
                        }} />
      <BottomTab.Screen name={"Chat"} component={Home}
                        options={{
                          tabBarIcon: ({ color }) => (
                            <Image source={images.nav_home}
                                   style={{ width: 20, height: 20, resizeMode: "contain", tintColor: color }} />
                          ),
                        }} />
      <BottomTab.Screen name={"Brands"} component={Home}
                        options={{
                          tabBarIcon: ({ color }) => (
                            <Image source={images.nav_home}
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
  };


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
  return (<UserProvider value={state}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Home" component={Dashboard} />
        </Stack.Navigator>
      </NavigationContainer>
    </UserProvider>
  );
}

export default App;
