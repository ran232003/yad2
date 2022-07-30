import { GoogleMap, LoadScript } from "@react-google-maps/api";
import React, { useState } from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import "./getLocation.css";
const containerStyle = {
  width: "400px",
  height: "400px",
};
const GetLocation = (props) => {
  const [address, setAddress] = useState("");
  const [coordinates, setCoordinates] = useState({
    lat: null,
    lng: null,
  });
  let api = "AIzaSyCOaIaByGKKP_WNf3ifid2n2XgG7bXfkpI";

  const [location, setLocation] = useState({});
  const [showLocation, setShowLocation] = useState(false);
  const handleSelect = async (value) => {
    const results = await geocodeByAddress(value);
    const latLng = await getLatLng(results[0]);
    setAddress(value);
    console.log(latLng);
    setCoordinates(latLng);
    setShowLocation(true);
  };
  const handleChange = async (value) => {};
  console.log("cehck", coordinates, showLocation, address);
  return (
    <div className="mainFlex">
      get
      <div className="serachLocation">
        <PlacesAutocomplete
          value={address}
          onChange={setAddress}
          onSelect={handleSelect}
        >
          {({
            getInputProps,
            suggestions,
            getSuggestionItemProps,
            loading,
          }) => (
            <div>
              <p>Latitude: {coordinates.lat}</p>
              <p>Longitude: {coordinates.lng}</p>

              <input {...getInputProps({ placeholder: "Type address" })} />

              <div>
                {loading ? <div>...loading</div> : null}

                {suggestions.map((suggestion) => {
                  const style = {
                    backgroundColor: suggestion.active ? "#41b6e6" : "#fff",
                  };

                  return (
                    <div
                      key={suggestion.placeId}
                      {...getSuggestionItemProps(suggestion, { style })}
                    >
                      {suggestion.description}
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </PlacesAutocomplete>
      </div>
      <div>
        display map:
        {showLocation === true ? (
          <div>
            asd
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={coordinates}
              zoom={11}
            >
              {/* Child components, such as markers, info windows, etc. */}
              <></>
            </GoogleMap>
          </div>
        ) : null}
      </div>
    </div>
  );
};
export default GetLocation;
