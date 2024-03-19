import { Appbar, IconButton } from "react-native-paper";
import * as React from "react";
import { Modal, Portal, Text } from "react-native-paper";
import {useNotif} from "../store";

const AppBar = () => {
  const {notif, setNotif } = useNotif();

  return (
    <Appbar.Header>
      
      <Appbar.Content title="ServiceNow" />

      <IconButton icon={!notif ? "bell"  : "close"} size={20} onPress={() => setNotif()} />
    </Appbar.Header>
  );
};

export default AppBar;
