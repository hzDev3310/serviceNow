import React, { useState } from "react";
import { AppBar } from "../component/";
import ServicesScreen from "./ServicesScreen";
import { Button, Searchbar } from "react-native-paper";
import { ScrollView, View } from "react-native";

const HomeScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchVisible, setSearchVisible] = useState(false);

  const toggleSearchVisibility = () => {
    setSearchVisible(!searchVisible);
  };

  return (
    <>
      <AppBar />
      <ScrollView>
        <ServicesScreen />
      </ScrollView>

      {searchVisible && (
        <Searchbar
          style={{ position: "absolute", bottom: 0 }}
          placeholder="Search"
          onChangeText={setSearchQuery}
          value={searchQuery}
          keyboardAppearance="dark"
        />
      )}

      {/* Button to toggle search visibility */}
      <Button
        onPress={toggleSearchVisibility}
        style={{ position: "absolute", bottom: 60, right: 20 }}
      >
        Show/Hide Search
      </Button>
    </>
  );
};

export default HomeScreen;
