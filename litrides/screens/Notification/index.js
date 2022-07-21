import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
} from "react-native";

import Brand from "../../components/Brand";
import Card from "../../components/Card";

function Notification() {
  return (
    <SafeAreaView>
      <Text style={styles.header}>Brands</Text>
      <ScrollView style={styles.Container}>
        <View>
          <Brand />
        </View>
        <View>
          <Card />
          <Card />
          <Card />
          <Card />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Notification;

const styles = StyleSheet.create({
  Container: {
    top: 20,
  },
  header: {
    top: 12,
    fontSize: 23,
    fontWeight: "bold",
    paddingLeft: 18,
  },
});
