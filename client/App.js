import { NavigationContainer } from "@react-navigation/native";
import AppTab from "./src/navigation/AppTab";
import { PaperProvider } from 'react-native-paper';
export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <AppTab />
      </NavigationContainer>
    </PaperProvider>
  );
}
