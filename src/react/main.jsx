import React from 'react';
import GMap from './google-map.jsx';
import LMap from './leaflet-map.jsx';
import * as actionCreators from '../redux/actions';


const Main = React.createClass({
  render: function(){
    return (
      <div>
        <h3>Places</h3>
        <LMap data={this.props}/>
      </div>
    )
  }
})



export default Main
