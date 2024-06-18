import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { DirectionsCar } from '@mui/icons-material'; // Import DirectionsCar icon from Material-UI/icons
import ReactDOMServer from 'react-dom/server'; // Import ReactDOMServer
import { PinDrop } from '@mui/icons-material'; // Import PinDrop icon from Material-UI/icons

const MapComponentMUlticor = () => {
  const [vehiclePosition, setVehiclePosition] = useState({ lat: 51.505, lng: -0.09 }); // Initial vehicle position
  const [source, setSource] = useState({ lat: 51.505, lng: -0.09 }); // Source position
  const [destination, setDestination] = useState({ lat: 51.51, lng: -0.1 }); // Destination position
  const [route, setRoute] = useState([]); // Route coordinates
  const [simulating, setSimulating] = useState(false); // Simulation state

  useEffect(() => {
    const calculateRoute = () => {
      const routeCoords = [];
      for (let i = 0; i <= 100; i++) {
        const lat = source.lat + (i / 100) * (destination.lat - source.lat);
        const lng = source.lng + (i / 100) * (destination.lng - source.lng);
        routeCoords.push({ lat, lng });
      }
      setRoute(routeCoords);
    };

    calculateRoute();
  }, [source, destination]);

  const startSimulation = () => {
    setSimulating(true);
    moveVehicle();
  };

  const moveVehicle = () => {
    const startLat = source.lat;
    const startLng = source.lng;
    const endLat = destination.lat;
    const endLng = destination.lng;
    const steps = 100; // Number of steps for animation
    const delay = 50; // Delay between each step in milliseconds
    const deltaLat = (endLat - startLat) / steps;
    const deltaLng = (endLng - startLng) / steps;

    let currentLat = startLat;
    let currentLng = startLng;

    const moveStep = () => {
      currentLat += deltaLat;
      currentLng += deltaLng;
      setVehiclePosition({ lat: currentLat, lng: currentLng });

      // Check if the vehicle has reached the destination
      if ((deltaLat > 0 && currentLat >= endLat) || (deltaLat < 0 && currentLat <= endLat) ||
          (deltaLng > 0 && currentLng >= endLng) || (deltaLng < 0 && currentLng <= endLng)) {
        setSimulating(false); // Stop simulation
      } else {
        setTimeout(moveStep, delay);
      }
    };

    moveStep();
  };

  // Custom icon for vehicle marker using Material-UI icon
  const vehicleIcon = L.divIcon({
    html: ReactDOMServer.renderToString(
      <div style={{ background: 'blue', width: '40px', height: '40px', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <PinDrop style={{ color: 'white' }} />
        <div style={{ marginTop: '5px' }}>Vehicle</div>
      </div>
    ),
    iconAnchor: [16, 32], // Icon anchor point (center bottom)
    iconSize: [32, 32], // Size of the icon
  });

  return (
    <div>
      <MapContainer center={source} zoom={13} style={{ height: '70vh' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        {/* Source Marker */}
        <Marker position={source} icon={vehicleIcon} >
          <Popup>Source</Popup>
        </Marker>

     

        {/* Destination Marker */}
        <Marker position={destination} icon={vehicleIcon}>
          <Popup>Destination</Popup>
        </Marker>

        {/* Route Polyline */}
        <Polyline positions={route} color="blue" />

        {/* Vehicle Marker */}
        <Marker position={vehiclePosition} icon={vehicleIcon}>
          <Popup>
            <div>
              <h3>Vehicle</h3>
              <p>Current Position: {vehiclePosition.lat.toFixed(4)}, {vehiclePosition.lng.toFixed(4)}</p>
            </div>
          </Popup>
        </Marker>
      </MapContainer>

      {/* Start Button */}
      {!simulating && (
        <button onClick={startSimulation} style={{ marginTop: '10px' }}>
          Start Simulator
        </button>
      )}
    </div>
  );
};

export default MapComponentMUlticor;
