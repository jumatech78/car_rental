import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from "react-native";

import { auth } from "../../firebase";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import logo from "../../assets/logo.png";

function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() =>{
    const unsubscribe = auth.onAuthStateChanged(user => {
      if(user){
        navigation.replace('Home')
      }
    })

    return unsubscribe
  }, [])

  const handleLogin = () =>{
    auth
     .signInWithEmailAndPassword(email, password)
     .then(userCredentials => {
      const user = userCredentials.user;
      console.log('Logged in with:', user.email);
     })
     .catch(error => alert(error.massage))
  }


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
          borderBottomLeftRadius: 70,
          borderBottomRightRadius: 70,
        }}
      >
        <Image source={logo} style={{ width: 235, height: 159 }} />
      </View>
      <View
        style={{ flex: 0.5, backgroundColor: "white", alignItems: "center" }}
      >
        <View style={styles.login_component}>
          <View style={styles.headerContainer}>
            <Text style={styles.headerTitle}>LOGIN</Text>
          </View>
          <View style={styles.inputsContainer}>
            <View
              style={{
                justifyContent: "center",
                width: 325,
                height: 45,
                margin: 10,
                backgroundColor: "white",
                borderColor: "black",
                borderWidth: 1,
                borderRadius: 5,
              }}
            >
              <TextInput
                placeholder="Email"
                value={email}
                onChangeText={(text) => setEmail(text)}
                style={styles.input}
              />
            </View>
            <View
              style={{
                justifyContent: "center",
                width: 325,
                height: 45,
                margin: 10,
                backgroundColor: "white",
                borderColor: "black",
                borderWidth: 1,
                borderRadius: 5,
              }}
            >
              <TextInput
                placeholder="Password"
                value={password}
                onChangeText={(text) => setPassword(text)}
                secureTextEntry
                style={styles.input}
              />
            </View>
          </View>
          <View style={{ paddingTop: 30 }}>
            <TouchableOpacity
              style={styles.btn}
              onPress={handleLogin}
              // onPress={() => {
              //   navigation.replace("Home");
              // }}
            >
              <Text style={styles.btnText}>LOGIN</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Register");
              }}
              style={{
                alignItems: "center",
                paddingTop: 8,
              }}
            >
              <Text>Don't have an Account? Register</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Login;

const styles = StyleSheet.create({
  login_component: {
    display: "flex",
    position: "absolute",
    top: -160,
    width: 350,
    height: 420,
    borderColor: "white",
    borderWidth: 2,
    borderRadius: 10,
    shadowOpacity: 12,
    backgroundColor: "white",
    // shadowRadius: 4.65,
    // elevation: 2,
  },
  headerContainer: {
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 25,
    fontWeight: "600",
    paddingTop: 30,
  },
  inputsContainer: {
    paddingTop: 60,
  },
  input: {
    width: 325,
    margin: 10,
    fontSize: 18,
    fontWeight: "400",
    // backgroundColor: '#FFFFFF50',
    // color: "white",
    // borderColor:'black'

    // backgroundColor:'gray'
  },
  btn: {
    width: 325,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F9B401",
    fontWeight: "500",
    color: "white",
    margin: 10,
    borderRadius: 25,
  },
  btnText: {
    fontWeight: "bold",
    color: "black",
    fontSize: 20,
  },
});
