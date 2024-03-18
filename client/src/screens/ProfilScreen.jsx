import React from "react";
import { Text } from "react-native-paper";
import { useLogin } from "../store";
import LoginScreen from "./LoginScreen";

const ProfilScreen = () => {
  const { isLogin } = useLogin();
  // return isLogin ? <Text>hamza</Text> : <LoginScreen />;
  return <LoginScreen />
};

export default ProfilScreen;
