import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const ServiceProviderScreen = ({ route }) => {
  const { data } = route.params;
  const navigation = useNavigation();

  return (
    <>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>Go Back</Text>
      </TouchableOpacity>
      <Text>{JSON.stringify(data)}</Text>
    </>
  );
};

export default ServiceProviderScreen;
