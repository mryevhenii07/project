import React, { useState } from "react";
import { Link } from "react-router-dom";

import s from "./Navigation.module.scss";
const Navigation = () => {
  const [isCreate, setIsCreatr] = useState(false);
  return (
    <>
      {isCreate ? (
        <ul className={s.list}>
          <li>Website Style Guide</li>
        </ul>
      ) : (
        <ul className={s.list}>
          {" "}
          <Link to="/users" className={s.item}>
            Users
          </Link>
          <Link to="/login" className={s.item}>
            Sing up
          </Link>{" "}
        </ul>
      )}
    </>
  );
};

export default Navigation;
