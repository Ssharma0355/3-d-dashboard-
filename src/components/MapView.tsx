import React, { useMemo } from 'react';
import DeckGL from '@deck.gl/react';
import { ColumnLayer } from '@deck.gl/layers';
import Map from 'react-map-gl/mapbox';
import { useStore } from '../store/useStore';
import 'mapbox-gl/dist/mapbox-gl.css';

const INITIAL_VIEW_STATE = {
  longitude: 78.9629,
  latitude: 20.5937,
  zoom: 4.5,
  pitch: 50,
  bearing: 0
};

export const MapView: React.FC = () => {
  const { data, filteredData } = useStore();
  console.log(process.env.REACT_APP_MAPBOX_TOKEN);

  const displayData =
    filteredData.length > 0 ? filteredData : data;

  const layers = useMemo(() => [
    new ColumnLayer({
      id: 'column-layer',
      data: displayData,
      diskResolution: 12,
      radius: 4000,
      extruded: true,
      elevationScale: 1,
      getPosition: d => [d.longitude, d.latitude],
      getElevation: d => d.height,
      getFillColor: d =>
        d.category === 'Active'
          ? [0, 200, 0]
          : d.category === 'Idle'
          ? [200, 0, 0]
          : [0, 0, 200],
      transitions: {
        getElevation: 1000
      },
      pickable: true
    })
  ], [displayData]);

  return (
    <div style={{ height: '100%', width: '100%', position: 'relative' }}>
      <DeckGL
        initialViewState={INITIAL_VIEW_STATE}
        controller={true}
        layers={layers}
      >
        <Map
          mapStyle="mapbox://styles/mapbox/dark-v11"
          mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        />
      </DeckGL>
    </div>
  );
};