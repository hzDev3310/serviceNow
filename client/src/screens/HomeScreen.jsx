import React, { useState } from "react";
import { AppBar } from "../component/";
import ServicesScreen from "./ServicesScreen";
import { Button, Searchbar } from "react-native-paper";
import { ScrollView, View } from "react-native";

import NotifcationSceen from "./NotifcationSceen";
import { useNotif } from "../store";

const HomeScreen = () => {
  const { notif } = useNotif();
  const [searchQuery, setSearchQuery] = useState("");
  const [searchVisible, setSearchVisible] = useState(false);

  const toggleSearchVisibility = () => {
    setSearchVisible(!searchVisible);
  };

  return (
    <>
      <AppBar />
      {notif ? (
        <NotifcationSceen />
      ) : (
        <>
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

          <Button
            onPress={toggleSearchVisibility}
            style={{ position: "absolute", bottom: 60, right: 20 }}
          >
            Show/Hide Search
          </Button>
        </>
      )}
    </>
  );
};

export default HomeScreen;
