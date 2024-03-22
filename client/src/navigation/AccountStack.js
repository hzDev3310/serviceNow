import { createStackNavigator } from '@react-navigation/stack';
import { ProfilScreen , LoginScreen ,RegisterScreen } from "../screens";
const Stack = createStackNavigator();

function AccountStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="profil" component={ProfilScreen} />
      <Stack.Screen name="login" component={LoginScreen} />
      <Stack.Screen name="register" component={RegisterScreen} />
    </Stack.Navigator>
  );
}
export default AccountStack;