import React, {Component} from 'react';
// import { withScriptjs, withGoogleMap, GoogleMap } from 'react-google-maps';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import MapMarker from "./MapMarker";

const MapConfig = withScriptjs(withGoogleMap(props =>{

  const markers = props.items.map(item => {
    <Marker
      key={item.id}
      position={{lat: parseFloat(item.latitude), lng: parseFloat(item.longitude)}}
    />
  })

  return (
    <GoogleMap
    defaultZoom={13}
    center={
      {lat: parseFloat(props.items[0].latitude), lng: parseFloat(props.items[0].longitude)}
    }
    clickableIcons={true}
    >
      {markers}
    </GoogleMap>
  );
})
)

export default MapConfig
