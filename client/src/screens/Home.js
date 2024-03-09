import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import useGet from '../hooks/useGet.js';
import Card from '../component/Card.js';


const Home = () => {
  const { data, loading, error } = useGet('/users/all');

  if (loading) {
    return <ActivityIndicator size="large" />;
  }

  if (error) {
    return <Text>Error: {error.message}</Text>;
  }

  return (
    <View>
      
      {data.message ? (<Text>EORRR</Text>) : data.map((item, index) => (
        <Card key={index} data={item} /> 
      ))}
    </View>
  );
};

export default Home;
