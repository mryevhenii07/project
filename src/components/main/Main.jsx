import React from "react";
import { Link } from "react-router-dom";
import s from "./Main.module.scss";

const Main = () => {
  return (
    <main className={s.main}>
      <div className={s.wrapMain}>
        <div className={s.mainBlock}>
          {" "}
          <h1 className={s.mainTitle}>
            Test assignment for front-end developer
          </h1>
          <p className={s.mainSubTitle}>
            What defines a good front-end developer is one that has skilled
            knowledge of HTML, CSS, JS with a vast understanding of User design
            thinking as they'll be building web interfaces with accessibility in
            mind. They should also be excited to learn, as the world of
            Front-End Development keeps evolving.
          </p>
          <Link to="/login" className={s.mainBtn}>
            Sing up
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Main;
