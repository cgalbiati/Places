'use strict';

import React from 'react';
import { render } from 'react-dom';
import { Map, Marker, Popup, TileLayer, Polyline } from 'react-leaflet';
import L from 'leaflet';

// Map component
const LMap = React.createClass({
  render : function() {
    let markers, polylines;
    [markers, polylines] = makeMarkersAndCnxns(this.props.data.places);
    console.log('data in lmap', this.props.data)
    return (
      <div>
        <Map id='map' 
          center={[41.1, 29]}
          zoomControl={false}
          zoom={5}
          maxZoom={19}
          minZoom={2}>
          <TileLayer 
            url='http://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png'
            minZoom={2}
            attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'/>
          {markers}
          {polylines}
        </Map>
      </div>
    );
  },
});

// export Map component to plug in elsewhere
export default LMap;

// returns array of Markers, and array of PolyLines
function makeMarkersAndCnxns(places){
  let cnxnPairs = [];
  // TODO: make longer polylines and without duplicates
  
  const markers = Object.keys(places).map((place, idx)=>{
    //loop through the connections of each place and add a cnxnPairs object
    //TODO: don't add duplicates
    for (let cnxn in places[place].cnxns){
      console.log('place, cnxn', place, places[place].gps, cnxn, places[cnxn].gps)
      // if(!(cnxnsPairs[place] && cnxnsPairs[place].to)
      // cnxnsPairs[places[place].gps, places[cnxn].gps]);
      cnxnPairs.push({
        gpsPair:[places[place].gps, places[cnxn].gps], 
        dist:places[place].cnxns[cnxn],
        to: cnxn,
        from: place
      });
    }
    return PlaceMarker(places[place], idx) 
    // return (<Marker position={places[place].gps} name={places[place].name} key={idx}/>)
  })
  console.log(markers)
  // const polylines = cnxnPairs.map((pair, idx)=>(<Polyline positions={pair} key={idx}/>))
  const polylines = cnxnPairs.map((pair, idx)=>PolyLineConstr(pair, idx));
  return [markers, polylines]
}

const PolyLineConstr = (props, idx)=>{
  //props: {from: name, to: name, gpsPair: [], dist: num}
  return (
    <Polyline 
      positions={props.gpsPair}
      key={idx}>
      <Popup>
        <span>distance: {props.dist}</span>
    </Popup>
    </Polyline>
  )
}

const PlaceMarker = (props, idx)=>{
  // data is the place obj
    let icon = myIcon;
    return(
      <Marker
        position={props.gps}
        // icon={icon}
        title={props.name}
        riseOnHover={true}
        key={idx}
        >
        <Popup>
          <span>Move here?</span>
        </Popup>
    </Marker>
    )
}

const PlayerMarker = (props, idx) =>{
  // props is the player obj

    //TODO: set offset higher for user's player
    //TODO: set color dift for active player and user's player
    const zIdx = 1;
    let icon = myIcon;
    return(
      <Marker
        position={props.gps}
        icon={icon}
        title={props.name}
        zIndexOffset={zIdx}
        key={idx}
      />
    )
}

const myIcon = L.icon({
    iconUrl: 'my-icon.png',
    iconRetinaUrl: 'my-icon@2x.png',
    iconSize: [38, 95],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76],
    shadowUrl: 'my-icon-shadow.png',
    shadowRetinaUrl: 'my-icon-shadow@2x.png',
    shadowSize: [68, 95],
    shadowAnchor: [22, 94]
});



