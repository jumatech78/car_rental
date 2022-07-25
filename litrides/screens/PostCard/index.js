import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Brand from "../../components/Brand";
import Card from "../../components/Card";

import { useNavigation } from "@react-navigation/native";

import CarDetails from "../CarDetails";

function PostCard() {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <ScrollView>
        <Text style={styles.header}>Brands</Text>
        <View style={styles.headContainer}>
          <View>
            <Brand />
            <View style={styles.body}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("CarDetails");
                }}
                style={styles.TouchCard}
              >
                <Card />
              </TouchableOpacity>
              <TouchableOpacity style={styles.TouchCard}>
                <Card />
              </TouchableOpacity>
              <TouchableOpacity style={styles.TouchCard}>
                <Card />
              </TouchableOpacity>
              <TouchableOpacity style={styles.TouchCard}>
                <Card />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default PostCard;

const styles = StyleSheet.create({
  header: {
    top: 12,
    fontSize: 23,
    fontWeight: "bold",
    paddingLeft: 15,
  },
  headContainer: {
    paddingTop: 20,
  },
  body: {
    paddingTop: 15,
  },
  TouchCard: {
    paddingBottom: 15,
  },
});
