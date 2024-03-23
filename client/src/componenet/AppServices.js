
import ColorModeSwitch from "./ColorModeSwitch";
import { useDarkMode } from "../store";
import AppView from "./AppView";

const AppServices = () => {
  const { darkMode } = useDarkMode();
  return (
 
    <AppView className={"flex-1"} >
        <ColorModeSwitch />
    </AppView>
  );
};

export default AppServices;
