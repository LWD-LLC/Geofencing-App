/* components/Map.js */

import React, { Fragment, Component } from 'react';
import MapContainer from './MapContainer';

const API_KEY = process.env.GMAPS_API_KEY;
const MAP_URL = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&v=3.exp&libraries=geometry`;

class Map extends Component {

    render() {
        const containerStyles = {
            height: '100%',
            width: '100%',
            position: 'relative'
        };

        return <MapContainer
            googleMapURL={MAP_URL}
            loadingElement={<div style={containerStyles} />}
            containerElement={<div style={containerStyles} />}
            mapElement={<div style={containerStyles} />}
            {...this.props}
        />
    }

};

export default Map;