import * as React from "react";
import {
  Avatar,
  Button,
  Card,
  Text,
  TouchableRipple,
} from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { Image, View } from "react-native";

const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;

const AppCard = ({ data }) => {
  const navigation = useNavigation();

  const service = data.service;

  return (
    <TouchableRipple
      onPress={() => {
        navigation.navigate("ServiceProviderScreen", { data: data });
      }}
    >
      <View
        style={{
          margin: 10,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          border : 2,
          borderColor : "rgb(0, 0, 0)",
          borderWidth : 2,
          padding :20
        }}
      >
        <Image source={{ uri: data.profilPic }} width={100} height={100} />
        <View>
          <Text>name : {data.name}</Text>
          <Text>service : {data.service.serviceName}</Text>
          <Text>location : {data.location.city}</Text>
          <Text>name : {data.phoneNumber.number}</Text>
        </View>
      </View>
    </TouchableRipple>
  );
};

export default AppCard;
