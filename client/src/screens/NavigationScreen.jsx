
import React from "react";
import { BottomNavigation } from "react-native-paper";
import { HomeScreen, ChatScreen, ProfilScreen } from "./";
import Text from 'react-native';

const HomeRoute = () => <HomeScreen />;

const chatRoute = () => <ChatScreen />;

const notificationRoute = () => <Text>notif</Text>;
const profilRoute = () => {
  return <ProfilScreen />;
};

const NavigationScreen = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "home", title: "home", focusedIcon: "home" },
    { key: "profil", title: "profil", focusedIcon: "account" },
    { key: "chat", title: "chat", focusedIcon: "chat" },
    { key: "notification", title: "notification", focusedIcon: "bell" },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: HomeRoute,
    profil: profilRoute,
    chat: chatRoute,
    notification: notificationRoute,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default NavigationScreen;

