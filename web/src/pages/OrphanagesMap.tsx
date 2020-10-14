import React from 'react';
import { Link } from 'react-router-dom';

// IMAGES
import mapMarketImg from '../images/map-marker.svg';
// ICONS
import { FiPlus } from 'react-icons/fi';
// STYLE
import '../styles/pages/orphanages-map.css';
// MAP
import { Map , TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

function OrphanagesMap(){
    return (
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarketImg} alt="Happy"/>

                    <h2>Escolha um orfanato no mapa</h2>
                    <p>
                      Muitas crianças estão esperando a sua visita :)  
                    </p>
                </header>
                <footer>
                    <strong>Guarujá</strong>
                    <span>São Paulo</span>
                </footer>
            </aside>

            <Map
                center={[-23.9471314, -46.2912268]}
                zoom={15}
                style={{width: '100%', height: '100%' }}>

                <TileLayer 
                url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} 
                />
            </Map>

            <Link to="" className="create-orphanage">
                <FiPlus size={32} color="white"/>
            </Link>
        </div>
    );
}

export default OrphanagesMap;