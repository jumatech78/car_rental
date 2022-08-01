import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";

import { useNavigation } from "@react-navigation/native";

import AntDesign from "react-native-vector-icons/AntDesign";

import BMW from "../../assets/BMW.png";

import Brand from "../../components/Brand";
// import Card from "../../components/Card";

function Notification() {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View style={styles.Container}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("PostCard");
          }}
        >
          <AntDesign name="left" size={22} />
        </TouchableOpacity>

        <Text style={styles.header}>Recent History</Text>
      </View>
      <ScrollView style={{ paddingTop: 25 }}>
        <View style={{ alignItems: "center" }}>
          <View style={styles.historyCard}>
            <View style={{flexDirection:"row",justifyContent:"space-between",}}>
              <Image source={BMW} style={{ width: 60, height: 60 }} />
              <View style={{justifyContent:"center"}}>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    // alignItems:'center'
                  }}
                >
                  <Text style={{ fontWeight:"bold", paddingRight: 170, fontSize:16 }}>AUDI Q7</Text>
                  <Text style={{ fontWeight:"bold", paddingRight: 10 }}>$14.99</Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    paddingTop: 15
                  }}
                >
                  <Text style={{ fontWeight:"bold", color:"#C4C4C4", paddingRight: 170, fontSize: 16 }}>Dec 14 2020</Text>
                  <Text style={{ fontWeight:"bold", color:"#C4C4C4", paddingRight: 10 }}>1 day</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Notification;

const styles = StyleSheet.create({
  Container: {
    top: 11,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 8,
  },
  header: {
    // top: 12,
    fontSize: 23,
    fontWeight: "bold",
    paddingLeft: 90,
  },
  historyCard: {
    paddingLeft: 10,
    height: 90,
    width: 380,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#C4C4C4",
    justifyContent:'center'
  },
});
