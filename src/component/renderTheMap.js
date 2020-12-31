import React from 'react';
import './Style/map.css';
import MyGoogleMap from './map';


function RenderMap() {

  return (
    <div className="main-wrapper">
      <MyGoogleMap />
    </div>
  );
}

export default RenderMap;