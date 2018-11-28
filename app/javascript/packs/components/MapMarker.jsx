import React, {Component} from 'react';
import { Marker } from "react-google-maps";


class MapMarker extends Component{
  render(){
    return(
        <Marker
          position={this.props.location}
          icon={`../assets/images/maps-icon.png`}
        />
    );
  }
}

export default MapMarker
