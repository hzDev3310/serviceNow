import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { LoginScreen, ProfilScreen, SignupScreen } from "../screens";
import { useLog } from "../store";

const Stack = createStackNavigator();

const AccountStack = () => {


  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={useLog().isLogin ? "profil" : "login"}
    >
      <Stack.Screen name="profil" component={ProfilScreen} />
      <Stack.Screen name="login" component={LoginScreen} />
      <Stack.Screen name="signup" component={SignupScreen} />
    </Stack.Navigator>
  );
};

export default AccountStack;
