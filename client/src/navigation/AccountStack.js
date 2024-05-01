import { createStackNavigator } from "@react-navigation/stack";
import { UpdateImageScreen, ProfilScreen } from "../screens";



function AccountStack() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="profil" component={ProfilScreen} />
      <Stack.Screen  options={{
         headerShown: true,
         headerTitle : ""
      }} name="updateImage" component={UpdateImageScreen} />
    </Stack.Navigator>
  );
}
export default AccountStack;