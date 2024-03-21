import React from "react";
import { useColorMode } from "../store";
import { View } from "react-native";
import colors from "../config/colors";

const AppView = ({ children, Style, ...otherProps }) => {
  const { colorMode } = useColorMode();
  const bgColor = colorMode === "dark" ? colors.darkBlue : colors.light ;
  return (
    <View style={[Style, { backgroundColor: bgColor }]} {...otherProps}>
      {children}
    </View>
  );
};

export default AppView;
