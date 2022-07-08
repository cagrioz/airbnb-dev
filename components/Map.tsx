import ReactMapGL, { Marker, Popup } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

import { useState } from "react";
import { getCenter } from "geolib";

import { SearchItem, Coord } from "../interfaces";

const Map = ({ coords, searchResults }: { coords: Coord[]; searchResults: SearchItem[] }): JSX.Element => {
    // Get the center, if there are no coords, return 0, 0
    const center: Coord = getCenter(coords) || { latitude: 0, longitude: 0 };

    const [viewport, setViewport]: [any, (viewport: any) => void] = useState({
        width: "100%",
        height: "100%",
        latitude: center?.latitude - 0.15,
        longitude: center?.longitude,
        zoom: 11,
    });

    return (
        <ReactMapGL
            mapStyle="mapbox://styles/devcagri/cl5crb986000e14thk8z04bjz"
            mapboxAccessToken={process.env.mapbox_key}
            {...viewport}
            onMove={(event: any) => setViewport(event.viewport)}
        >
            {searchResults.map((result) => (
                <div key={result.img}>
                    <Marker latitude={result.lat as number} longitude={result.long as number} anchor="bottom">
                        <p className="cursor-pointer text-2xl animate-bounce">📌</p>
                    </Marker>
                </div>
            ))}
        </ReactMapGL>
    );
};

export default Map;
