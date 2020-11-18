import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../HeaderComponent";
import { CarouselProvider, Slider, Slide } from "pure-react-carousel";
import { Card, CardBody, CardText } from "reactstrap";
import "pure-react-carousel/dist/react-carousel.es.css";
import Foter from "../Footer";
import back from "../../images/background-anvaya.png";
import PreviewCard from "../Card";
import { consultancySectors as consultancySectorsData } from "../../data.json";

const ConsultancySectors = () => {
  const { id } = useParams();
  const [displayData, setDisplayData] = useState({
    head: "",
    desc: [""],
    photo: "",
  });

  useEffect(() => {
    const displayData = consultancySectorsData.find((e) => e.id === id);
    setDisplayData(displayData);
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
      <CarouselProvider
        naturalSlideWidth={100}
        totalSlides={3}
        isIntrinsicHeight="true"
        isPlaying="true"
        style={{
          marginTop: "0px",
          backgroundColor: `#C4C4C4`,
          minHeight: "30vh",
        }}
      >
        <Slider>
          <Slide
            index={0}
            style={{
              backgroundImage:
                "url('https://images.pexels.com/photos/7075/people-office-group-team.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')",
              backgroundSize: "cover",
              backgroundFit: "no repeat",
              backgroundPosition: "center center",
              minHeight: "30vh",
            }}
          >
            <div
              className="container"
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                paddingTop: "30vh",
              }}
            >
              <div className="row">
                <div className="col-3">
                  <h4 className="text-white"> Slide1 </h4>
                </div>
              </div>
            </div>
          </Slide>
          <Slide
            index={1}
            style={{
              backgroundImage:
                "url('https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&h=650&w=940')",
              backgroundSize: "cover",
              backgroundFit: "no repeat",
              backgroundPosition: "center center",
              minHeight: "30vh",
            }}
          >
            <div
              className="container"
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                paddingTop: "30vh",
              }}
            >
              <div className="row">
                <div className="col-3">
                  <h4 className="text-white"> Slide1 </h4>
                </div>
              </div>
            </div>
          </Slide>
          <Slide
            index={2}
            style={{
              backgroundImage:
                "url('https://images.pexels.com/photos/4386373/pexels-photo-4386373.jpeg?auto=compress&cs=tinysrgb&h=650&w=940')",
              backgroundSize: "cover",
              backgroundFit: "no repeat",
              backgroundPosition: "center center",
              minHeight: "30vh",
            }}
          >
            <div
              className="container"
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                paddingTop: "30vh",
              }}
            >
              <div className="row">
                <div className="col-3">
                  <h4 className="text-white"> Slide1 </h4>
                </div>
              </div>
            </div>
          </Slide>
        </Slider>
      </CarouselProvider>
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
          backgroundImage: `url(${displayData.photo})`,
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
      <div className="preview-container">
        {consultancySectorsData
          .filter(
            (item) => item.head.toLowerCase() !== displayData.head.toLowerCase()
          )
          .map((item) => (
            <div className="preview-card-container">
              <PreviewCard
                title={item.head}
                icon={item.icon}
                linkId={`/ConsultancySectors/${item.id}`}
              />
            </div>
          ))}
      </div>
      <Foter />
    </div>
  );
};
export default ConsultancySectors;
