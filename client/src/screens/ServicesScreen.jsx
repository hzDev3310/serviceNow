import React, { useEffect } from "react";
import { View, Text, ActivityIndicator } from "react-native";

import Card from "../component/AppCard.jsx";
import usePost from "../hooks/usePost.js";
import useLocation from "../hooks/useLocation.js";

const ServicesScreen = () => {
  const { data, loading, error, postData } = usePost("/users"); 
  const {locationData} = useLocation();

  useEffect(() => {
    postData({
      latitude: locationData.latitude,
      longitude: locationData.longitude,
    });
  }, []);

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
