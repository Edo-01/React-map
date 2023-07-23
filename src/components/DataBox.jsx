import style from "../assets/css/DataBox.module.css";
import { useMyContext } from "../context";

function DataBox() {
  const { dati } = useMyContext();

  return (
    <div className={style.containerBox}>
      <div className={style.baseBox}>
        <div className={style.colInfo}>
          <h4>IP ADDRESS</h4>
          <h3>{dati.ip}</h3>
        </div>
        <div className={style.colDivider}>
          <div className={style.linee}></div>
        </div>
        <div className={style.colInfo}>
          <h4>LOCATION</h4>

          <h3>
            {dati.location.city}, {dati.location.region} <br></br>
            {dati.location.postalCode} {dati.location.country}
          </h3>
        </div>
        <div className={style.colDivider}>
          <div className={style.linee}></div>
        </div>
        <div className={style.colInfo}>
          <h4>TIMEZONE </h4>
          <h3>UTC {dati.location.timezone}</h3>
        </div>
        <div className={style.colDivider}>
          <div className={style.linee}></div>
        </div>
        <div className={style.colInfo}>
          <h4>ISP</h4>
          <h3>{dati.isp}</h3>
        </div>
      </div>
    </div>
  );
}

export default DataBox;
