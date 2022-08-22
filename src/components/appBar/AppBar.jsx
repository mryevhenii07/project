import React from "react";
import { Link } from "react-router-dom";
import Navigation from "../navigation/Navigation";
import Logo from "../../images/Logo.svg";
import s from "./AppBar.module.scss";

const AppBar = () => {
  return (
    <header className={s.header}>
      <div className={s.wrapHeader}>
        <Link to="/">
          <img src={Logo} alt="" />
        </Link>

        <Navigation />
      </div>
    </header>
  );
};

export default AppBar;
