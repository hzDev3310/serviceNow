import * as React from "react";
import { BottomNavigation, Text } from "react-native-paper";
import { HomeScreen } from "../screens";
import ChatScreen from "../screens/ChatScreen";

const HomeRoute = () => <HomeScreen />

const chatRoute = () => <ChatScreen />

const profilRoute = () => <Text>profil</Text>;

const Navbar = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {
      key: "home",
      title: "Favorites",
      focusedIcon: "home",
      unfocusedIcon: "heart-outline",
    },
    { key: "chat", title: "chat", focusedIcon: "chat" },
    { key: "profil", title: "profil", focusedIcon: "account" },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: HomeRoute,
    chat: chatRoute,
    profil: profilRoute,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default Navbar;
