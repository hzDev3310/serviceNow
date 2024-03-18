import React, { useEffect } from "react";
import { View, Text, ActivityIndicator } from "react-native";

import Card from "../component/AppCard.jsx";

import useLocation from "../hooks/useLocation.js";
import useGet from "../apis/useGet.js";

const ServicesScreen = () => {
  const {locationData} = useLocation();
  const lat = locationData.latitude;
  const long = locationData.longitude;
  const { data, loading, error,  } = useGet(`/users/${lat}/${long}`); 



  if (loading) {
    return <ActivityIndicator size="large" />;
  }

  if (error) {
    return <Text>Error: {error}</Text>; 
  }

  return (
    <View>
      {data.map((item, index) => (
        <Card key={index} data={item} />
      ))}
    </View>
  );
};

export default ServicesScreen;
