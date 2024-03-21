
import { StatusBar, View } from "react-native";
import AppView from "./AppView";

const AppSafeView = ({ children, ...otherProps }) => {

  return (
    <AppView  {...otherProps}>
        <StatusBar />
      {children}
    </AppView>
  );
};

export default AppSafeView;