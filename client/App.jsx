import { NavigationContainer } from "@react-navigation/native";

import { PaperProvider } from "react-native-paper";
import { StatusBar } from "react-native";
import NavigationTab from "./src/navigation/NavigationTab";

function App() {
  return (
    <PaperProvider>
      <StatusBar></StatusBar>
      <NavigationContainer>
        <NavigationTab />
      </NavigationContainer>
    </PaperProvider>
  );
}

export default App;
