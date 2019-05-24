import React from 'react'
import {Map as LeafletMap, TileLayer, Marker, Popup} from 'react-leaflet';

class Map extends React.Component {

    render() {
        const{url}=this.props;
        return (
            <LeafletMap
                style={{width: '100%', height: '100%'}}
                center={[50, 10]}
                zoom={6}
                maxZoom={10}
                attributionControl={true}
                zoomControl={true}
                doubleClickZoom={true}
                scrollWheelZoom={true}
                dragging={true}
                animate={true}
                easeLinearity={0.35}
            >
                <TileLayer
                    url={url}
                />
                <Marker position={[50, 10]}>
                    <Popup>
                        Popup for any custom information.
                    </Popup>
                </Marker>
            </LeafletMap>
        );
    }
}

export default Map
