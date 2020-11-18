import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import DisplayCard from "../DisplayCard";
import data from "../../data.json";
import "./style.css";

const TopicMarquee = ({ cardData }) => {
  useEffect(() => {
    console.log(cardData);
  }, []);

  return (
    <div className="consultancyByService-container">
      <div class="marquee">
        <p>
          <div className="consultancyByService">
            {cardData.points.map((item) => (
                <div className="display-card-service-container">
                  <DisplayCard
                    icon={item.icon}
                    title={item.head}
                    linkId={`/technologies/${item.id}`}
                  />
                </div>
            ))}
          </div>
        </p>
      </div>
    </div>
  );
};

export default TopicMarquee;
