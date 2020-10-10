import React, { Component } from "react";
import flogo from "../images/flogo.svg";
import clogo from "../images/Clogo.svg";
import Grouptwit from "../images/Grouptwit.svg";
import Groupgram from "../images/Groupgram.svg";
import GroupliInk from "../images/GroupliInk.svg";
import Vectorunknonw from "../images/Vectorunknonw.svg";
import Groupfacebook from "../images/Groupfacebook.svg";
import Vectortube from "../images/Vectortube.svg";
import WAlogo from "../images/WALogo.svg";
import ios from "../images/ios.svg";
import play from "../images/play.svg";
import telephone from "../images/telephone.svg";
import mail from "../images/mail.svg";
import location from "../images/location.svg";

export class Footer extends Component {
  render() {
    return (
      <>
        <div
          className="container-fluid footer"
          style={{ background: "#333333" }}
        >
          <div className="row offset-1  pv5 mt-4">
            <div className="col-sm-3 mb-4 text-white">
              <img src={flogo} alt="logoIcon" width="140px" />
              <div className="mt-3">
                <span className="d-block">
                  Talk about the company here Brighten your nights with modern
                  designer lighting from Thelightinghaus.com Our range features
                  top brands and all the latest contemporary lighting styles to
                  illuminate your home and garden.
                </span>
              </div>
            </div>
            <div className="col-sm-2 mb-4 text-white">
              <p>Quick Links</p>
              <ul style={{ listStyleType: "none" }}>
                <li>
                  <span
                    style={{
                      color: "#F4811F",
                      fontSize: "12px",
                      cursor: "pointer",
                    }}
                  >
                    LIGHTING Explorer
                  </span>
                </li>
                <li>
                  <span
                    style={{
                      fontSize: "12px",
                      cursor: "pointer",
                      textDecoration: "none",
                    }}
                  >
                    OFFICE
                  </span>
                </li>
                <li>
                  <span
                    style={{
                      fontSize: "12px",
                      cursor: "pointer",
                      textDecoration: "none",
                    }}
                  >
                    HOTEL
                  </span>
                </li>
                <li>
                  <span
                    style={{
                      fontSize: "12px",
                      cursor: "pointer",
                      textDecoration: "none",
                    }}
                  >
                    HOME
                  </span>
                </li>
                <li>
                  <span
                    style={{
                      fontSize: "12px",
                      cursor: "pointer",
                      textDecoration: "none",
                    }}
                  >
                    MY ACCOUNT
                  </span>
                </li>
                <li>
                  <span
                    style={{
                      fontSize: "12px",
                      cursor: "pointer",
                      textDecoration: "none",
                    }}
                  >
                    CART
                  </span>
                </li>
              </ul>
            </div>
            <div className="col-sm-3 mb-4 text-white">
              <p>Connects</p>
              <p>Connect with us on social media</p>
              <div>
                <img
                  className="mr-2"
                  src={Vectorunknonw}
                  width="20px"
                  alt="icon"
                />
                <img className="mr-2" src={WAlogo} alt="icon" />
                <img className="mr-2" src={GroupliInk} alt="icon" />
                <img className="mr-2" src={Vectortube} alt="icon" />
                <img className="mr-2" src={Grouptwit} alt="icon" />
                <img className="mr-2" src={Groupfacebook} alt="icon" />
                <img src={Groupgram} alt="icon" />
              </div>
            </div>
            <div className="col-sm-3 mb-4 text-white">
              <div>
                <img src={clogo} alt="icon" width="30px" />
                <span>Download our mobile App</span>
                <span className="">Get access to unlimited offers</span>{" "}
                <p>Connect with us on social media</p>
                <div>
                  <img className="mr-2" src={ios} alt="icon" width="130px" />
                  <img src={play} alt="icon" width="120px" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid headBanner bg-dark " id="topContent">
          <div className="container d-none d-lg-flex align-items-center text-white">
            <p className="mr-3">
              {" "}
              <img src={telephone} alt="telephone" width="15px" />{" "}
              +2348025018557
            </p>
            <p className="mr-3">
              {" "}
              <img src={location} alt="telephone" width="10px" /> 35 Freedom
              Way, Lekki Phase 1, Lagos, Nigeria
            </p>
            <p className="mr-3">
              {" "}
              <img src={mail} alt="telephone" width="15px" />{" "}
              sales@thelightinghaus.com
            </p>
          </div>
        </div>
      </>
    );
  }
}

export default Footer;
