import ReactMapGL, { InteractiveMap } from 'react-map-gl';
import * as React from 'react';
import { LngLat } from 'mapbox-gl';

export const MapPicker = ({
  onChange,
}: {
  onChange: (pos?: LngLat) => void;
}) => {
  const refContainer = React.useRef<InteractiveMap>();
  const MAPBOX_TOKEN =
    'pk.eyJ1IjoiZ3V6emlrc2VuOTYiLCJhIjoiY2p1NXNhdGt3MWMxaDQzc2FlYnB5cmg4YiJ9.6ol5G64nkRQX4YJHdr6B0w';
  const [marker, setMarker] = React.useState<LngLat | null>(null);

  const handleOnClick = (event: any) => {
    if (!refContainer.current) {
      return;
    }

    const map = refContainer.current.getMap();
    const point = map.unproject(event.point);
    onChange(point);
    setMarker(point);

  };
  

  return (
    <ReactMapGL
      width={500}
      height={500}
      {...{
        width: 400,
        height: 400,
        latitude: 37.7577,
        longitude: -122.4376,
        zoom: 8,
      }}
      ref={refContainer as any}
      onClick={handleOnClick}
      mapboxApiAccessToken={MAPBOX_TOKEN}
      zoom={12}
    />
  );
};
