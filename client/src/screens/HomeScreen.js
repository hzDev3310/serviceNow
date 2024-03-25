import { View, Text } from "react-native";
import React from "react";

import { AppHeader, AppServices } from "../componenet";
const HomeScreen = () => {
  return (
    <View className="flex flex-1 ">
      <AppHeader />
      <AppServices />
    </View>
  );
};

export default HomeScreen;
