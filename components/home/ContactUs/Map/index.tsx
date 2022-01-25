import { Status, Wrapper } from "@googlemaps/react-wrapper";
import { googleMapStyles } from "./GoogleMapStyles";
import Map from "./Map";
import Marker from "./Marker";

//###################################################################
//###################################################################
interface Props {
  borderRadius: string;
}

export default function ({ borderRadius }: Props) {
  const render = (status: Status) => {
    return <h1>{status}</h1>;
  };

  const center = { lat: 26.140511727110972, lng: 91.80221014654201 };
  const zoom = 14;
  const markerPosition = { lat: 26.140511727110972, lng: 91.80221014654201 };
  const mapComponentStyle = { height: "100%", borderRadius };
  return (
    <Wrapper apiKey="AIzaSyB1qivHDPMA4UExV_vkOfsAFa99P_86H3M" render={render}>
      <Map
        center={center}
        zoom={zoom}
        style={mapComponentStyle}
        styles={googleMapStyles}
      >
        <Marker position={markerPosition} />
      </Map>
    </Wrapper>
  );
}
