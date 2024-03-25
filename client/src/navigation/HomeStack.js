import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen } from "../screens";
const Stack = createStackNavigator();
function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="home screen" component={HomeScreen} />
    </Stack.Navigator>
  );
}
export default HomeStack;
