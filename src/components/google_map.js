/*eslint-disable no-undef*/
/*eslint-disable react/prop-types*/
import React, { Component } from 'react';

class GoogleMap  extends Component {
    constructor(props){
        super(props);
    }

    componentDidMount() {
        new google.maps.Map(this.refs.map, {
            zoom :12,
            center: {
                lat: this.props.lat,
                lng: this.props.lon
            }
        });
    }

    render() {
        //get a reference to this by using this.refs.map
        return <div ref="map" />;
    }
}

export default GoogleMap;