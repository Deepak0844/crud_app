import { useHistory } from "react-router-dom";
import Button from '@mui/material/Button';
import { useState } from 'react';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import * as React from 'react';

export function Users({ username, designation, avatar, id, deleteBtn }) {
  const history = useHistory();
  const [hover, setHover] = useState(false);
  const showTxt = () => {
    setHover(true);
  };
  const hideTxt = () => {
    setHover(false);
  };
  return (
    <section>
      <div className="row">
        <div className="col-12 col-sm-6 col-lg-3">
          <div className="single_advisor_profile wow fadeInUp" data-wow-delay="0.2s" style={{ visibility: "visible", animationDelay: "0.2s", animationName: "fadeInUp" }}>
            {/* user avatar */}
            <div className="advisor_thumb"><img src={avatar} alt={username}></img>
              {/* icon */}
              <div className="social-info">
                <Button onMouseEnter={showTxt} onMouseLeave={hideTxt} onClick={() => { history.push("/profile/" + id); }} style={{ height: "10px" }}>
                  {hover ? "Profile" : <RemoveRedEyeIcon style={{ height: "20px" }} />}</Button>
                {deleteBtn}
              </div>
            </div>
            {/* user Details */}
            <div className="single_advisor_details_info">
              <h6>{username}</h6>
              <p className="designation">{designation}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
