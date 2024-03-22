import * as Location from "expo-location";
import { useEffect, useState } from "react";


const useLocation = () => {
  const [locationData, setLocationData] = useState({
    latitude: null,
    longitude: null,
    cityName: null,
  });

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
      const cityName = address[0].city;

      setLocationData({
        latitude,
        longitude,
        cityName
      });
    })();
  }, []);

  return {locationData};
};

export default useLocation;
