import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";

import q7 from "../../assets/q7.png";

function Card() {
  return (
    <View style={{ display: "flex", alignItems: "center" }}>
      <View style={styles.mainContainer}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingLeft: 15,
            paddingRight: 15,
            paddingTop: 16,
          }}
        >
          <Text style={{ color: "#CDCED1", fontWeight: "bold" }}>AUDI</Text>
          <Text>$14.99</Text>
        </View>
        <View style={{ alignItems: "center", paddingTop: 25 }}>
          <Image source={q7} style={{ width: 235, height: 159 }} />
        </View>
      </View>
    </View>
  );
}

export default Card;

const styles = StyleSheet.create({
  mainContainer: {
    display: "flex",
    top: 10,
    width: 350,
    height: 240,
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 10,
    // shadowOpacity: 12,
    backgroundColor: "#F5F6FA",
    // justifyContent:'center'
  },
});
