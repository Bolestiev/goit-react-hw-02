import React from "react";
import s from "./Feedback.module.css";

const Feedback = () => {
  return (
    <ul className={s.listWrapper}>
      <li className={s.listStats}>
        Good: <span></span>
      </li>
      <li className={s.listStats}>
        Neutral: <span></span>
      </li>
      <li className={s.listStats}>
        Bad: <span></span>
      </li>
      <li className={s.listStats}>
        Total: <span></span>
      </li>
      <li className={s.listStats}>
        Positive: <span></span>
      </li>
    </ul>
  );
};

export default Feedback;
