import React from "react";
import { SafeAreaView, View, Text, StyleSheet, Image } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import Dashboard from "../Dashboard";
import Notification from "../Notification";
import Profile from "../Profile";

// import dash from "../../assets/dash.png";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons'
// import notify from "../../assets/notify.png";
// import profile from "../../assets/profile.png";

const Tab = createMaterialBottomTabNavigator();

function Home({navigation}) {
  return (
    <Tab.Navigator
      labeled={false}
      barStyle={{ backgroundColor: "white" }}
      activeColor="#F9B401"
    >
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="home" size={25} color={color} />
          )
        }}
      />
      <Tab.Screen
        name="Notification"
        component={Notification}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="notifications" size={25} color={color} />
            // <Image source={notify} color={color} size={26} />
          )
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings" size={25} color={color} />
            // <Image source={profile} color={color} size={26} />
          )
        }}
      />
    </Tab.Navigator>
    // <SafeAreaView style={styles.main_container}>
    //   <View style={styles.mainHeader}>
    //     <Text>half one</Text>
    //   </View>
    //   <View style={styles.mainFooter}>
    //     <Text>half two</Text>
    //   </View>
    // </SafeAreaView>
  );
}

export default Home;

// const styles = StyleSheet.create({
//     main_container:{
//         flex:1,
//         // justifyContent:'center',
//         backgroundColor:'white'
//     },
//     mainHeader:{
//         flex:0.5,
//         backgroundColor:'black'
//     },
//     mainFooter:{
//         flex:0.5,
//         backgroundColor:'white'
//     }

// });
