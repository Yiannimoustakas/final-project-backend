import React, {Component} from 'react';
import MapConfig from './MapConfig';

const google_API = 'AIzaSyCYA7hXRCqJ0d9ZAnNzSW_gd05GcNO6AGc'

const google_URL = `https://maps.googleapis.com/maps/api/js?key=${google_API}&v=3`

class MapContainer extends Component{
  constructor(){
    super();
  }
  render(){

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
