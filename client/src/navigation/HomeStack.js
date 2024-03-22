import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen } from "../screens";
const Stack = createStackNavigator()
function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="home" component={HomeScreen} />
    </Stack.Navigator>
  );
}
export default HomeStack;
