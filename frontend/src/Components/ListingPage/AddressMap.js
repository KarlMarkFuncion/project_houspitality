import React, { useEffect, useState } from "react";
import { useLoadScript, GoogleMap, MarkerF } from "@react-google-maps/api";
import useStore from "../../Store/useStore";

const AddressMap = () => {
  const [center, setCenter] = useState({ lat: 37.774929, lng: -122.419416 }); // Default center for the map
  const { currentListing } = useStore();

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY_1,
  });

  const address = `${currentListing.addressLine1} ${currentListing.addressLine2} ${currentListing.city} ${currentListing.province} ${currentListing.zipCode}`; // Replace with the zip code you want to geocode

  useEffect(() => {
    const apiKey = process.env.REACT_APP_GOOGLE_API_KEY_1;
    fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${apiKey}`
    )
      .then((response) => response.json())
      .then((data) => {
        const location = data.results[0].geometry.location;
        setCenter({ lat: location.lat, lng: location.lng });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [address]);

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <div>
      <GoogleMap
        mapContainerStyle={{ width: "100%", height: "600px" }}
        center={center}
        zoom={15}
      >
        <MarkerF position={center} />
      </GoogleMap>
    </div>
  );
};

export default AddressMap;
