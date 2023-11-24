import React from 'react'
import {Marker, Popup, useMap } from 'react-leaflet'
import './Map.css'
import { useMemo, useEffect } from 'react'
import L from "leaflet"
import iconUrl from "../images/icon-location.svg"
const Map = ({data}) => {
    console.log(data)
    const position = useMemo(() => {
        return [data.location.lat, data.location.lng]
      }, [data.location.lat, data.location.lng])
    const map = useMap()
    
    useEffect(() => {
        map.flyTo(position, 13, {
          animate: true,
        })
    }, [map, position])
    
    console.log(position)
    

    const icon =  L.icon({
        iconSize: [32, 40],
        iconAnchor: [10, 41],
        popupAnchor: [2, -40],
        iconUrl: iconUrl
    })

    
        
    return(
        <>
            <Marker icon={icon} position={position}>
            <Popup>
                <p className='popuptext'>{data.location.country}, {data.location.region}.</p>
            </Popup>
            </Marker>
        </>
    )
}

export default Map