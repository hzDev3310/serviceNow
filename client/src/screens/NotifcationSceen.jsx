import React from "react";
import { IconButton, Text } from "react-native-paper";
import useNotif from "../store";

const NotifcationSceen = () => {
  const { setNotif } = useNotif();
  return (
    <>
  
      <Text>notif</Text>
    </>
  );
};

export default NotifcationSceen;
