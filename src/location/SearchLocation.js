import React, { useState } from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import GetLocation, { getLocation } from "./getLocation";
import MyLocation from "./MyLocation";
const SearchLocation = (props) => {
  const [showLocation, setShowLocation] = useState(false);
  let api = "AIzaSyCOaIaByGKKP_WNf3ifid2n2XgG7bXfkpI";
  return (
    <div>
      <GetLocation />
    </div>
  );
};

export default SearchLocation;
