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

const SingupScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const { postData, loading, error, responseData } = usePost("/auth/signup");

  const handleLogin = () => {
    // Make sure username and password are not empty
    if (username.trim() === "" || password.trim() === "") {
      setError("Username and password are required");
      return;
    }

    // Call postData function with login credentials
    postData({
      number: username,
      password,
      name,
      location: { city: "kairouan", citys: ["sousa", "mestir"] },
    });
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
        placeholder="name"
        onChangeText={setName}
        value={name}
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
        <Button title="sing up" onPress={handleLogin} />
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

export default SingupScreen;
