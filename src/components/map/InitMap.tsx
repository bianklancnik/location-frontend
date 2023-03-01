import { useJsApiLoader } from "@react-google-maps/api";
import Map from "./Map";

const InitMap = ({ onMarkerChange }: any) => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY || "",
  });
  if (!isLoaded) return <div>Loading...</div>;
  return <Map onMarkerChange={onMarkerChange} />;
};

export default InitMap;
