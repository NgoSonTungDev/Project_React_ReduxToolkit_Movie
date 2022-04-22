import React, { useEffect, useState } from "react";
import "./MovieHistory.scss";
import CustomBottom from "../../components/CustomBottom/CustomBottom";
import Navbar from "../../components/navbar/navbar";
import CardHistory from "../../components/CardHistory/CardHistory";
import { useDispatch, useSelector } from "react-redux";
import { dataViewedHistory } from "../../features/selectors";
import { cleanFullHistory } from "../../features/movies/movieSlice";

const MovieHistory = () => {
  const ListHistory = useSelector(dataViewedHistory);
  const disPatch = useDispatch();

  const group = [];

  ListHistory.forEach((element) => {
    const o = (group[element.id] = group[element.id] || {
      ...element,
    });
    return o;
  });

  const handleCleanCart = () =>{
    disPatch(cleanFullHistory())  
  }


  return (
    <div>
      <Navbar />
      <div className="movie_History">
        <h2>lịch sử phim bạn đã xem</h2>

        <button className="clear-btn" onClick={() => handleCleanCart()}>
          Clear History <i class="bi bi-trash"></i>
        </button>

        <div className="movie_history_card_history">
          {group.map((item) => (
            <CardHistory ListHistory={item} />
          ))}
        </div>
      </div>
      <CustomBottom />
    </div>
  );
};

export default MovieHistory;


//Design by Son Tung Developer