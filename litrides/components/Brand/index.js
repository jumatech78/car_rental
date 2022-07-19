import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
//   ScrollView,                            
} from "react-native";

import LAMBO from "../../assets/LAMBO.png";
import MERCEDES from "../../assets/MERCEDES.png";
import BMW from "../../assets/BMW.png";
import PORSCHE from "../../assets/PORSCHE.png";

function Brand() {
  return (
    <View style={styles.mainContainer}>
      {/* <ScrollView> */}
        <View style={styles.header}>
          <TouchableOpacity>
            <Image source={LAMBO} style={{ width: 80, height: 80 }} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={MERCEDES} style={{ width: 80, height: 80 }} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={BMW} style={{ width: 80, height: 80 }} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={PORSCHE} style={{ width: 80, height: 80 }} />
          </TouchableOpacity>
        </View>
      {/* </ScrollView> */}
      {/* <Text>This is the brand component</Text> */}
    </View>
  );
}

export default Brand;

const styles = StyleSheet.create({
  mainContainer: {
    display: "flex",
    top: -40,
  },
  header: {
    flexDirection: "row",
    // paddingLeft: 15,
    justifyContent: "space-evenly",
  },
});
