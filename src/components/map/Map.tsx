import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

const center = {
  lat: 46.0569465,
  lng: 14.505751499999974,
};

const Map = () => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY || "",
  });

  return (
    <>
      {isLoaded ? (
        <GoogleMap
          center={center}
          zoom={13}
          mapContainerStyle={{ width: "100%", height: "100%" }}
        ></GoogleMap>
      ) : (
        <div>Map can not be loaded</div>
      )}
    </>
  );
};

export default Map;
