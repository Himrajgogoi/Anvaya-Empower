import React, { useState } from "react";
import DisplayCard from "../DisplayCard";
import data from "../../data.json";
import "./style.css";

const ConsultancyBySector = () => {
  return (
    <div className="consultancyBySector-container">
      <div class="marquee">
        <p>
          <div className="consultancyBySector">
            {data.consultancySectors.map((item) => (
              <div className="display-card-sector-container">
                <DisplayCard
                  icon={item.icon}
                  title={item.head}
                  linkId={`/ConsultancySectors/${item.id}`}
                />
              </div>
            ))}
          </div>
        </p>
      </div>
    </div>
  );
};

export default ConsultancyBySector;
