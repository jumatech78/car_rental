import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";

import { useNavigation } from "@react-navigation/native";
import PostCard from "../PostCard";

import AntDesign from "react-native-vector-icons/AntDesign";
import q7 from "../../assets/q7.png";

function CarDetails() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.Container}>
      <View style={styles.HeadContainer}>
        <TouchableOpacity
          onPress={() => {
            navigation.replace("PostCard");
          }}
        >
          <AntDesign name="left" size={22} style={styles.headerIcon} />
        </TouchableOpacity>
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <Image source={q7} style={{ width: 260, height: 180 }} />
        </View>
      </View>
      <View style={styles.FooterContainer}>
        <Text>second</Text>
      </View>
    </SafeAreaView>
  );
}

export default CarDetails;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  HeadContainer: {
    flex: 0.4,
  },
  headerIcon: {
    paddingTop: 10,
    paddingLeft: 10,
  },
  FooterContainer: {
    flex: 0.6,
    backgroundColor: "#000000",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
});
