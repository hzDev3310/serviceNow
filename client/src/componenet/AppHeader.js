import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppView from "./AppView";
import AppText from "./AppText";
const AppHeader = () => {
  return (
    <AppView className="w-full flex  flex-row justify-between">
      <AppText className="text-3xl">ServiceNow</AppText>
      <View>
        <TouchableOpacity>
          <MaterialCommunityIcons name="account" size={40} color="black" />
        </TouchableOpacity>
      </View>
    </AppView>
  );
};

export default AppHeader;
