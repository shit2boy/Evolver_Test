import React, { Component } from "react";

export class Card extends Component {
  render() {
    return (
      <>
        <div
          class=" "
          style={{ width: "250px", borderRadius: "2px", position: "relative" }}
        >
          <img
            class=" card-img grow"
            src={this.props.image}
            width="70px"
            alt="Card_image"
          />
          <small
            className="text-white pa2"
            style={{
              position: "absolute",
              top: "15px",
              left: "25px",
              background: "#000000",
            }}
          >
            {this.props.discount}
          </small>

          <span class="d-block">{this.props.name}</span>
          <strong class="d-block">{this.props.price}</strong>
        </div>
      </>
    );
  }
}

export default Card;
