import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen } from "../screens";
import ServiceProviderScreen from "../screens/ServiceProviderScreen";
const Stack = createStackNavigator();
const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="home" component={HomeScreen} />
      <Stack.Screen
        name="ServiceProviderScreen"
        component={ServiceProviderScreen}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
