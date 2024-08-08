import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const mapStyles = [
  { "featureType": "all", "elementType": "labels.text.fill", "stylers": [{ "color": "#00a77f" }] },
  { "featureType": "all", "elementType": "labels.text.stroke", "stylers": [{ "visibility": "off" }] },
  { "featureType": "all", "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] },
  { "featureType": "administrative", "elementType": "geometry.fill", "stylers": [{ "color": "#121212" }] },
  { "featureType": "administrative", "elementType": "geometry.stroke", "stylers": [{ "color": "#121212" }, { "weight": 1.2 }] },
  { "featureType": "administrative.locality", "elementType": "geometry.fill", "stylers": [{ "lightness": "-1" }] },
  { "featureType": "administrative.neighborhood", "elementType": "labels.text.fill", "stylers": [{ "lightness": "0" }, { "saturation": "0" }] },
  { "featureType": "administrative.neighborhood", "elementType": "labels.text.stroke", "stylers": [{ "weight": "0.01" }] },
  { "featureType": "administrative.land_parcel", "elementType": "labels.text.stroke", "stylers": [{ "weight": "0.01" }] },
  { "featureType": "landscape", "elementType": "geometry", "stylers": [{ "color": "#121212" }] },
  { "featureType": "poi", "elementType": "geometry", "stylers": [{ "color": "#000000" }] },
  { "featureType": "road", "elementType": "geometry.stroke", "stylers": [{ "visibility": "off" }] },
  { "featureType": "road.highway", "elementType": "geometry.fill", "stylers": [{ "color": "#000000" }] },
  { "featureType": "road.highway.controlled_access", "elementType": "geometry.stroke", "stylers": [{ "color": "#000000" }] },
  { "featureType": "road.arterial", "elementType": "geometry", "stylers": [{ "color": "#121212" }] },
  { "featureType": "road.local", "elementType": "geometry", "stylers": [{ "color": "#121212" }] },
  { "featureType": "transit", "elementType": "geometry", "stylers": [{ "color": "#121212" }] },
  { "featureType": "water", "elementType": "geometry", "stylers": [{ "color": "#000000" }] },
  { "featureType": "water", "elementType": "geometry.fill", "stylers": [{ "color": "#353535" }] }
];

const mapContainerStyle = {
  width: '100%',
  height: '500px'
};

const center = {
  lat: 53.554781102481215,
  lng: 9.967709399906724
};

const Contact = () => {
  return (
    <LoadScript googleMapsApiKey="YOUR_API_KEY">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={15}
        options={{ styles: mapStyles }}
      />
    </LoadScript>
  );
}

export default Contact;
