// ConversationCard.js
import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { useGet } from "../apis";
import { useNavigation } from "@react-navigation/native";

const ChatCard = ({ conversation }) => {

  const navigation = useNavigation();
  const users = conversation.users;
  const userId = "65f45202af0595e661031885";
  const otherUserID = users.find((user) => user !== "65f45202af0595e661031885");

  const userResponse = useGet(`/users/${userId}`);
  const otherUserResponse = useGet(`/users/${otherUserID}`);

  const user = userResponse.data && userResponse.data[0];
  const otherUser = otherUserResponse.data && otherUserResponse.data[0];

  const chat = {
    id : conversation._id,
    senderPic: otherUser ? otherUser.profilPic || " " : " ",
    senderName: otherUser ? otherUser.name || " " : " ",
    otherUserID,
    userId,
    userPic: user ? user.profilPic || " " : " ",
    userName: user ? user.name || " " : " ",
    message: conversation.messages || " ",
  };

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("chat", { data: chat });
      }}
    >
      <View>
        <Image
          borderRadius={50}
          source={{ uri: chat.senderPic }}
          width={100}
          height={110}
        />
        <Text>{JSON.stringify(otherUser?.name)}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ChatCard;
