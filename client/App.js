import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { GluestackUIProvider} from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";

import { LoginScreen, SignupScreen, HomeScreen } from "./src/screens/index.js";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <GluestackUIProvider config={config}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: "HomeScreen" }}
          />
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ title: "LoginScreen" }}
          />
          <Stack.Screen
            name="Signup"
            component={SignupScreen}
            options={{ title: "SignupScreen" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </GluestackUIProvider>
  );
};

export default App;

