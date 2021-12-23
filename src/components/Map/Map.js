import React, { useState } from 'react'
import { GoogleMap, useJsApiLoader, Marker, InfoWindow } from '@react-google-maps/api';
import styles from './Map.module.scss'

function Map({ name, adress, coordinates }) {
    const [infoOpen, setInfoOpen] = useState(false);
    const [zoom, setZoom] = useState(12);
    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: 'AIzaSyAHWdq9GQrmSw_Mo2b2JZe8t_SJZMvHtt8'
    })
    const onMarkerClick = () => {
        if (infoOpen) { setInfoOpen(false); }
        setInfoOpen(true);
        setZoom(16)
    }
    const position = {
        lat: coordinates.lat,
        lng: coordinates.lng
    }

    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={{ width: '100%', height: '100%' }}
            zoom={zoom}
            center={position}
        >
            <Marker
                position={position}
                title="студио за масажи Top Мassage"
                onClick={onMarkerClick}
            />
            {
                infoOpen
                    ?
                    <InfoWindow
                        onCloseClick={() => setInfoOpen(false)}
                        position={position}
                    >
                        <div className={styles.info}>
                            <div className={styles.infoTitle}>{name}</div>
                            <p>{adress.boulevard} {adress.number}</p>
                            <p>{adress.postCode}, {adress.district}, София</p>
                            <p>България</p>
                        </div>
                    </InfoWindow>
                    : null
            }
            <></>
        </GoogleMap >
    ) : null
}

export default Map
