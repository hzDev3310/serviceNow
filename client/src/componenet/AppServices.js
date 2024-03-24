import ColorModeSwitch from "./ColorModeSwitch";
import { useDarkMode } from "../store";
import AppView from "./AppView";
import AppText from "./AppText";

const AppServices = () => {
  const { darkMode } = useDarkMode();
  return (
    <AppView className={"flex-1"}>
      <ColorModeSwitch />
      <AppText>hamza</AppText>
    </AppView>
  );
};

export default AppServices;
