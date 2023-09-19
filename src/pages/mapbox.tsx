import 'mapbox-gl/dist/mapbox-gl.css';
import { useState } from 'react';

// import {GeolocateControl} from 'react-map-gl';
import Map, {
  CircleLayer, GeolocateControl, Layer, Marker, Popup, Source
} from 'react-map-gl';
import type {FillLayer} from 'react-map-gl';
import type {FeatureCollection} from 'geojson';

// const Map = ReactMapboxGl({accessToken:
//     'pk.eyJ1IjoidGhpc2FuZGVyc29uIiwiYSI6ImNsbGw5c2hjZDIxYW8zcmxndXF2MmtvbmEifQ.kxiyFA4JSmXwbErD1l8B0w',
//   });
const parkLayer: FillLayer = {
  id: 'landuse_park',
  type: 'fill',
  source: 'mapbox',
  'source-layer': 'landuse',
  filter: ['==', 'class', 'park'],
  paint: {'fill-color': '#4E3FC8'}
};

const geojson: FeatureCollection = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-122.4, 37.8]
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-75.29126430328088, 2.931872218949569]
      }
    }
  ]
};

const layerStyle: CircleLayer = {
  id: 'point',
  type: 'circle',
  paint: {
    'circle-radius': 10,
    'circle-color': '#007cbf'
  }
};

const Index: React.FC = () => {
  const [showPopup, setShowPopup] = useState<boolean>(true);

  return (
    <main className="">
      <h2>Página mapa</h2>

      <Map
        mapboxAccessToken='pk.eyJ1IjoidGhpc2FuZGVyc29uIiwiYSI6ImNsbGw5c2hjZDIxYW8zcmxndXF2MmtvbmEifQ.kxiyFA4JSmXwbErD1l8B0w'
        mapStyle="mapbox://styles/mapbox/navigation-night-v1"
        initialViewState={{
          longitude: -100,
          latitude: 40,
          zoom: 3.5
        }}
        style={{
          height: '90vh',
          width: '90vw'
        }}

        // containerStyle={{
        //
        // }}
      >
        {/* <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}> */}
        <Popup
          style={{
            width: '200px',
            borderRadius: '12px'
          }}
          longitude={-75.261169918095}
          latitude={2.903822043168672}
          anchor="bottom"
          onClose={() => setShowPopup(false)}
        >
              Mi casa xd
        </Popup>
        <Marker latitude={2.9187317820715823} longitude={ -75.28559037575893 } anchor="center">
          <div style={{position: 'relative'}}>
            <span style={{
              display: 'block',
              width: '20px',
              fontWeight: 'bold',
              fontSize: '30px',
              position: 'absolute',
              bottom: '-10px',
              left: 0,
              right: 0,
              margin: 'auto',
              marginLeft: 'auto',
              marginRight: 'auto'
            }}>V</span>
            <img style={{
              position: 'absolute',
              top: -20
            }} src="https://usagif.com/wp-content/uploads/gif/confetti-25.gif" alt="" width={120}/>
            <img
              style={{borderRadius: '20px'}}
              src="https://i.pinimg.com/236x/9d/ba/a5/9dbaa5fc9cd78a13533728dc66c0d37e--san-juan-book-jacket.jpg"
              alt=""
              width={120}
            />
          </div>
        </Marker>
        <Marker latitude={2.931872218949569} longitude={ -75.29126430328088 } anchor="bottom" >
          <div style={{position: 'relative'}}>
            <img
              style={{borderRadius: '20px'}}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhusGfK5vfU1m-M0o0xI5nfiq3_XlYjW0wZSkCk7CrnsmVyHe3JETNG_O27gqCrYgn9vI&usqp=CAU"
              alt=""
              width={120}
            />
          </div>
        </Marker>
        <GeolocateControl />
        <Source id="my-data" type="geojson" data={geojson}>
          <Layer {...layerStyle} />
        </Source>
        <Layer {...parkLayer} />
        {/* </Layer> */}
      </Map>
    </main>
  );
};

export default Index;
