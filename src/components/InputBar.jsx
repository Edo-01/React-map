import arrow from "../assets/img/icon-arrow.svg";
import style from "../assets/css/InputBar.module.css";

import { useMyContext } from "../context";

function InputBar() {
  const { input, dati, handlerInput, inviaRichiesta } = useMyContext();

  return (
    <div className={style.containerInput}>
      <input
        onChange={handlerInput}
        type="text"
        placeholder="Search for any IP address or domain"
        value={input}
      />
      <button onClick={inviaRichiesta} type="button">
        <img src={arrow} alt="" />
      </button>
    </div>
  );
}

export default InputBar;
