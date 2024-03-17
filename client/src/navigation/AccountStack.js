import { createStackNavigator } from "@react-navigation/stack";
import { LoginScreen, ProfilScreen, SignupScreen } from "../screens";

const Stack = createStackNavigator();
const AccountStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="profil" component={ProfilScreen} />
      <Stack.Screen name="login" component={LoginScreen} />
      <Stack.Screen name="signup" component={SignupScreen} />
    </Stack.Navigator>
  );
};

export default AccountStack;
