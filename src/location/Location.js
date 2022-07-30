import React, { useState } from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import GetLocation, { getLocation } from "./getLocation";
import MyLocation from "./MyLocation";

const containerStyle = {
  width: "400px",
  height: "400px",
};

const center = {
  lat: -3.745,
  lng: -38.523,
};
const Location = (props) => {
  const [showLocation, setShowLocation] = useState(false);
  let api = "AIzaSyCOaIaByGKKP_WNf3ifid2n2XgG7bXfkpI";
  return (
    <div>
      location
      <MyLocation />
      <GetLocation />
    </div>
  );
};

export default Location;
