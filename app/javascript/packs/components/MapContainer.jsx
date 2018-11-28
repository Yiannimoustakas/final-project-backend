import React, {Component} from 'react';
import MapConfig from './MapConfig';

class MapContainer extends Component{
  render(){
    const google_URL = GOOGLE_MAPS_API_KEY

		return (
			<MapConfig
				items={this.props.items}
				googleMapURL={GOOGLE_MAPS_API_KEY}
				loadingElement={<div style={{ height: `100vh` }} />}
				containerElement={<div style={{ height: '400px' }}></div>}
				mapElement={<div style={{ height: `100%` }} />}
			/>
		);
  }
}

export default MapContainer
