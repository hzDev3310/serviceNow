import React from 'react';
import { Text } from 'react-native-paper';

const ServiceProviderScreen = ({ route }) => {
  const { data } = route.params;

  return (
    <Text>{JSON.stringify(data)}</Text>
  );
};

export default ServiceProviderScreen;
