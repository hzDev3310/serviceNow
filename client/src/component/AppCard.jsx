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
import { reverseGeocodeAsync } from "expo-location";

const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;

const AppCard = ({ data }) => {
  const navigation = useNavigation();
const [city,setCity] = React.useState('');
  const add = async () => {
    try {
      let address = await reverseGeocodeAsync({
        latitude: parseFloat(data.location.latitude),
        longitude: parseFloat(data.location.longitude),
      });
  
      // Extract city name from the address
      const city = address[0].city;
  
      return city;
    } catch (error) {
      console.error("Error fetching address:", error);
      return null;
    }
  };
  
  // Using an async function to await the result of add()
  const getAddress = async () => {
    const City = await add();
    setCity(City)
    return city;
  };
  
  getAddress(); //
  return (
    <TouchableRipple
      onPress={() => {
        navigation.navigate("ServiceProviderScreen", { data: data });
      }}
    >
      <>
        <View
          style={{
            margin: 10,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            border: 2,
            borderColor: "rgb(0, 0, 0)",
            borderWidth: 2,
            padding: 20,
          }}
        >
          <Image source={{ uri: data.profilPic }} width={100} height={100} />
          <View>
            <Text>name : {data.name}</Text>
            <Text>service : {data.service.serviceName}</Text>
            <Text>name : {data.phoneNumber.number}</Text>
            <Text>rating : {data.service.rating.average}</Text>
            <Text>city : {city}</Text>
          </View>
        </View>
    
      </>
    </TouchableRipple>
  );
};

export default AppCard;
