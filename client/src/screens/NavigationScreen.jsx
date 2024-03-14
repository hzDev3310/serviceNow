import * as React from "react";
import { BottomNavigation, Text } from "react-native-paper";
import { ServicesScreen, ChatScreen, ProfilScreen } from ".";

const HomeRoute = () => <ServicesScreen />;

const chatRoute = () => <ChatScreen />;

const notifcationRoute = () => <Text>notif</Text>;
const profilRoute = () => {
  return <ProfilScreen />;
};

const NavigationScreen = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "profil", title: "profil", focusedIcon: "account" },
    { key: "home", title: "home", focusedIcon: "home" },
    { key: "chat", title: "chat", focusedIcon: "chat" },
    { key: "notfication", title: "notifcation", focusedIcon: "bell" },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: HomeRoute,
    profil: profilRoute,
    chat: chatRoute,
    notfication: notifcationRoute,
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
