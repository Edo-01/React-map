import InputBar from "./components/InputBar";
import DataBox from "./components/DataBox";
import MapBox from "./components/MapBox";
import style from "../src/assets/css/App.module.css";
import { useEffect } from "react";
import { useMyContext } from "./context";

function App() {
  const { dati, caricaDati } = useMyContext();

  useEffect(() => {
    async function richiedi() {
      let risp = await fetch(
        "https://geo.ipify.org/api/v2/country,city?apiKey=at_Lt7TT3hCYlndsk3dpvc9AyQqsCalx"
      );
      let obj = await risp.json();
      caricaDati(obj);
    }
    richiedi();
  }, []);
  return (
    <>
      <section className={style.topContainer}>
        <h1>IP Address Tracker</h1>
        <InputBar />
        {dati ? <DataBox /> : null}
      </section>
      <section className={style.bottomContainer}>
        {dati ? <MapBox /> : null}
      </section>
    </>
  );
}

export default App;
