import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  ActivityIndicator,
  StyleSheet,
} from "react-native";
import usePost from "../hooks/usePost";
import { useLogin } from "../store";

const LoginScreen = () => {
  const { setLogin, isLogin } = useLogin();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { postData, loading, error, responseData } = usePost("/auth/login");

  const handleLogin = () => {
    if (username.trim() === "" || password.trim() === "") {
      alert("errer");
      return;
    }

    postData({ phoneNumber: username, password });
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Username"
        onChangeText={setUsername}
        value={username}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={setPassword}
        value={password}
        secureTextEntry
      />
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <Button title="Login" onPress={handleLogin} />
      )}
      {error && console.log(error) && <Text style={styles.error}>{error}</Text>}
      {responseData && (
        <Text>Login Successful{" " + JSON.stringify(responseData)}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  input: {
    height: 40,
    width: "100%",
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  error: {
    color: "red",
    marginTop: 10,
  },
});

export default LoginScreen;
