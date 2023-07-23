import { useContext, createContext, useState } from "react";
import datifake from "./datiFake";

const AppContest = createContext(null);

function ContextProvider({ children }) {
  const [input, setInput] = useState("");
  const [dati, setDati] = useState(null);

  function handlerInput(e) {
    setInput(e.target.value);
  }

  function inviaRichiesta() {
    console.log("inviaRichiesta: " + input);
    async function richiedi() {
      let risp = await fetch(
        "https://geo.ipify.org/api/v2/country,city?apiKey=at_Lt7TT3hCYlndsk3dpvc9AyQqsCalx&ipAddress=" +
          input
      );
      let obj = await risp.json();
      setDati(obj);
    }
    richiedi();
  }

  function caricaDati(par) {
    setDati(par);
  }
  return (
    <AppContest.Provider
      value={{
        input: input,
        dati: dati,
        handlerInput: handlerInput,
        inviaRichiesta: inviaRichiesta,
        caricaDati: caricaDati,
      }}
    >
      {children}
    </AppContest.Provider>
  );
}

function useMyContext() {
  return useContext(AppContest);
}

export { ContextProvider, useMyContext };
