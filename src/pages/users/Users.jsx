import React, { useState, useEffect } from "react";
import Tooltip from "@material-ui/core/Tooltip";
import { withStyles } from "@material-ui/core/styles";

import { fetchUser } from "../../api/Api";
import s from "./Users.module.scss";
import imgDefault from "../../images/photo-cover.svg";

const LightTooltip = withStyles((theme) => ({
  tooltip: {
    marginTop: 5,
    backgroundColor: "#000000",
    color: "#ffffff",
    boxShadow: theme.shadows[1],
    fontSize: 16,
    fontWeight: 400,
  },
}))(Tooltip);

const Users = () => {
  const [count, setCount] = useState(6);
  const [showMore, setShowMore] = useState(false);

  const [users, setUsers] = useState([]);

  const onClickMore = () => {
    setCount((prevCount) => prevCount + 3);
  };
  useEffect(() => {
    fetchUser(count).then(setUsers);
  }, [count]);

  return (
    <div className={s.users}>
      <h2 className={s.usersMainTitle}>Working with GET request</h2>
      <ul className={s.usersList}>
        {users.map(({ id, email, phone, name, photo, position }) => (
          <li className={s.userItem} key={id}>
            <div className={s.userItemWrap}>
              <img
                src={photo || imgDefault}
                alt="user img"
                width="70"
                height="70"
              />
              <h3 className={s.userName}>{name}</h3>
              <div className={s.wrapInfo}>
                <p className={s.profession}>{position}</p>
                <LightTooltip title={email}>
                  <p className={s.userEmail}>{email}</p>
                </LightTooltip>
                <p className={s.userPhone}>{phone}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className={s.wrapShowMore}>
        {!showMore && (
          <button className={s.showMore} onClick={onClickMore}>
            Show more
          </button>
        )}
      </div>
    </div>
  );
};

export default Users;
