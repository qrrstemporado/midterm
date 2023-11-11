const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import Advanced from "./screens/Advanced";
import Budget from "./screens/Budget";
import HomeScreen from "./screens/HomeScreen";
import GettingStarted2 from "./screens/GettingStarted2";
import GettingStarted1 from "./screens/GettingStarted1";
import LoadingScreen from "./screens/LoadingScreen";
import FoodInfo from "./screens/FoodInfo";
import HomeScreen2 from "./screens/HomeScreen2";
import CuisineFilter from "./screens/CuisineFilter";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "MeeraInimai-Regular": require("./assets/fonts/MeeraInimai-Regular.ttf"),
    "Inter-Medium": require("./assets/fonts/Inter-Medium.ttf"),
    "Inter-SemiBold": require("./assets/fonts/Inter-SemiBold.ttf"),
    "Inter-Bold": require("./assets/fonts/Inter-Bold.ttf"),
    "Poppins-Light": require("./assets/fonts/Poppins-Light.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="LoadingScreen"
              component={LoadingScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="GettingStarted1"
              component={GettingStarted1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="GettingStarted2"
              component={GettingStarted2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="HomeScreen"
              component={HomeScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="HomeScreen2"
              component={HomeScreen2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Advanced"
              component={Advanced}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Budget"
              component={Budget}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="FoodInfo"
              component={FoodInfo}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CuisineFilter"
              component={CuisineFilter}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
