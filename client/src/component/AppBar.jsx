import * as React from 'react';
import { Appbar } from 'react-native-paper';

const AppBar = () => (
  <Appbar.Header >

    <Appbar.Content title="ServiceNow" />
    <Appbar.Action icon="account"/>
  </Appbar.Header>
);

export default AppBar;