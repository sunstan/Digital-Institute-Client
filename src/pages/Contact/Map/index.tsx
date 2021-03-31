import {MapContainer, Marker, TileLayer} from 'react-leaflet';
import Pin from '../../../assets/images/pin.svg';
import 'leaflet/dist/leaflet.css';
import {Icon} from 'leaflet';

interface Props {
    readonly lat: number;
    readonly lng: number;
    readonly gray: boolean;
}

const Map = ({lat, lng, gray}: Props): JSX.Element => {

    const pin = new Icon({
        iconUrl: Pin,
        iconSize: [30, 40],
        iconAnchor: [15, 40],
    });

    return (
        <MapContainer className='w-full h-96 max-h-screen-1/2 z-0 border-b border-gray-200' center={[lat, lng]} zoom={15}
                      scrollWheelZoom={false}>
            <TileLayer url={gray
                ? 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png'
                : 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png'}/>
            <Marker position={[lat, lng]} icon={pin}/>
        </MapContainer>
    );
};

export default Map;