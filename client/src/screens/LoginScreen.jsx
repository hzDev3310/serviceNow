import React from "react";
import useLogin from "../hooks/useLogin";
import { Button, Text } from "react-native-paper";

const LoginScreen = () => {
  const { error, loading, handleLogin } = useLogin("26284497", "123456");
  return (
    <>
      
      <Text>{JSON.stringify(error)}</Text>
      <Text>{JSON.stringify(loading)}</Text>
      <Button onPress={()=>{
        handleLogin()
      }} >login</Button>
    </>
  );
};

export default LoginScreen;
