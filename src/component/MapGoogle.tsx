import { useState } from 'react';


import 'maplibre-gl/dist/maplibre-gl.css';


import Map, { NavigationControl, Marker } from 'react-map-gl';
import maplibregl from 'maplibre-gl';

export default function MapGoogle() {
  const [geoData] = useState({ lat: 47.9135656, lng: 106.9254985 });

  return (
    <Map mapLib={maplibregl}
      initialViewState={{
        longitude: geoData.lng,
        latitude: geoData.lat,
        zoom: 14
      }}
      style={{ width: "100%", height: "100vh" }}
      mapStyle="https://api.maptiler.com/maps/streets-v2/style.json?key=hBhtGFTW42VCIxJqnG4F"
    >
      <NavigationControl position='top-left'/>
      {/* {drivers?.map((driver) => {
        return (
          <Marker 
            color='red' 
            longitude={driver.currentPosition?.longitude} 
            latitude={driver.currentPosition?.latitude}
           />
        )
      })
      } */}
    </Map>
  )
}
  