import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeStack, AccountStack, ChatStack } from "./";

const Tab = createBottomTabNavigator();

const TabNaviagtion = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen name="homeStack" component={HomeStack} />
      <Tab.Screen name="accountStack" component={AccountStack} />
      <Tab.Screen name="chatStack" component={ChatStack} />
    </Tab.Navigator>
  );
};

export default TabNaviagtion;
