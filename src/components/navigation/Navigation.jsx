import React, { useContext } from "react";
import { Link } from "react-router-dom";

import s from "./Navigation.module.scss";
import { IsNav } from "../../App";
const Navigation = () => {
  const { isNav } = useContext(IsNav);
  return (
    <>
      {isNav ? (
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
