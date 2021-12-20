import React, { useState } from "react";
import { Text, TextInput, View } from "react-native";
import colors from "../../theme/colors";
import { AppButton } from "../../core/AppButton";
import { wp } from "../../AppStyle/Dimension";
import { Typography } from "../../theme/Typography";
import UserContext from "../../AuthContaxt";
import HttpService from "../../http";
import AppContainer from "../../core/AppContainer";
import { Preferences } from "../../LocalStorage";
import PreferencesKeys from "../../LocalStorage/PreferencesKeys";

const LoginScreen = ({ navigation }) => {
  const state = React.useContext(UserContext);
  const { login, Loading } = state;
  const [email, Email] = useState();
  const [password, Password] = useState();
  const {Login,setUserId,setUser,setUserSession} = state;
  const _login = () => {
    Loading(true);
    let formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);

    HttpService.login(formData, (status, res) => {
      Loading(false);
      if (status && res.data) {
        Preferences._StoreData(PreferencesKeys.USER, res.data).then(() => {
          setUserId(res.data.id);
          setUser(true);
          Login(true)
          setUserSession(res.data);
          navigation.pop(2)
        });
      } else {
        alert(res.message);
      }
    });
  };

  const inputStyle = [Typography.SmallMedium, {
    backgroundColor: colors.white,
    height: 45,
    marginTop: 5,
    width: wp(94),
    borderWidth: 1,
    borderRadius: 5,
    borderColor: colors.grey,
    padding: 5,
    paddingStart: 10,
  }];
  return (
    <AppContainer
      state={state}
      children={<View style={{
        width: "100%",
        height: "100%",
        backgroundColor: colors.white,
        padding: 10,
      }}>
        <Text style={[Typography.SmallMedium, { color: colors.black, marginTop: 10 }]}>{"Email"}</Text>

        <TextInput style={inputStyle}
                   onChangeText={text => Email(text)}
                   value={email}
                   keyboardType={"email-address"}
                   returnKeyType="next"
        >
        </TextInput>
        <Text style={[Typography.SmallMedium, { color: colors.black, marginTop: 10 }]}>{"Password"}</Text>

        <TextInput style={inputStyle}
                   onChangeText={text => Password(text)}
                   value={password}
                   secureTextEntry={true}
                   returnKeyType="done"
        >
        </TextInput>

        <AppButton onPress={_login} label={"Sign in"} backgroundColor={colors.black}
                   textColor={colors.white}
                   styles={{ alignSelf: "center", marginBottom: 10 }} height={45} width={"80%"} />

        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <Text style={[Typography.MediumRegular, {
            marginTop: 10,
          }]}>{"Don't Have an Account?"} </Text>
          <Text onPress={() => navigation.navigate("Signup")} style={[Typography.MediumRegular, {
            color: colors.red,
            marginTop: 10,
          }]}>{"Sign up"} </Text>
        </View>
      </View>}
    />
  );
};
export default LoginScreen;
