import { useEffect, useState } from 'react';
import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';

const GoogleMapComponent = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'PLACE_YOUR_GOOGLE_API_KEY'
  });

  const [location, setLocation] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => {
          console.error('Error getting location:', error);
        },
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }, []);

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <GoogleMap
      center={location || { lat: 37.7749, lng: -122.4194 }} // Default to SF if no location
      zoom={15}
      mapContainerStyle={{ width: '100%', height: '400px' }}>
      {location && <Marker position={location} />}
    </GoogleMap>
  );
};

export default GoogleMapComponent;