import { Image, Text, View } from "react-native";

export default function Card({data}) {
 
  return (
    <View>
      <Text>name: {JSON.stringify(data.name)}</Text>
       <Text>{data.phoneNumber.number}</Text>
      <Text>{data.location.city}</Text>
      <Text>{data.service.rating.average}</Text>
      <Text>{data.service.description}</Text>
      <Text>{data.service.experience}</Text>
      <Text>{data.service.availability.to}</Text> 
    
      <Image width={100} height={100} source={{ uri: data.profilPic }} />

    </View>
  );
}