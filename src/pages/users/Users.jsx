import { useState, useEffect } from "react";
import s from "./Users.module.scss";
import { userApi, tokenApi } from "../../api/Api";

import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Tooltip from "@material-ui/core/Tooltip";
import Typography from "@material-ui/core/Typography";

import Cover from "../../images/photo-cover.svg";

const LightTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: "#000000",
    color: "#ffffff",
    boxShadow: theme.shadows[1],
    fontSize: 16,
    fontWeight: 400,
  },
}))(Tooltip);

const Users = () => {
  const [users, setUsers] = useState([]);
  const [token, setToken] = useState([]);

  useEffect(() => {
    userApi().then(setUsers);
    tokenApi().then(setToken);
  }, []);
  // console.log(users);
  // console.log(token);

  const onClickMore = () => {
    // console.log('dsds');
  };

  return (
    <div className={s.users}>
      <h2 className={s.usersMainTitle}>Working with GET request</h2>
      <ul className={s.usersList}>
        {users.map(({ id, email, phone, name, photo, position }) => (
          <li className={s.userItem} key={id}>
            <div>
              <img src={photo} alt="" width="70" height="70" />
              <h3 className={s.userName}>{name}</h3>
              <p className={s.profession}>{position}</p>
              <LightTooltip title={email}>
                <p className={s.userEmail}>{email}</p>
              </LightTooltip>
              {/* <p className={s.userEmail}>{email}</p> */}
              <p className={s.userPhone}>{phone}</p>
            </div>
          </li>
        ))}
      </ul>
      <div className={s.wrapShowMore}>
        <button className={s.showMore} onClick={onClickMore}>
          Show more
        </button>
      </div>
    </div>
  );
};

export default Users;
