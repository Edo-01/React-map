import style from "../assets/css/MapBox.module.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"; // componenti obbligatori per la mappa
import "leaflet/dist/leaflet.css"; //stile da importare e geestire con una classe .leaflet-container nell css globale
import { Icon } from "leaflet";
import iconMia from "../assets/img/icon-location.svg";
import { useMyContext } from "../context";

function MapBox() {
  const { dati } = useMyContext();
  console.log(dati.location);

  const marker = {
    geocode: [dati.location.lat, dati.location.lng],
    popup: "hello popup",
  };
  const position = [dati.location.lat, dati.location.lng];

  const customIcon = new Icon({
    iconUrl: iconMia,
    // iconSize: [38, 45],
  });

  return (
    <div className={style.containerMain}>
      <MapContainer key={"mapkey" + dati.ip} center={position} zoom={13}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={marker.geocode} icon={customIcon}>
          <Popup>
            <h3>
              {dati.location.city}, {dati.location.region} <br></br>
              {dati.location.postalCode} {dati.location.country}
            </h3>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default MapBox;
