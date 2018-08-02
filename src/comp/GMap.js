import React, { Component } from 'react';
import Tasks from "../Tasks/App";

import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps"

const MyMapComponent = withScriptjs(withGoogleMap((props) =>{
    this.mapClick = function(resp){
        console.log(resp);
        
        props.pushMarkersData(resp.latLng);
    }
    
    var markers = props.markersData.map((obj, i)=>{
        return(
            <Marker key={i} position={obj}>
                <InfoWindow>
                    <Tasks />
                </InfoWindow>
            </Marker>
        )
    })
    
    return(
          <GoogleMap
            defaultZoom={4}
            defaultCenter={{ lat: -23, lng: 120 }}
            onClick = {this.mapClick}
            >
            {markers}
            </GoogleMap>
    
    )
}))

export default MyMapComponent;