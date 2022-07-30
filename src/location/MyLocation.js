import React, { useEffect, useState } from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import { getLocation } from "./getLocation";

const containerStyle = {
  width: "400px",
  height: "400px",
};

const center = {
  lat: -3.745,
  lng: -38.523,
};
const MyLocation = (props) => {
  const [showLocation, setShowLocation] = useState(false);
  const [location, setLocation] = useState({});
  const getMyLocation = (foo) => {
    let pos = {};
    pos = navigator.geolocation.getCurrentPosition(function (position) {
      setLocation({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
      console.log("after foo");
    });
    return pos;
  };

  useEffect(() => {
    getMyLocation();
  }, []);
  console.log(location);
  let api = "AIzaSyCOaIaByGKKP_WNf3ifid2n2XgG7bXfkpI";
  return (
    <div>
      <LoadScript googleMapsApiKey={api}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={location}
          zoom={11}
        >
          {/* Child components, such as markers, info windows, etc. */}
          <></>
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default MyLocation;
