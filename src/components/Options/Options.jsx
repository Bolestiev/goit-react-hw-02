import React from "react";
import s from "./Options.module.css";

const Options = () => {
  return (
    <ul className={s.buttonWrapper}>
      <li>
        <button className={s.optionButton}>Good</button>
      </li>
      <li>
        <button className={s.optionButton}>Neutral</button>
      </li>
      <li>
        <button className={s.optionButton}>Bad</button>
      </li>
      <li>
        <button className={s.optionButton}>Reset</button>
      </li>
    </ul>
  );
};

export default Options;
