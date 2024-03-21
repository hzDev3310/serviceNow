import { createMaterialBottomTabNavigator } from "react-native-paper/react-navigation";

import { HomeStack, AccountStack, ChatStack } from "./";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Tab = createMaterialBottomTabNavigator();

const NavigationTab = () => {
  return (
    <Tab.Navigator>
    
      <Tab.Screen  name="Account"
        component={AccountStack}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}/>
      <Tab.Screen name="Home" component={HomeStack} options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }} />
          <Tab.Screen  name="Chat"
        component={ChatStack}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="chat" color={color} size={26} />
          ),
        }}/>
    </Tab.Navigator>
  );
};

export default NavigationTab;
