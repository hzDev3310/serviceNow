import * as React from 'react';
import { Avatar, Button, Card, Text, TouchableRipple } from 'react-native-paper';
import { useNavigation } from "@react-navigation/native";
import { HomeScreen } from '../screens';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const AppCard = ({ data }) => {
  const navigation = useNavigation(); // Hook to access navigation object

  const service = data.service;

  return (
    <TouchableRipple onPress={() => { console.log("ok") }}>
      <Card>
        <Card.Title title={service.serviceName} subtitle="Card Subtitle" left={LeftContent} />
        <Card.Content>
          <Text variant="titleLarge">name:</Text>
          <Text variant="bodyMedium">{data.name}</Text>
        </Card.Content>
        <Card.Cover source={{ uri: data.profilPic }} />
        <Card.Actions>
          <Button>Cancel</Button>
          <Button onPress={() => { navigation.navigate('ServiceProviderScreen', { data: data }) }}>Ok</Button>
        </Card.Actions>
      </Card>
    </TouchableRipple>
  );
}

export default AppCard;
