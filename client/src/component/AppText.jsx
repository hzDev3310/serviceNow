import React from "react";
import { useColorMode } from "../store";
import { Text } from "react-native-paper";

const AppText = ({ children, Style, ...otherProps }) => {
  const { colorMode } = useColorMode();
  const bgColor = colorMode === "light" ? "#000" : "#fff";
  return (
    <Text style={[Style, { color: bgColor }]} {...otherProps}>
      {children}
    </Text>
  );
};

export default AppText;