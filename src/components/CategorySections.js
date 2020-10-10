import React, { Component } from "react";
import centric from "../images/centric.svg";
import Vector from "../images/Vector.svg";
// import { shopBYCategories } from "../Data";
import Card from "./card";
import { shopBYSpace, shopBYCategories, shopBYPopularProduct } from "../Data";
import { Button } from "react-bootstrap";

export default class CategorySections extends Component {
  render() {
    return (
      <div className="container">
        <h5 className="mt-4 mb-2">
          Shop By Space{" "}
          <a
            href="/"
            style={{ color: "#F4811F", fontSize: "12px", cursor: "pointer" }}
          >
            view all
          </a>
        </h5>
        <small className="d-block mb-5">
          Select the type of apartment you want to light up.
        </small>
        <div className="row">
          {shopBYSpace.map((item) => (
            // <div className="">
            <div className="col" style={{ position: "relative" }}>
              <img
                className="ma-3 pa-2"
                src={item.img}
                alt="roomImg"
                width="420px"
              />{" "}
              <p
                className="btn btn-light pa-2"
                style={{
                  position: "absolute",
                  left: "30px",
                  color: "#F4811F",
                  bottom: "5px",
                }}
              >
                {item.name}
              </p>
            </div>
            // </div>
          ))}
        </div>

        <h5 className="mt-5 mb-4">
          Popular Categories{" "}
          <a
            href="/"
            style={{ color: "#F4811F", fontSize: "12px", cursor: "pointer" }}
          >
            view all
          </a>
        </h5>
        <div className="row">
          {shopBYCategories.map((item) => (
            <div className="col" style={{ position: "relative" }}>
              <div className="card">
                {" "}
                <img
                  className="img-fluid grow"
                  src={item.img}
                  alt="icon"
                  width="100%"
                  // height="350px"
                />
              </div>
              <p
                className="btn bg-light px-3"
                style={{
                  position: "absolute",
                  left: "35px",
                  color: "#F4811F",
                  bottom: "10px",
                }}
              >
                {item.name}
              </p>
            </div>
          ))}
        </div>
        <h5 className="mt-5 mb-4">
          Popular Products{" "}
          <a
            href="/"
            style={{ color: "#F4811F", fontSize: "12px", cursor: "pointer" }}
          >
            view all
          </a>
        </h5>
        <div className="row shadow-1">
          {shopBYPopularProduct.map((item) => (
            <div className="col-sm mb-3 pa-3">
              <Card image={item.img} price={item.price} name={item.name} />
            </div>
          ))}
        </div>
        <h5 className="mt-5 mb-4">
          Products on Sale{" "}
          <a
            href="/"
            style={{ color: "#F4811F", fontSize: "12px", cursor: "pointer" }}
          >
            view all
          </a>
        </h5>
        <div className="row shadow-1 mb-5">
          {shopBYPopularProduct.map((item) => (
            <div className="col-sm mb-3 pa-4">
              <Card
                image={item.img}
                discount={item.discount}
                price={item.price}
                name={item.name}
              />
            </div>
          ))}
        </div>
        <div class="row no-gutters shadow-1 pa-4 mb-5">
          <div class="col-sm" style={{ background: "#F2F2F2" }}>
            <div className=" offset-1 mt-5">
              <p>
                <img src={Vector} alt="mail" width="25px" /> Join our mailing
                list
              </p>
              <p>
                Subscribe to our newsletter to get <br /> updates on our latest
                offers!
              </p>
              <div className="row">
                {" "}
                <input
                  className="col-sm-6"
                  type="search"
                  placeholder="Enter email address here"
                  //   size="35"
                />
              </div>
              <Button
                className="pa-2 mt-3 mb-3"
                style={{ backgroundColor: "#000000", color: "#ffffff" }}
              >
                Subscribe
              </Button>
            </div>
          </div>
          <div class="col-sm">
            <img src={centric} alt="art" />{" "}
          </div>
        </div>
      </div>
    );
  }
}
