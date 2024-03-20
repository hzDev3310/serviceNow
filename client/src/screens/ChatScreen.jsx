import React, { useEffect, useRef, useState } from "react";
import { Image, ScrollView, StyleSheet, View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import { format } from "timeago.js";
import useUpdate from "../apis/useUpdate";

const ChatScreen = ({ navigation, route }) => {
  const [refreshKey, setRefreshKey] = useState(0);

  const refreshComponent = () => {
    setRefreshKey(prevKey => prevKey + 1);
  };
  const id = route.params.data.id;
  const [newMsg, setNewMsg] = useState("");
  const { updateData, responseData, error, loading } = useUpdate();
  const handelupdate = async () => {
    await updateData("/messages", {
      sender: route.params.data.userId,
      convId: id,
      content: newMsg,
    });
    refreshComponent()
  };
  const messages = route.params.data.message;
  const img = (id) => {
    if (id === route.params.data.userId) {
      return route.params.data.userPic;
    } else {
      return route.params.data.senderPic;
    }
  };

  const scrollViewRef = useRef();

  useEffect(() => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollToEnd({ animated: true });
    }
  }, [route.params.data]);

  return (
    <View style={{ flex: 1, backgroundColor: "#f0f" }}>
      <ScrollView ref={scrollViewRef} >
        <>
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
                  <Text>{message.content}</Text>
                  <Text>{format(message.updatedAt, { locale: "ar-TN" })}</Text>
                </View>
              </View>
            );
          })}
        </>
      </ScrollView>
      <TextInput
        placeholder="new message"
        onChangeText={setNewMsg}
        value={newMsg}
      />
      <Button backgroundColor="#fff" onPress={handelupdate}>
        send
      </Button>
      <Text>{JSON.stringify(responseData)} </Text>
      <Text>{JSON.stringify(error)} </Text>
      <Text>{JSON.stringify(loading)} </Text>
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
