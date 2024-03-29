import React, { useState } from "react";
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
// import { createUserWithEmailAndPassword } from "firebase/auth";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import logo from "../../assets/logo.png";

function Register({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  
  // createUserWithEmailAndPassword(auth, email, password)
  //   .then((userCredential) => {
  //     // Signed in
  //     const user = userCredential.user;
  //     // ...
  //   })
  //   .catch((error) => {
  //     const errorCode = error.code;
  //     const errorMessage = error.message;
  //     // ..
  //   });
  const handleSignUp = () => {
    auth
     .createUserWithEmailAndPassword(email, password)
     .then(userCredentials => {
      const user = userCredentials.user;
      console.log('Registered with:',user.email);
     })
     .catch(error => alert(error.message))
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
            <Text style={styles.headerTitle}>REGISTER</Text>
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
                placeholder="Confirm Password"
                value={confirmPassword}
                onChangeText={(text) => setConfirmPassword(text)}
                secureTextEntry
                style={styles.input}
              />
            </View>
          </View>
          <View style={{ paddingTop: 30 }}>
            <TouchableOpacity
              onPress={handleSignUp}
              style={styles.btn}
              // onPress={() => {
              //   navigation.replace("Login");
              // }}
            >
              <Text style={styles.btnText}>REGISTER</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                alignItems: "center",
                paddingTop: 8,
              }}
              onPress={() => {
                navigation.navigate("Login");
              }}
            >
              <Text>Have an Account? Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Register;

const styles = StyleSheet.create({
  login_component: {
    display: "flex",
    position: "absolute",
    top: -160,
    width: 350,
    height: 470,
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

// import React from "react";
// import { View, Text } from "react-native";

// function Register(){
//     return(
//         <View>
//             <Text>this is register screen</Text>
//         </View>
//     );
// }

// export default Register;
