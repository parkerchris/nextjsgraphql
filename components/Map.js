import {useJsApiLoader , GoogleMap, useLoadScript, Marker, OverlayView} from '@react-google-maps/api'
import { useMemo } from "react"
import React from 'react';
import styles from '../styles/Map.module.css'

const containerStyle = {
    width: '100%',
    height: '100%'
  };
  
  const center = {
    lat: 40.5865,
    lng: -122.3917
  };


  const options = {
        mapId: "aa5930e0bf4114b4",
        disableDefaultUI: true,
        clickableIcons: false,
  }
        



export default function Map() {

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOGGLE_MAPS_API_KEY
      })
    
      return isLoaded ? (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
          options={options}
        >
          { /* Child components, such as markers, info windows, etc. */ }
          <OverlayView
            position={center}
            mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
          >
            <div className={styles.marker}>
                <div className={styles.status}></div>
                <div className={styles.rentContainer}><h3 className={styles.rent}>$2,200</h3></div>
            </div>
          </OverlayView>
          <></>
        </GoogleMap>
    ) : <></>

}