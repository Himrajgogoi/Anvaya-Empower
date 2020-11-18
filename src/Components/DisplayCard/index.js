import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import "./style.css"

const DisplayCard = ({ title, icon, linkId }) => {
  return (
    <Link to={`${linkId}`}>
    <div className="display-card-root" title={title} >
      <img src={icon} className="display-card-image" />
      <span className="display-card-title-name">{title.length < 10 ? title : `${title.slice(0,10)}...`}</span>
    </div>
    </Link>
    
  );
};

export default DisplayCard;
