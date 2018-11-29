import React, {Component} from 'react';
// import { withScriptjs, withGoogleMap, GoogleMap } from 'react-google-maps';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import MapMarker from "./MapMarker";

const MapConfig = withScriptjs(withGoogleMap((props) =>{

  return (
    <GoogleMap
    defaultZoom={12}
    center={
      {lat: parseFloat(props.items[0].latitude), lng: parseFloat(props.items[0].longitude)}
    }
    clickableIcons={true}
    >
      {
        props.items.map(item => (
          <Marker
            key={item.id}
            position={{lat: parseFloat(item.latitude), lng: parseFloat(item.longitude)}}
          />
        ))
      }
    </GoogleMap>
  );
})
)

export default MapConfig
