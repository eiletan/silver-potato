import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css'; // Re-uses images from ~leaflet package
import L from 'leaflet';
import 'leaflet-defaulticon-compatibility';

export default function Map() {
    
    return (
        <div>
            <MapContainer
                center={[34.6545, 135.4290]}
                zoom={10}
                scrollWheelZoom={true}    
            >
                 <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[34.6545, 135.4290]}>
                </Marker>
            </MapContainer>
        </div>
    )
}