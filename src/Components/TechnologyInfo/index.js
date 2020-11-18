import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../HeaderComponent";
import { CarouselProvider, Slider, Slide } from "pure-react-carousel";
import { Card, CardBody, CardText } from "reactstrap";
import "pure-react-carousel/dist/react-carousel.es.css";
import Foter from "../Footer";
import back from "../../images/background-anvaya.png";
import PreviewCard from "../Card";
import { technologySector } from "../../data.json";

const ConsultancySectors = () => {
  const { id } = useParams();
  const [displayData, setDisplayData] = useState({
    head: "",
    desc: [""],
  });

  useEffect(() => {
    technologySector.map((item) => {
      item.points.map((item) => {
        if (item.id == id) {
          console.log(item);
          setDisplayData({
            head: item.head,
            desc: item.desc,
          });
        }
      });
    });
  }, [id]);

  return (
    <div
      style={{
        backgroundImage: `url(${back})`,
        backgroundSize: "cover",
        backgroundFit: "no repeat",
        backgroundPosition: "center center",
      }}
    >
      <Header />
      <div
        style={{
          marginBottom: "0px",
          minHeight: "15vh",
          backgroundColor: `#4086F0`,
          minWidth: "100vw",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-6">
              <h1
                style={{
                  marginTop: "25px",
                  color: "white",
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: "800",
                }}
              >
                Consultancy Sectors
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="container" style={{ paddingTop: "5vh" }}>
        <div className="row">
          <div className="col-12 col-sm-4 offset-sm-4">
            <h2
              style={{
                display: "flex",
                justifyContent: "center",
                fontFamily: "Montserrat, sans-serif",
                fontWeight: "800",
                textTransform: "capitalize",
              }}
            >
              {displayData.head}
            </h2>
            <Card
              style={{
                display: "flex",
                justifyContent: "center",
                height: "2px",
                backgroundColor: "black",
              }}
            ></Card>
          </div>
        </div>
      </div>
      <div
        style={{
          marginTop: "50px",
          minWidth: "100vw",
          minHeight: "50vh",
          backgroundColor: `#B8EFA4`,
          backgroundSize: "12vw 12vh",
          backgroundRepeat: "no repeat",
          backgroundPosition: "center center",
          opacity: "0.8",
          backdropFilter: "blur(8px)",
        }}
      >
        <div
          className="container"
          style={{ paddingTop: "10vh", paddingBottom: "10vh" }}
        >
          <div className="row">
            <div className="col-12">
              <Card style={{ padding: "4vh 4vw 4vh 4vw" }}>
                <CardBody style={{ border: "1px solid" }}>
                  <CardText>
                    {" "}
                    <h4
                      style={{
                        fontFamily: "Montserrat, sans-serif-800x",
                        color: "black",
                      }}
                    >
                      {displayData.desc.map((p) => (
                        <p>{p}</p>
                      ))}
                    </h4>
                  </CardText>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </div>
      <Foter />
    </div>
  );
};
export default ConsultancySectors;
