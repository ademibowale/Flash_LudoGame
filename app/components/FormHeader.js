import React from "react";
import { View, StyleSheet,Text } from "react-native";
// import { Header } from "react-native/Libraries/NewAppScreen";

const FormHeader = ({rightHeading,leftHeading,subHeading}) => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.heading}>{leftHeading} </Text>
        <Text style={styles.heading}>{rightHeading}</Text>
      </View>
      <Text style={styles.subHeading}>{subHeading}</Text>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    // flex: 1,
    // backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },

  heading: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#1b1b33",
  },

  subHeading: {
    fontSize: 18,
    color: "#1b1b33",
    textAlign: "center",
    // marginTop: 10,
    // marginLeft: 10,
  },
});
export default FormHeader;
