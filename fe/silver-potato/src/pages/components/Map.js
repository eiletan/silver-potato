import { MapContainer, TileLayer, Marker, Popup, Polyline } from "react-leaflet";

import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css'; // Re-uses images from ~leaflet package
import L from 'leaflet';
import 'leaflet-defaulticon-compatibility';

import { useState, useEffect } from "react";


export default function Map(props) {
    const [markers, setMarkers] = useState([]); 


    useEffect(() => {
        setMarkers(props.images);
    },[props.images]);

    function renderMarkers() {
        return props.images.map((image,i) => {
            return (
                <Marker key={i} position={image}>
                    <Popup>
                        <h2>Image #{i+1}</h2>
                    </Popup>
                </Marker>
            );
        })}


    function renderPolyLine() {
        return <Polyline positions={props.images} color={'red'}/>;
    }

    return (
        <div className="MapContainer h-96 w-1/2 border-2 border-indigo-600">
            <MapContainer
                center={[34.6545, 135.4290]}
                zoom={10}
                scrollWheelZoom={true}
                style={{width: "100%", height: "100%"}}
            >
                 <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {renderMarkers()}
                {renderPolyLine()}
            </MapContainer>
        </div>
    )
}