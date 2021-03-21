import React from "react";
import { Map, GoogleApiWrapper, Marker, MapContainer } from "google-maps-react";

const GoogleMap = () => {
  const mapStyles = {
    width: "100%",
    height: "100%",
  };
  return (
    <Map
      google={this.props.google}
      zoom={8}
      style={mapStyles}
      initialCenter={{ lat: 47.444, lng: -122.176 }}
    >
      <Marker position={{ lat: 48.0, lng: -122.0 }} />
    </Map>
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyBaliWO4YH9qgR2ZFAfXO1zoDrd3qO4EkY",
})(MapContainer);
