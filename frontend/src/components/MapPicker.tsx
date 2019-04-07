import ReactMapGL, { InteractiveMap, Marker, ViewState } from 'react-map-gl';
import * as React from 'react';
import { LngLat } from 'mapbox-gl';
import styled, { keyframes } from 'styled-components';

const jump = keyframes`
  from {
    transform: translateY(0) scaleY(1);
  }

  to {
    transform: translateY(-10px) scaleY(0.9);
  }
`;

const PinMarker = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  margin: -15px 0 0 -15px;
  width: 30px;
  height: 30px;
  background: transparent;
  animation: ${jump} 500ms alternate infinite;
  transform-origin: top center;

  .pin {
    width: 100%;
    height: 100%;
    border-radius: 50% 50% 50% 0;
    background: #00cae9;
    position: absolute;
    transform: rotate(-45deg);
  }

  .icon {
    position: absolute;
    background: #fff;
    width: 70%;
    height: 70%;
    border-radius: 50%;
    top: 15%;
    left: 15%;
  }
`;

export type Props = {
  width: number;
  height: number;
  onChange: (pos?: LngLat) => void;
}

export const MapPicker = (props: Props) => {
  const [viewport, setViewport] = React.useState<ViewState>({
    latitude: 50.0647,
    longitude: 19.945,
    zoom: 12,
  });
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
    props.onChange(point);
    setMarker(point);
  };

  return (
    <ReactMapGL
      mapStyle="mapbox://styles/mapbox/dark-v9"
      width={props.width}
      height={props.height}
      {...viewport}
      ref={refContainer as any}
      onClick={ handleOnClick}
      mapboxApiAccessToken={MAPBOX_TOKEN}
      onViewportChange={(viewport) => setViewport(viewport)}
    >
      <Marker
        latitude={marker ? marker.lat : 50.0647}
        longitude={marker ? marker.lng : 19.945}
      >
        <PinMarker>
          <div className="pin" />
          <div className="icon" />
        </PinMarker>
      </Marker>
    </ReactMapGL>
  );
};
