import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
} from "react-native";
import Brand from "../../components/Brand";
import Card from "../../components/Card";

function PostCard() {
  return (
    <SafeAreaView>
      <ScrollView>
        <Text style={styles.header}>Brands</Text>
        <View style={styles.headContainer}>
          <View>
            <Brand />
            <View style={styles.body}>
              <Card />
              <Card />
              <Card />
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
  body:{
    paddingTop: 15
  },
  bodyComponent:{
    padding:10
  }
});
