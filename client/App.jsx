import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import { ServiceProviderScreen, NavigationScreen } from "./src/screens";
import { PaperProvider } from "react-native-paper";

const Stack = createStackNavigator();

function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="NavigationScreen" component={NavigationScreen} />
          <Stack.Screen
            name="ServiceProviderScreen"
            component={ServiceProviderScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

export default App;
