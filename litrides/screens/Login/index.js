import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import logo from "../../assets/logo.png";

function Login() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        // alignItems: "center",
        justifyContent: "flex-center",
        backgroundColor: "white",
        position: "relative",
      }}
    >
      <View
        style={{
          flex: 0.5,
          backgroundColor: "black",
          alignItems: "center",
          justifyContent: "flex-center",
          borderBottomLeftRadius:70,
          borderBottomRightRadius:70,
        }}
      >
        <Image source={logo} style={{ width: 235, height: 159 }} />
      </View>
      <View
        style={{ flex: 0.5, backgroundColor: "white", alignItems: "center" }}
      >
        <View style={styles.login_component}>
          <Text style={{ color: "black",fontSize:20, }}>LOGIN</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Login;

const styles = StyleSheet.create({
  login_component: {
    position: "absolute",
    top: -160,
    width: 350,
    height: 400,
    borderColor: "white",
    borderWidth: 2,
    borderRadius: 10,
    shadowOpacity: 12,
    backgroundColor: "white",
    // shadowRadius: 4.65,
    // elevation: 2,
  },
});
