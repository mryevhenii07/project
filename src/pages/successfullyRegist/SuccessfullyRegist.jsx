import React from "react";

import s from "./SuccessfullyRegist.module.scss";
import Success from "../../images/success-image.svg";

const SuccessfullyRegist = () => {
  return (
    <div className={s.wrapBlock}>
      <h1 className={s.title}>User successfully registered</h1>
      <div className={s.wrapImg}>
        <img className={s.img} src={Success} alt="img success" />
      </div>
    </div>
  );
};

export default SuccessfullyRegist;
