import React from "react";
import s from "./Users.module.scss";

import Cover from "../../images/photo-cover.svg";

const Users = () => {
  return (
    <div className={s.users}>
      <h2 className={s.usersMainTitle}>Working with GET request</h2>
      <ul className={s.usersList}>
        <li className={s.userItem}>
          <div>
            <img src={Cover} alt="" width="70" height="70" />
            <h3 className={s.userName}>name</h3>
            <p className={s.profession}>developer</p>
            <p className={s.userEmail}>Email</p>
            <p className={s.userPhone}>+390900975648</p>
          </div>
        </li>
        <li className={s.userItem}>
          <div>
            <img src={Cover} alt="" width="70" height="70" />
            <h3 className={s.userName}>name</h3>
            <p className={s.profession}>developer</p>
            <p className={s.userEmail}>Email</p>
            <p className={s.userPhone}>+390900975648</p>
          </div>
        </li>
        <li className={s.userItem}>
          <div>
            <img src={Cover} alt="" width="70" height="70" />
            <h3 className={s.userName}>name</h3>
            <p className={s.profession}>developer</p>
            <p className={s.userEmail}>Email</p>
            <p className={s.userPhone}>+390900975648</p>
          </div>
        </li>
        <li className={s.userItem}>
          <div>
            <img src={Cover} alt="" width="70" height="70" />
            <h3 className={s.userName}>name</h3>
            <p className={s.profession}>developer</p>
            <p className={s.userEmail}>Email</p>
            <p className={s.userPhone}>+390900975648</p>
          </div>
        </li>
        <li className={s.userItem}>
          <div>
            <img src={Cover} alt="" width="70" height="70" />
            <h3 className={s.userName}>name</h3>
            <p className={s.profession}>developer</p>
            <p className={s.userEmail}>Email</p>
            <p className={s.userPhone}>+390900975648</p>
          </div>
        </li>
        <li className={s.userItem}>
          <div>
            <img src={Cover} alt="" width="70" height="70" />
            <h3 className={s.userName}>name</h3>
            <p className={s.profession}>developer</p>
            <p className={s.userEmail}>Email</p>
            <p className={s.userPhone}>+390900975648</p>
          </div>
        </li>
      </ul>
      <div className={s.wrapShowMore}>
        {" "}
        <button className={s.showMore}>Show more</button>
      </div>
    </div>
  );
};

export default Users;
