import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import useServices from '../hooks/useServices';


const Home = () => {
  const { data, loading, error } = useServices('/users');

  if (loading) {
    return <ActivityIndicator size="large" />;
  }

  if (error) {
    return <Text>Error: {error.message}</Text>;
  }

  return (
    <View>
      {data && <Text>{data[0].phoneNumber.number}</Text>}
    </View>
  );
};

export default Home;
