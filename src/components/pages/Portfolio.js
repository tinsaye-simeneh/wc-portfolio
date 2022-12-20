import React from "react";
import SIdeBar from "../SideBar";
import "../../style/index.css";
import Cards from "../Cards";

const Portfolio = () => {
  return (
    <div className="container-fluid pt-5 bg-black Page-Container Portfolio-Page-Container">
      <div className="row py-2">
        <div className="col-md-3 col-11 mx-auto mt-2">
          <SIdeBar Portfolio='active'/>
        </div>

        <div className="col-md-8 text-white" style={{ fontSize: "1.5rem" }}>
          <div className="row">
            <span className="text-center my-4">Portfolio</span>
          </div>
          <div className="row text-center mx-auto">
            <Cards />
            <Cards />
            <Cards />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
