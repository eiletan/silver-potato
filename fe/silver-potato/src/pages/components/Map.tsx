import { MapContainer, TileLayer, CircleMarker, Popup} from "react-leaflet";

import React from "react";

import 'leaflet/dist/leaflet.css'

export default function Map() {
    return (
        <div> 
            <MapContainer center={[35.710064, 139.810699]} zoom={5}>
                <TileLayer
                 attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                 url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                 />
                 <CircleMarker center={[ 35.710064, 139.810699]} radius={15}>
                    <Popup>
                        <h2> Hello World</h2>
                    </Popup>
                 </CircleMarker>
            </MapContainer>
        </div>
    )
}