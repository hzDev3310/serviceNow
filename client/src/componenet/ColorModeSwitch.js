import { Switch } from "react-native";
import { useDarkMode } from "../store";

const ColorModeSwitch = () => {
  const { darkMode, changeDarkMode } = useDarkMode();

  return (
    <Switch
      trackColor={{ false: "#767577", true: "#81b0ff" }}
      thumbColor={darkMode ? "#f5dd4b" : "#f4f3f4"}
      ios_backgroundColor="#3e3e3e"
      onValueChange={changeDarkMode}
      value={darkMode}
    />
  );
};

export default ColorModeSwitch;
