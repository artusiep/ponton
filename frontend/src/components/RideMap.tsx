import ReactMapGL, { InteractiveMap, ViewState } from 'react-map-gl';
import * as React from 'react';

export type Props = {
    width: number;
    height: number;
}

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
        map.addLayer({
          "id": "route",
          "type": "line",
          "source": {
          "type": "geojson",
             "data": {
                "type": "Feature",
                "properties": {},
                "geometry": {
                   "type": "LineString",
                   "coordinates": [[19.945, 50.0647], [ 19.950, 50.0650], [ 19.970, 50.0605], [ 19.958, 50.0658]]
                 }
               }
         },
         "layout": {
           "line-join": "round",
           "line-cap": "round"
         },
         "paint": {
           "line-color": "#FFF",
           "line-width": 2
         }
       });

       setViewport(state => ({...state}));
    }

    return (
        <ReactMapGL
          mapStyle="mapbox://styles/mapbox/dark-v9"
          width={props.width}
          {...viewport}
          height={props.height}
          ref={refContainer as any}
          mapboxApiAccessToken={MAPBOX_TOKEN}
          onLoad={drawLines}
          onViewportChange={(viewport) => setViewport(viewport)}

        >
        </ReactMapGL>
      );
}
