import { useState } from 'react';


import 'maplibre-gl/dist/maplibre-gl.css';


import Map, { NavigationControl, Marker } from 'react-map-gl';
import maplibregl from 'maplibre-gl';
import useCollection from '@/hook/useCollection';

export default function MapGoogle() {
  const staffs = useCollection('staff');
 
  console.log(staffs)
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
      {staffs?.map((el, idx) => (
            <Marker 
              key={idx}
              color='red' 
              longitude={el.position.longitude} 
              latitude={el.position.latitude}
             />
      )
      )}
      
    </Map>
  )
}
  