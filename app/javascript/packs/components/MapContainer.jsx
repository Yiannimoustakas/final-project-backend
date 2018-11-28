import React, {Component} from 'react';
import MapConfig from './MapConfig';

class MapContainer extends Component{
  render(){
    const google_URL = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCYA7hXRCqJ0d9ZAnNzSW_gd05GcNO6AGc&v=3'

		return (
			<MapConfig
				items={this.props.items}
				googleMapURL={google_URL}
				loadingElement={<div style={{ height: `100vh` }} />}
				containerElement={<div style={{ height: '400px' }}></div>}
				mapElement={<div style={{ height: `100%` }} />}
			/>
		);
  }
}

export default MapContainer
