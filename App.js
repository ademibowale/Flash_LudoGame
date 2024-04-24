import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
 
  TouchableWithoutFeedback,
  View,
} from "react-native";
import FormHeader from "./app/components/FormHeader";

export default function App() {
  return (
    <View style={{ flex: 1, paddingTop: 120, paddingLeft: 12 }}>
      <View style={{ height: 100 }}>
        <FormHeader
          leftHeading="Welcome"
          rightHeading="Back"
          subHeading="Flash Ludo Game"
        />
      </View>
      <View>
        <TouchableWithoutFeedback>
          <View
            style={{
              height: 45,
              width: "50%",
              backgroundColor: "#1b1b33",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "white", fontSize:16 }}>Login</Text>
          </View>
        </TouchableWithoutFeedback>
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
