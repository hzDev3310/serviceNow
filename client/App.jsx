import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import { ServiceProviderScreen, SignupScreen } from "./src/screens";
import { Button, PaperProvider, Text } from "react-native-paper";
import { StatusBar } from "react-native";
import NavigationScreen from "./src/screens/NavigationScreen";
import { useCity } from "./src/store";
import useLocation from "./src/hooks/useLocation";

const Stack = createStackNavigator();

function App() {
  const { cityName } = useCity();
  useLocation();
  return (
    <PaperProvider>
      <StatusBar></StatusBar>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="NavigationScreen" component={NavigationScreen} />
          <Stack.Screen name="SignupScreen" component={SignupScreen} />
          <Stack.Screen
            name="ServiceProviderScreen"
            component={ServiceProviderScreen}
          />
        </Stack.Navigator>
        <Button
          onPress={() => {
            console.log("city : " + cityName);
          }}
        >
          idsf
        </Button>
      </NavigationContainer>
    </PaperProvider>
  );
}

export default App;
