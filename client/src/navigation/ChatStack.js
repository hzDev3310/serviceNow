import { createStackNavigator } from "@react-navigation/stack";
import { ChatScreen, ConversationScreen} from "../screens";

const Stack = createStackNavigator();
const ChatStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="chat" component={ChatScreen} />
      <Stack.Screen name="conv" component={ConversationScreen} />
    
    </Stack.Navigator>
  );
};

export default ChatStack;
