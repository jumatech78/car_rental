import React from "react";
import { SafeAreaView, View, Text, StyleSheet, TextInput } from "react-native";

import Brand from '../../components/Brand';

function Dashboard() {
  return (
       <SafeAreaView style={styles.main_container}>
      <View style={styles.mainHeader}>
        <View style={styles.inputContainer}>
          <TextInput style={styles.input} placeholder="Search"/>
        </View>
        {/* <Text>half one</Text> */}
      </View>
      <View style={styles.mainFooter}>
        <Brand />
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
        flex:0.45,
        backgroundColor:'black',
        justifyContent:'center',
        alignItems:'center'
    },
    inputContainer:{
      backgroundColor:'white',
      height:40,
      width:380,
      borderRadius:5,
      justifyContent:'center',
      paddingLeft:10
    },
    input:{
      height:40,
      fontSize:20
    },
    mainFooter:{
        flex:0.55,
        backgroundColor:'white'
    }

});