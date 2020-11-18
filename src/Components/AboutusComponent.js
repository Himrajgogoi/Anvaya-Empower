import React from "react";
import Header from "./HeaderComponent";
import { Card, CardBody, CardText } from "reactstrap";
import Foter from "./Footer";
import back from "../images/background-anvaya.png";

function Aboutus(props) {
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
          backgroundColor: `rgb(13, 6, 145)`,
          minWidth: "100vw",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-6">
              <h1 style={{ marginTop: "25px", color: "white" }}>About Us</h1>
            </div>
          </div>
        </div>
      </div>
      <div
        className="container"
        style={{ marginTop: "10vh", marginBottom: "10vh" }}
      >
        <div className="row">
          <div
            className="col-12"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Card
              style={{
                minHeight: "60vh",
                minWidth: "80vw",
                backgroundColor: `#C4C4C4`,
                boxShadow: "5px 10px 15px rgb(93, 93, 99)",
              }}
            >
              <div className="container">
                <div className="row">
                  <div className="col-12 col-md-6">
                    <img
                      src="https://www.flaticon.com/svg/static/icons/svg/3534/3534080.svg"
                      alt="guide"
                      className="img-fluid"
                      style={{
                        height: "23vh",
                        width: "20vw",
                        padding: "8px 2px 8px 2px",
                        display: "flex",
                        flexDirection: "row",
                        marginTop: "3vh",
                        marginLeft: "3vw",
                      }}
                    />
                  </div>
                  <div className="col-12 col-md-6">
                    <CardBody>
                      <CardText>
                        <p>
                          {" "}
                          <h4
                            className="text-white"
                            style={{
                              fontFamily: "Montserrat, sans-serif-800x",
                            }}
                          >
                            {" "}
                            Welcome, at AnvayaEmpower we believe in providing
                            innovative solutions to your career or technological
                            problems.We broadly offer two kinds of services, as
                            mentioned.{" "}
                          </h4>
                        </p>
                        <p>
                          Anvaya business consultants is a division of Anvaya
                          innovations, engaged to provide business solutions to
                          firms of different industries. Our competencies focus
                          to provide solutions such as Disruption Recovery
                          Strategy, Growth Strategy, Strategic Organization
                          Review, Business Plan Formulations and few more. We as
                          a consulting company startup, focus on a process which
                          comprises of steps like understanding the company’s
                          current scenario, analyzing its requirements, figuring
                          out the appropriate business solutions and more to
                          achieve the best results for the company. We help the
                          organizations to grab the opportunities available to
                          them or create opportunities in the appropriate
                          direction using the best vehicle and combine together
                          to have healthy growth. We provide reliable business
                          advisory services in multiple domains like branding,
                          marketing, digital marketing, sales, education,
                          technology, automobile and many more.
                          <br />
                          We believe in the 3 I’s which are to improve,
                          improvise and innovate. This belief helps us to come
                          up with efficient results for our clients and we value
                          their success. Our significant expertise in innovation
                          adds strength and quality to our service. Being a
                          business services provider we strive for the
                          efficiency of our service which reflects on our
                          excellence.
                          <br />
                          Our underlying foundations are associated with Anvaya
                          Innovations, which Is a rapidly growing start-up,
                          established in 2016 by young minds of Jorhat, Assam.
                          It focusses to provide services on AI, IOT, R&amp;D
                          and skill development of upcoming generation. Over the
                          years Anvaya Innovations has undertaken projects of
                          reputed organization like CSIR-Neist, Oil sector
                          organizations along with private firms which included
                          projects like remote monitoring of required soil
                          elements for tea plantation using networked sensors,
                          cloud monitoring and execution of critical industrial
                          operations, prediction of weather using Machine
                          Learning and IOT.
                          <br />
                          Previously dealt with projects like time cycle
                          controller for oil sector organizations, presently
                          they are working on a CSIR project – Hybrid Electric
                          Vehicle.
                        </p>
                      </CardText>
                    </CardBody>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
      <Foter />
    </div>
  );
}

export default Aboutus;
