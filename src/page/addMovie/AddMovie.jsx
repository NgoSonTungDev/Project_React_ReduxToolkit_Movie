import React, { useEffect, useState } from "react";
import "./AddMovie.scss";
import Navbar from "../../components/navbar/navbar";
import CustomBottom from "../../components/CustomBottom/CustomBottom";
import FormAddMovie from "../../components/FormAddMovie/FormAddMovie";

const AddMovie = () => {
  const [background, setBackground] = useState("");

  const hanngdleGetData = (bg) => {
    setBackground(bg);
  };

  useEffect(() => {});

  return (
    <div>
      <Navbar />
      <div
        className="container-AddMovie"
        style={{ backgroundImage: `url(${background})` }}
      >
        <FormAddMovie hanngdleGetData={hanngdleGetData} />
      </div>
      <CustomBottom />
    </div>
  );
};

export default AddMovie;


//Design by Son Tung Developer