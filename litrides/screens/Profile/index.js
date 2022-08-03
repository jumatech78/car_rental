import React from "react";
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity } from "react-native";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Entypo from "react-native-vector-icons/Entypo";
import Ionicons from "react-native-vector-icons/Ionicons";

function Profile() {
  return (
    <SafeAreaView style={styles.MainContainer}>
      <View style={styles.mainHeaderContainer}>
        <Text style={styles.headingText}>Settings</Text>
      </View>
      <View style={styles.mainFooterContainer}>
        <View>
          <View style={{ flexDirection:'row', alignItems:"center", paddingVertical: 17 }}>
            <MaterialCommunityIcons name="account-cog" size={26} />
            <Text style={{ paddingLeft: 20, fontSize: 21}}>Account Settings</Text>
          </View>
          <View style={{ flexDirection:'row', alignItems:"center", paddingVertical: 17 }}>
            <Ionicons name="notifications" size={25} />
            <Text style={{ paddingLeft: 20, fontSize: 21}}>Notification</Text>
          </View>
          <View style={{ flexDirection:'row', alignItems:"center", paddingVertical: 17 }}>
            <Ionicons name="settings" size={25} />
            <Text style={{ paddingLeft: 20, fontSize: 21}}>General</Text>
          </View>
          <View style={{ flexDirection:'row', alignItems:"center", paddingVertical: 17 }}>
            <Entypo name="help-with-circle" size={25} />
            <Text style={{ paddingLeft: 20, fontSize: 21}}>Support</Text>
          </View>
        </View>
        <TouchableOpacity style={{ top: 160 }}>
          <View style={{ flexDirection:'row', alignItems:"center"}}>
          <MaterialCommunityIcons name="logout" size={26} />
            <Text style={{ fontWeight:'bold', fontSize: 19, paddingLeft: 20 }}>LogOut</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default Profile;

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    backgroundColor: "black",
    top: 20,
  },
  mainHeaderContainer: {
    flex: 0.3,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
  headingText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 30,
  },
  mainFooterContainer: {
    flex: 0.8,
    backgroundColor: "white",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingLeft: 25,
    paddingTop: 30,
  },
});
