import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { useEffect, useRef } from "react";
import { TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as Animatable from "react-native-animatable";
import { HomeStack, AccountStack, ChatStack } from "./";
import { useDarkMode } from "../store";
const TabArr = [
  { route: "Home", label: "Home", component: HomeStack, icon: "home" },
  { route: "Chats", label: "chats", component: ChatStack, icon: "chat" },
  {
    route: "Account",
    label: "Account",
    component: AccountStack,
    icon: "account",
  },
];

const Tab = createBottomTabNavigator();

const TabButton = ({ item, onPress, accessibilityState }) => {
  const focused = accessibilityState.selected;
  const viewRef = useRef(null);

  useEffect(() => {
    if (focused) {
      viewRef.current.animate({
        0: { scale: 0.5, rotate: "0deg" },
        1: { scale: 1.5, rotate: "360deg" },
      });
    } else {
      viewRef.current.animate({
        0: { scale: 1.5, rotate: "360deg" },
        1: { scale: 1, rotate: "0deg" },
      });
    }
  }, [focused]);

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={1}
      className={`flex flex-1 justify-center items-center `}
       
    >
      <Animatable.View ref={viewRef} duration={1000}>
        <MaterialCommunityIcons
          name={item.icon}
          size={24}
          color={focused ? "blue" : "gray"}
        />
      </Animatable.View>
    </TouchableOpacity>
  );
};

export default function AnimTab1() {
  return (
    <View style={{ flex: 1 }}>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            height: 60,
            position: "absolute",
            margin: 16,
            borderRadius: 16,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor : useDarkMode().darkMode ? "black" : "white",
            borderTopColor : useDarkMode().darkMode ? "black" : "white",
          },
        }}
      >
        {TabArr.map((item, index) => (
          <Tab.Screen
            key={index}
            name={item.route}
            component={item.component}
            options={{
              tabBarShowLabel: false,
              tabBarButton: (props) => <TabButton {...props} item={item} />,
            }}
          />
        ))}
      </Tab.Navigator>
    </View>
  );
}
