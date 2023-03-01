import { GoogleMap, Marker } from "@react-google-maps/api";
import { useState } from "react";

const center = {
  lat: 46.0569465,
  lng: 14.505751499999974,
};

const options = {
  disableDefaultUI: true,
  clickableIcons: false,
};

const Map = ({ onMarkerChange }: any) => {
  const [marker, setMarker] = useState<any>();

  //show marker clicked on map
  const onMapClick = (e: any) => {
    const clickedLocation = {
      lat: e.latLng.lat(),
      lng: e.latLng.lng(),
    };
    setMarker(clickedLocation);
    getLocName(clickedLocation);
  };

  const geocoder = new google.maps.Geocoder();

  // get location name to input
  const getLocName = (loc: any) => {
    geocoder
      .geocode({ location: loc })
      .then((response) => {
        if (response.results[0]) {
          onMarkerChange(response.results[0].formatted_address, loc);
        } else {
          alert("No results found");
        }
      })
      .catch((e) => alert("Geocoder failed due to: " + e));
  };

  return (
    <>
      <GoogleMap
        center={center}
        zoom={12}
        mapContainerStyle={{ width: "100%", height: "100%" }}
        options={options}
        onClick={onMapClick}
      >
        {marker && (
          <Marker
            position={{
              lat: marker.lat,
              lng: marker.lng,
            }}
          />
        )}
      </GoogleMap>
    </>
  );
};

export default Map;
