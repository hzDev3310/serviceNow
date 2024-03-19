import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, View } from "react-native";
import { Text, TouchableRipple } from "react-native-paper";

const MessagesCard = ({ props }) => {
    const navigation = useNavigation();
  const curntUserId =
    props.users[0].id === "65f45202af0595e661031885"
      ? props.users[0].id
      : props.users[1].id;
  const userId =
    props.users[0].id === "65f45202af0595e661031885"
      ? props.users[1].id
      : props.users[0].id;
  const user = props.users.find((user) => user.id === userId);
  const currnetUser =props.users.find((user) => user.id === curntUserId);
  const messages = {
    currnetUser,
    user,
    messages : props.messages
  }

  return (
    <TouchableRipple
      style={{
        border: 4,
        borderColor: "black",
        borderWidth: 2,
        borderRadius: 4,
        margin: 20,
        padding: 20,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      }}
      onPress={() => {
        navigation.navigate("chat", { data: messages });
      }}
    >
      <>
        <Image
          source={{ uri: user.profilPic }}
          width={100}
          height={100}
          borderRadius={50}
        />
        <Text style={{ margin: 5 }}>{JSON.stringify(user.name)}</Text>
      </>
    </TouchableRipple>
  );
};

export default MessagesCard;
