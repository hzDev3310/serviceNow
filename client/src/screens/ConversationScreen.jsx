import React from "react";
import { Button, Text } from "react-native-paper";
import { useUserID } from "../store";
import { useGet } from "../apis";

const ConversationScreen = () => {
  const { id } = useUserID();
  console.assert(data)
  const { data, error, loading } = useGet(`/messages/${id}`);
  return (
    <>
      <Text>{JSON.stringify(data)} </Text>
      <Text>{JSON.stringify(error)} </Text>
      <Text>{JSON.stringify(loading)} </Text>

    </>
  );
};

export default ConversationScreen;
