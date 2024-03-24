import { View, Text } from "react-native";
import React from "react";
import { useDarkMode } from "../store";

const AppView = ({ children, ...otherProps }) => {
  const { darkMode } = useDarkMode();
  return (
    <View {...otherProps} className={darkMode && "bg-gray-900"}>
      {children}
    </View>
  );
};

export default AppView;
