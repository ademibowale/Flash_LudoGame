import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet,View } from "react-native";
import FormHeader from "./app/components/FormHeader";
import FormSelectorBtn from './app/components/FormSelectorBtn';

export default function App() {
  return (
    <View style={{ flex: 1, paddingTop: 120, paddingLeft: 12 }}>
      <StatusBar style="auto" />  {/* Add this line for status bar control */}
      <View style={{ height: 100 }}>
        <FormHeader
          leftHeading="Welcome"
          rightHeading="Back"
          subHeading="Flash Ludo Game"
        />
      </View>
      <View style={{ flexDirection: 'row', padding: 20 }}>
        <FormSelectorBtn backgroundColor='rgb(255, 0, 0)' title="Login" />
        <FormSelectorBtn backgroundColor='rgb(255, 140, 0)' title="Signup" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
