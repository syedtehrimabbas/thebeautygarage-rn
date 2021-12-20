import React , {useState}from "react";
import AppContainer from "../../../core/AppContainer";
import { Text, TextInput, View ,ScrollView} from "react-native";
import UserContext from "../../../AuthContaxt";
import { AppStyles } from "../../../theme/styles";
import { Typography } from "../../../theme/Typography";
import colors from "../../../theme/colors";
import { AppButton } from "../../../core/AppButton";
import { CheckOutView } from "../../../core/CheckOutView";
import { validateEmail, validatePhone } from "../../../core/CommonMethods";

function CheckoutAddress({ navigation }) {
  const state = React.useContext(UserContext);
  const [name,Name] = useState("Tehrim Abbas")
  const [email,Email] = useState("syed@gmail.com")
  const [city,City] = useState("Lahore")
  const [zipcode,Zipcode] = useState("53100")
  const [address,Address] = useState("House #81 Street #1, Nawab Town, Thokar niaz beg, Lahore")
  const [phone,Phone] = useState("03405104524")

  const onNext=()=>{
    if(name.length===0){
      alert("Please enter your name.")
      return
    }

    if(!validateEmail(email)){
      alert("Enter valid email")
      return
    }
    if(city.length<5){
      alert("Please enter valid city name.")
      return
    }
    if(zipcode.length<4){
      alert("Please enter valid zipcode.")
      return
    }

    if(address.length<10){
      alert("Please enter valid address.")
      return
    }
    if(!validatePhone(phone)){
      alert("Enter valid phone number")
      return
    }
    
    navigation.navigate("CheckoutDelivery",{addressInfo:{
      name:name,
      email:email,
      city:city,
      zipcode:zipcode,
      address:address,
      phone:phone,
    }})

  }
  return (<AppContainer
      state={state}
      children={
        <View style={[AppStyles.centerItems, { paddingTop: 10 }]}>
          <Text style={Typography.ALargeBold}>{"Address"}</Text>
          <View style={{ flexDirection: "row", marginTop: 10, marginBottom: 10 }}>
            <CheckOutView
              fill={colors.red}
              line={"#707070"}
              isLast={false}
              label={"Address"}
            />

            <CheckOutView
              fill={colors.grey}
              line={colors.grey}
              isLast={false}
              label={"Delivery"}
            />

            <CheckOutView
              fill={colors.grey}
              line={colors.grey}
              isLast={false}
              label={"Payment"}
            />

            <CheckOutView
              fill={colors.grey}
              line={colors.grey}
              isLast={true}
              label={"Confirm"}
            />

          </View>
          <View style={{
            padding: 20,
            width: "100%",
            height: "90%",
            borderTopRightRadius: 50,
            borderTopLeftRadius: 50,
            elevation: 3,
            backgroundColor: "white",
          }}>
            <Text style={[Typography.SmallRegular, { color: colors.red }]}>{"Name"}</Text>
            <TextInput placeholder={"Enter Name"} underlineColorAndroid={colors.grey4} 
                   onChangeText={text => Name(text)}
                   value={name} />

            <Text style={[Typography.SmallRegular, { color: colors.red }]}>{"Email"}</Text>
            <TextInput placeholder={"Enter Email"} underlineColorAndroid={colors.grey4} 
                   onChangeText={text => Email(text)}
                   value={email} />

            <Text style={[Typography.SmallRegular, { color: colors.red }]}>{"City"}</Text>
            <TextInput placeholder={"Enter City"} underlineColorAndroid={colors.grey4} 
                   onChangeText={text => City(text)}
                   value={city}/>

            <Text style={[Typography.SmallRegular, { color: colors.red }]}>{"Zip Code"}</Text>
            <TextInput placeholder={"Enter Zipcode"} underlineColorAndroid={colors.grey4} 
                   onChangeText={text => Zipcode(text)}
                   value={zipcode}/>

            <Text style={[Typography.SmallRegular, { color: colors.red }]}>{"Address"}</Text>
            <TextInput placeholder={"Enter Address"} underlineColorAndroid={colors.grey4}
                   onChangeText={text => Address(text)}
                   value={address} />

            <Text style={[Typography.SmallRegular, { color: colors.red }]}>{"Phone Number"}</Text>
            <TextInput placeholder={"Enter Phone Number"} underlineColorAndroid={colors.grey4} 
                   onChangeText={text => Phone(text)}
                   value={phone}/>

            <AppButton label={"Next"} backgroundColor={colors.red} onPress={onNext}
                       styles={{ alignSelf: "center",}} height={45} />
          </View>
        </View>}>
    </AppContainer>
  );
}

export
{
  CheckoutAddress,
};
