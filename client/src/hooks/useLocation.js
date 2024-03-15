import * as Location from "expo-location";
import { useCity } from "../store";
import { useEffect } from "react";

const useLocation = () => {
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.error("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      let { latitude, longitude } = location.coords;

      let address = await Location.reverseGeocodeAsync({ latitude, longitude });
      useCity.setState({ cityName: address[0].city });
    })();
  }, []);
};
export default useLocation;
