import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from './screens/Login';
import Register from './screens/Register';
import Home from './screens/Home';
import PostCard from "./screens/PostCard";
import CarDetails from "./screens/CarDetails";
// import { Header } from "react-native/Libraries/NewAppScreen";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={Login}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Register"
          component={Register}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Home"
          component={Home}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="PostCard"
          component={PostCard}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="CarDetails"
          component={CarDetails}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;