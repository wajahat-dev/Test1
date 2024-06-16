// MapWithPlacemark.js

import React from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';

const MapWithPlacemark = () => {
  const mapState = {
    center: [55.751574, 37.573856], // Moscow coordinates (latitude, longitude)
    zoom: 10,
  };

  const placemarkGeometry = [55.751574, 37.573856]; // Coordinates to plot

  return (
    <YMaps>
      <div>
        <h1>Map with Placemark Example</h1>
        <Map state={mapState} width="100%" height="400px">
          <Placemark geometry={placemarkGeometry} />
        </Map>
      </div>
    </YMaps>
  );
};

export default MapWithPlacemark;
