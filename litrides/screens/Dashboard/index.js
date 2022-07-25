import React from "react";
import { SafeAreaView, View, Text, StyleSheet, TextInput } from "react-native";
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { useNavigation } from '@react-navigation/native';

import Brand from "../../components/Brand";
import Card from "../../components/Card";

function Dashboard() {
  // const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.main_container}>
      <View style={styles.mainHeader}>
        <View style={styles.inputContainer}>
          <TextInput style={styles.input} placeholder="Search" />
        </View>
        {/* <Text>half one</Text> */}
      </View>
      <View style={styles.mainFooter}>
        <View style={{ top: -40 }}>
          <Brand />
        </View>
        <View style={styles.headerFooter}>
          <Text style={styles.txtLeft}>Hot deal</Text>
          <Text style={styles.txtRight}>View all</Text>
        </View>
        <Card />
      </View>
    </SafeAreaView>
  );
}

export default Dashboard;

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    // justifyContent:'center',
    backgroundColor: "white",
  },
  mainHeader: {
    flex: 0.45,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    backgroundColor: "white",
    height: 40,
    width: 380,
    borderRadius: 5,
    justifyContent: "center",
    paddingLeft: 10,
  },
  input: {
    height: 40,
    fontSize: 20,
  },
  mainFooter: {
    flex: 0.55,
    backgroundColor: "white",
  },
  headerFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 20,
    paddingRight: 20,
  },
  txtLeft: {
    fontWeight: "bold",
    fontSize: 17,
  },
  txtRight: {
    fontWeight: "bold",
    fontSize: 17,
    color: "#F9B401",
  },
});
