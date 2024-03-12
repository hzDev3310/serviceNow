import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import { Navbar } from "./src/component";
import { ServiceProviderScreen } from "./src/screens";
import { PaperProvider } from "react-native-paper";

const Stack = createStackNavigator();

function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Navbar" component={Navbar} />
          <Stack.Screen name="ServiceProviderScreen" component={ServiceProviderScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

export default App;
