import Context from "../CityContext";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
function Leaflet() {
  const { city, coords } = Context();


return (
    <div className="m-10 rounded" >
        {coords.length > 0 &&(
            <MapContainer  center={coords} zoom={5} scrollWheelZoom={true} style={{width:'100%',height:'40vh'}}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"  />
            <Marker position={coords}>
                <Popup>
                    {city}
                </Popup>
            </Marker>
        </MapContainer>
        )}

    </div>
  )
}
export default Leaflet;
