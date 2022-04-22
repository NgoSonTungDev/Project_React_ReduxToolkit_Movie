import React, { useContext, useEffect, useState } from "react";
import "./CarouselHome.scss";
import Carousel from "react-elastic-carousel";
import "react-multi-carousel/lib/styles.css";
import CardPhu from "../CardPhu/CardPhu";
import datamovie from "../../assets/data/data ";

const CarouselHome = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    let trend = "top";
    setData(
      datamovie.filter((item) =>
        item?.trend?.toLocaleLowerCase()?.includes(trend?.toLocaleLowerCase())
      )
    );
  }, []);

  

  return (
    <div className="carousel_Home">
        {data.map((item) => (
          <CardPhu toptrend={item}     />
        ))} 
    </div>
  );
};

export default CarouselHome;

//Design by Son Tung Developer