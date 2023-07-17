import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => (
  <div className="jumbotron">
    <h1> Pluralsight administration</h1>
    <p> React and redux router for ultra responsive web pages</p>
    <Link to="about" className="btn btn-primary btn-lg" >
      Learn more
    </Link>
  </div>
);

export default HomePage;
