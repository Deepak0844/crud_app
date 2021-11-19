import Button from '@mui/material/Button';
import { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import * as React from 'react';
import { Users } from './Users';

export function ListUser({ user, setUser }) {
  const [hover, setHover] = useState(false);
  const showTxt = () => {
    setHover(true);
  };
  const hideTxt = () => {
    setHover(false);
  };
  return (
    <div className="userList">
      {user.map(({ username, designation, avatar }, index) => (
        <Users
          username={username}
          designation={designation}
          avatar={avatar}
          id={index}
          key={index}
          deleteBtn={<Button
            onMouseEnter={showTxt} onMouseLeave={hideTxt}
            style={{ height: "0px", minWidth: "10px" }} onClick={() => {
              const deleteIdx = index;
              const remainingUser = user.filter((_usr, idx) => idx !== deleteIdx);
              setUser(remainingUser);
            }}>{hover ? "Delete" : <DeleteIcon style={{ width: "20px" }} />}</Button>} />
      ))}
    </div>
  );
}
