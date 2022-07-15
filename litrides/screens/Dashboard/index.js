import React from "react";
import { SafeAreaView, View, Text, StyleSheet } from "react-native";

function Dashboard() {
  return (
       <SafeAreaView style={styles.main_container}>
      <View style={styles.mainHeader}>
        <Text>half one</Text>
      </View>
      <View style={styles.mainFooter}>
        <Text>half two</Text>
      </View>
    </SafeAreaView>
  );
}

export default Dashboard;

const styles = StyleSheet.create({
    main_container:{
        flex:1,
        // justifyContent:'center',
        backgroundColor:'white'
    },
    mainHeader:{
        flex:0.5,
        backgroundColor:'black'
    },
    mainFooter:{
        flex:0.5,
        backgroundColor:'white'
    }

});