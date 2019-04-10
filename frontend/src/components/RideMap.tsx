import ReactMapGL, { InteractiveMap, ViewState } from 'react-map-gl';
import * as React from 'react';
import * as turf from '@turf/turf';
import { GeoJSONSource } from 'mapbox-gl';

export type Props = {
  width: number;
  height: number;
  data: any;
};

const nothing = turf.featureCollection([]);

export const RideMap = (props: Props) => {
  const [viewport, setViewport] = React.useState<ViewState>({
    latitude: 50.0647,
    longitude: 19.945,
    zoom: 12,
  });

  const refContainer = React.useRef<InteractiveMap>();
  const MAPBOX_TOKEN =
    'pk.eyJ1IjoiZ3V6emlrc2VuOTYiLCJhIjoiY2p1NXNhdGt3MWMxaDQzc2FlYnB5cmg4YiJ9.6ol5G64nkRQX4YJHdr6B0w';

  const drawLines = () => {
    if (!refContainer.current) {
      return;
    }

    const map = refContainer.current.getMap();
    map.addSource('route', {
      type: 'geojson',
      data: nothing,
    });

    map.addLayer(
      {
        id: 'routeline-active',
        type: 'line',
        source: 'route',
        layout: {
          'line-join': 'round',
          'line-cap': 'round',
        },
        paint: {
          'line-color': '#AFF1DA',
          'line-width': ['interpolate', ['linear'], ['zoom'], 12, 3, 22, 12],
        },
      },
      'waterway-label',
    );

    if (props.data.trips[0]) {
      const routeGeoJSON = turf.featureCollection([
        turf.feature(props.data.trips[0].geometry),
      ]);

      // Update the `route` source by getting the route source
      // and setting the data equal to routeGeoJSON
      (refContainer.current
        .getMap()
        .getSource('route') as GeoJSONSource).setData(routeGeoJSON);
    }

    setViewport(state => ({ ...state }));
  };

  return (
    <ReactMapGL
      mapStyle="mapbox://styles/mapbox/dark-v9"
      width={props.width}
      {...viewport}
      height={props.height}
      ref={refContainer as any}
      mapboxApiAccessToken={MAPBOX_TOKEN}
      onLoad={drawLines}
      onViewportChange={viewport => setViewport(viewport)}
    />
  );
};
