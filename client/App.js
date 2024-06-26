import { NavigationContainer } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import AppTab from "./src/navigation/AppTab";
import useTheme from "./src/hooks/useTheme";
import { useEffect } from "react";
import { useCurrentUser, useIsLogin } from "./src/store";
import { AuthStack } from "./src/navigation";
import { createStackNavigator } from "@react-navigation/stack";
import { OfferServiceScreen, ViewImageScreen } from "./src/screens";
import ReportScreen from "./src/screens/ReportScreen";



export default function App() {
  const Stack = createStackNavigator();

  const { isLogin, setIsLogin } = useIsLogin()
  const { setCurrentUser } = useCurrentUser()
  
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('token');
      console.log(value)
      if (value !== null) {
        setCurrentUser(JSON.parse(value))
        console.log("login")
        setIsLogin(true)
      } else {
        console.log("Token not found in AsyncStorage.");
        setCurrentUser(null)
        console.log("not login")
        setIsLogin(false)
      }
    } catch (e) {
      console.log("Error occurred while fetching token:", e);
      setCurrentUser(null)
      console.log("")
    }
  };
  useEffect(() => {
    getData()
  }, [isLogin])

  const { theme } = useTheme();
  return (
    <GestureHandlerRootView className="flex flex-1" >
      <NavigationContainer theme={theme}>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="app" component={AppTab} />
          <Stack.Screen name="auth" component={AuthStack} />
          <Stack.Screen options={{ headerShown: true, headerTitle: "" }} name="image" component={ViewImageScreen} />
          <Stack.Screen
            name="report"
            component={ReportScreen}
            options={{
              headerShown: true ,
              headerTitle: "Report",
              headerTitleAlign: "center"
            }}
          />
        </Stack.Navigator>
    
      </NavigationContainer>
    </GestureHandlerRootView>


  );
}




