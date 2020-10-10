import React from "react";

const hero = () => {
  return (
    <section class="row  hero">
      <div class="col-lg-3 col-sm-12 offset-1 hero-content ">
        <h5 class="hero-title">Explore our Showroom</h5>
        <span className="">
          Not sure of what you’re looking for? No worries, use
          <span style={{ color: "#F4811F", fontStyle: "italic" }}>
            {" "}
            Lighting Xplorer
          </span>{" "}
          to see what you can get.
        </span>

        <span type="button" class="hero-button shadow mb-2">
          Proceed to Lighting Xplorer{" "}
          <span style={{ color: "#F4811F" }}> &#8594; </span>
        </span>
      </div>
    </section>
  );
};

export default hero;
