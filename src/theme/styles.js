import { Platform, StyleSheet } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import colors from "./colors";

export const AppStyles = StyleSheet.create({
  columnContainer: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#F9F9F9",
    // paddingLeft: 5,
    // paddingRight: 5
  },
  rowContainer: {
    flex: 1,
    flexDirection: "row",
  },
  centerItems: {
    justifyContent: "center",
    alignItems: "center",
  },
  overlay: {
    backgroundColor: "black",
    opacity: 0.3,
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  searchStyle: {
    width: wp(90),
    flexDirection: "row",
    alignSelf: "center",
    height: hp(6),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: wp(10),
    marginBottom: 10,
    marginTop: 10,
    backgroundColor: "white",
  }, textinputStyle: {
    width: wp(90),
    paddingLeft: wp(15),
  },
  iconContainerStyle: {
    height: hp(4),
    width: wp(4),
    position: "absolute",
    left: 20,
    resizeMode: "contain",
  },
  iconLeft: {
    height: hp(4),
    width: wp(4),
    tintColor: colors.black,
    left: 50,
    position: "absolute",
    resizeMode: "contain",
  },
  headingGreyBg: {
    width: "100%",
    justifyContent: "center",
    alignItems: "flex-start",
    padding: 5,
    backgroundColor: colors.primaryColor,
  },
  rowSection: {
    flexDirection: "row",
    alignItems: "center",
    height: 55,
    marginTop: 5,
    marginBottom: 5,
    backgroundColor: colors.black,
    padding: 10,
  },
  lightGreyCircle: {
    height: 40,
    width: 40,
    borderRadius: 20,
    backgroundColor: "#F8F8F8",
    alignItems: "center",
    justifyContent: "center",
  },
  rowSpaceBetweenBottomBorder: {
    flex: 1,
    flexDirection: "row",
    marginStart: 10,
    marginEnd: 5,
    justifyContent: "space-between",
    borderBottomWidth: 0.5,
  },
  numberInputStyle: {
    textAlignVertical: "center",
    backgroundColor: colors.grey10,
    height: 40,
    marginEnd: 5,
    marginStart: 5,
    width: "40%",
    borderRadius: 5,
    elevation: 0.5,
  },

  inputContainerStyle: {
    alignSelf: "center",
    flexDirection: "row",
    margin:10,
    width: "90%",
    height: 45,
    borderRadius: 20,
    borderColor: colors.borderColor,
    borderWidth: 1,
    alignItems: "center",
    paddingStart: 10,
    shadowOpacity: 0.2,
  },

  inputStyle: {
    marginStart: 10, width: "90%", color: colors.black,
  },
  profileTextStyle: {
    alignSelf: "center",
    marginTop: 5,
    width: "90%",
    height: 45,
    textAlignVertical: "center",
    fontSize: 15,
    borderRadius: 5,
    borderColor: colors.borderColor,
    borderWidth: 0.5,
    paddingStart: 10,
  },
  elevationLow: {
    ...Platform.select({
      ios: {
        shadowColor: "#00000029",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  labelStyle: {
    color: colors.grey,
    marginTop: 10,
    paddingLeft: 10,
    marginBottom: 10,
    width: "90%",
  },
  errorStyle: {
    color: colors.errorColor,
    marginTop: 5,
    marginStart:20,
    alignSelf: "flex-start"
  },
});
