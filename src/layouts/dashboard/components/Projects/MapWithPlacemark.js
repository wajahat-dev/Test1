// MapWithPlacemark.js

import React from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';

const MapWithPlacemark = () => {
  // const mapState = {
  //   center: [55.751574, 37.573856], // Moscow coordinates (latitude, longitude)
  //   zoom: 10,
  // };

  const placemarkGeometry = [55.751574, 37.573856]; // Coordinates to plot
  const [zoom, setZoom] = React.useState(9);
  const mapState = React.useMemo(
    () => ({ center: [55.75, 37.57], zoom }),
    [zoom]
  );

   
  return (
    <YMaps>
      <>
        <table>
          <tbody>
            <tr>
              <th>Controlled Map</th>
              <th>Uncontrolled Map</th>
            </tr>
            <tr>
              <td>
                <Map state={mapState} />
              </td>
              <td>
                <Map defaultState={mapState} />
              </td>
            </tr>
          </tbody>
        </table>
        <p>
          <button onClick={() => setZoom((zoom) => (zoom === 9 ? 12 : 9))}>
            Toggle map zoom
          </button>
        </p>
      </>
    </YMaps>
  );
};

export default MapWithPlacemark;
