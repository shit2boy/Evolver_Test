import React, { Component } from "react";
import { Form } from "react-bootstrap";
import Logo from "../images/Logo.svg";
import telephone from "../images/telephone.svg";
import mail from "../images/mail.svg";
import location from "../images/location.svg";
// import Logo from "../images/Logo.svg";
export class Navigation extends Component {
  render() {
    return (
      <>
        <div className="container-fluid bg-dark headBanner" id="topContent">
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
        <nav class="navbar navbar-expand-lg navbar-light bg-default center">
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="container">
            <a class="navbar-brand" href="/">
              <img src={Logo} alt="Logo" width="75px" />
            </a>

            <div class="collapse navbar-collapse" id="navbarResponsive">
              <div className="mx-auto w-50">
                <Form.Group>
                  <Form.Control
                    type="text"
                    placeholder="Search for a roduct,category or space"
                  />
                </Form.Group>
              </div>
              <ul class="navbar-nav ml-auto">
                <li class="nav-item active">
                  <a class="nav-link" id="account" href="/">
                    MY ACCOUNT
                    <span class="sr-only">(current)</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" id="list" href="/">
                    LIST
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" id="cart" href="/">
                    CART
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <hr className="mt-0" />
        <div className=" container d-lg-flex d-none justify-content-between">
          <p style={{ color: "#F4811F", fontSize: "12px" }}>
            LIGHTING Explorer
          </p>
          <p style={{ color: "#F4811F", fontSize: "12px" }}>OFFICE </p>
          <p style={{ color: "#F4811F", fontSize: "12px" }}>HOTEL</p>
          <p style={{ color: "#F4811F", fontSize: "12px" }}>HOME</p>
          <p style={{ fontSize: "12px" }}>All PRODUCTS</p>
          <p style={{ fontSize: "12px" }}>PENDANT LIGHT</p>
          <p style={{ fontSize: "12px" }}>CHANDELIER</p>
          <p style={{ fontSize: "12px" }}>SWITCHES & SOCKETS</p>
          <p style={{ fontSize: "12px" }}>CEILING LAMP</p>
          <p style={{ fontSize: "12px" }}> WALL LAMP</p>
        </div>
        <hr className="bg-warning mb-0 d-none d-lg-block" />
      </>
    );
  }
}

export default Navigation;
