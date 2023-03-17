import { useState } from 'react';


import 'maplibre-gl/dist/maplibre-gl.css';


import Map, { NavigationControl, Marker } from 'react-map-gl';
import maplibregl from 'maplibre-gl';
import useCollection from '@/hook/useCollection';

export default function MapGoogle() {
  const staffs = useCollection('staff');
  // console.log("staffs",staffs?.position?.longitude)
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
      <Marker 
            color='red' 
            longitude={staffs?.position?.longitude === undefined ? 50 : staffs?.position?.longitude } 
            latitude={ staffs?.position?.latitude === undefined ? 50 : staffs?.position?.latitude }
          />
      {/* {staffs?.map((el, idx) => {

        console.log(el?.position?.longitude)
        return(
 
          <Marker 
            key={idx}
            color='red' 
            longitude={el?.position?.longitude} 
            latitude={el?.position?.latitude}
           />
        )
      
        }
      )} */}
      
    </Map>
  )
}
  