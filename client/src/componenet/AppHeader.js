import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
const AppHeader = () => {
  return (
    <View className="w-full flex  flex-row justify-between  bg-slate-200 p-2">
      <Text className="text-3xl">ServiceNow</Text>
      <View>
        <TouchableOpacity>
          <MaterialCommunityIcons name="account" size={40} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AppHeader;
