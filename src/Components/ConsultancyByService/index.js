import React from "react";
import DisplayCard from "../DisplayCard";
import data from "../../data.json";
import "./style.css";

const ConsultancyByService = () => {
  return (
    <div className="consultancyByService-container">
      <div class="marquee">
        <p>
          <div className="consultancyByService">
            {data.consultancyServices.map((item) => (
              <div className="display-card-service-container">
                <DisplayCard
                  icon={item.icon}
                  title={item.head}
                  linkId={`/ConsultancyServices/${item.id}`}
                />
              </div>
            ))}
          </div>
        </p>
      </div>
    </div>
  );
};

export default ConsultancyByService;
