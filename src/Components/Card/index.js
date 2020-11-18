import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

const Card = ({ title, icon, linkId }) => {
  return (
    <Link to={`${linkId}`}>
    <div className="card-root">
      <img src={icon} className="card-image" />
      <span className="card-title-name">{title.length < 10 ? title : `${title.slice(0,10)}...`}</span>
    </div>
    </Link>
    
  );
};

export default Card;
