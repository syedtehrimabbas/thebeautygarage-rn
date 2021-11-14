import React, { useState } from "react";
import { Text, TextInput, View ,Linking} from "react-native";
import colors from "../../theme/colors";
import { AppButton } from "../../core/AppButton";
import { wp } from "../../AppStyle/Dimension";
import { Typography } from "../../theme/Typography";
import UserContext from "../../AuthContaxt";
import HttpService from "../../http";
import AppContainer from "../../core/AppContainer";

const Signup = ({ navigation }) => {
  const state = React.useContext(UserContext);
  const { login, Loading } = state;
  const [name, Name] = useState("");
  const [email, Email] = useState("");
  const [password, Password] = useState("");
  const [cpassword, cPassword] = useState("");
  const _login = () => {
    if (name.length < 3) {
      alert("Name should be greater than 3 characters.");
      return;
    }
    if (email.length === 0) {
      alert("Email is required");
      return;
    }

    if (password.length < 6) {
      alert("Password should be greater than 6 characters.");
      return;
    }

    if (password !== cpassword) {
      alert(" Password and confirm password not matched.");
      return;
    }
    Loading(true);
    let formData = new FormData();
    formData.append("email", email);
    formData.append("name", name);
    formData.append("password", password);
    formData.append("gender", "Male");
    formData.append("city", "Lahore");
    formData.append("phone", "0333333333");

    HttpService.register(formData, (status, res) => {
      console.log("res", res);
      Loading(false);
      if (status) {
        alert("Account registered");
        navigation.pop(1);
        // Preferences._StoreData(PreferencesKeys.USER, res.user).then(() => {
        //   setUserId(res.user.id);
        //   setUser(true);
        //   setUserSession(res.user);
        // });
      } else {
        alert("API error");
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
        <Text style={[Typography.SmallMedium, { color: colors.black, marginTop: 10 }]}>{"Full name"}</Text>

        <TextInput style={inputStyle}
                   onChangeText={text => Name(text)}
                   value={name}
                   returnKeyType="next"
        >
        </TextInput>

        <Text style={[Typography.SmallMedium, { color: colors.black, marginTop: 10 }]}>{"Email"}</Text>

        <TextInput style={inputStyle}
                   onChangeText={text => Email(text)}
                   value={email}
                   keyboardType={"mail-address"}
                   returnKeyType="next"
        >
        </TextInput>
        <Text style={[Typography.SmallMedium, { color: colors.black, marginTop: 10 }]}>{"Password"}</Text>

        <TextInput style={inputStyle}
                   onChangeText={text => Password(text)}
                   value={password}
                   secureTextEntry={true}
                   returnKeyType="next"
        >
        </TextInput>

        <Text style={[Typography.SmallMedium, { color: colors.black, marginTop: 10 }]}>{"Confirm Password"}</Text>

        <TextInput style={inputStyle}
                   onChangeText={text => cPassword(text)}
                   value={cpassword}
                   secureTextEntry={true}
                   returnKeyType="done"
        >
        </TextInput>

        <AppButton onPress={_login} label={"Sign up"} backgroundColor={colors.black}
                   textColor={colors.white}
                   styles={{ alignSelf: "center", marginBottom: 10 }} height={45} width={"80%"} />

        <View style={{ flexDirection: "column", alignItems: "center" }}>
          <Text style={[Typography.MediumRegular, {
            marginTop: 10,
          }]}>{"By Signing up you agree to our Privacy"} </Text>
          <Text onPress={()=>Linking.openURL("https://thebeautygarage.pk/term-conditions")} style={[Typography.MediumRegular, {
            color: colors.red,
          }]}>{"Policy and Terms"} </Text>
        </View>
      </View>}
    />
  );
};
export default Signup;
