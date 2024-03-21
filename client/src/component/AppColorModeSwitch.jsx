
import { Switch } from "react-native-paper";
import { useColorMode } from "../store";

const AppColorModeSwitch = () => {
  const { colorMode, changeColorMode } = useColorMode();
    
  return (
    <Switch value={colorMode === "dark"} onValueChange={changeColorMode} />
  );
};

export default AppColorModeSwitch;
