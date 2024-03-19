import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import { format } from 'timeago.js';

const ChatScreen = ({ navigation, route }) => {
  const messages = route.params.data.message;
  const img = (id) => {
    if (id === route.params.data.userId) {
      return route.params.data.userPic;
    } else {
      return route.params.data.senderPic;
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#f0f" }}>
      {messages.map((message, index) => {
        return (
          <View
            key={index}
            style={
              message.sender === route.params.data.userId
                ? styles.user
                : styles.sender
            }
          >
            <Image
              source={{
                uri: img(message.sender),
              }}
              width={100}
              height={100}
              borderRadius={50}
            />
            <View style={styles.messageContainer}>
              <Text >{message.content}</Text>
              <Text  >{format(message.updatedAt, { locale: 'ar-TN' })}</Text>
            </View>
          </View>
        );
      })}
      <TextInput placeholder="new message" />
      <Button backgroundColor="#fff">send</Button>
    </View>
  );
};

const styles = StyleSheet.create({
  sender: {
    width: "100%",
    display: "flex",
    flexDirection: "row-reverse",
    border: 2,
    borderColor: "rgb(0, 0, 0)",
    borderWidth: 2,
    alignItems: "center",
  },
  user: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "start",
    border: 2,
    borderColor: "rgb(0, 0, 250)",
    borderWidth: 2,
    alignItems: "center",
    
  },
  messageContainer: {
    marginLeft: 10, 
  },
});

export default ChatScreen;
