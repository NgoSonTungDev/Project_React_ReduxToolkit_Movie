import React from "react";
import CustomBottom from "../../components/CustomBottom/CustomBottom";
import Navbar from "../../components/navbar/navbar";
import "./NotFound.scss";
const NotFound = () => {
  return (
    <div>
      <Navbar />
      <div className="not-found">
        <h2>404</h2>
        <p>Page not found</p>
      </div>
      <CustomBottom />
    </div>

  );
};

export default NotFound;

//Design by Son Tung Developer