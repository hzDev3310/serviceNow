// ConversationScreen.js
import React, { useState } from "react";
import { View, FlatList } from "react-native";

import { useGet } from "../apis";
import ChatCard from "../component/ChatCard";

const ConversationScreen = () => {

  const { data } = useGet("/messages/65f45202af0595e661031885");
  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => <ChatCard conversation={item} />}
      />
    </View>
  );
};

export default ConversationScreen;
