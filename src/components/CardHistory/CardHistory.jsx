import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { removeFromHistory } from "../../features/movies/movieSlice";
import "./CardHistory.scss";

const CardHistory = (props) => {
  const item = props.ListHistory;
  const history = useHistory();
  const disPatch = useDispatch();

  const handlemove = () => {
    history.push(`/movie/${item.id}`)
  };

  const handleRemoveFromHis = (item) =>{
    disPatch(removeFromHistory(item))
  }

  return (
    <div class='movie-card-history' >

      <div class='image-card-history' style={{ backgroundImage: `url(${item.image})` }}></div>
      <button className="removeCard" onClick={()=>{handleRemoveFromHis(item)}}><i class='bx bx-x-circle' ></i></button>
      
      <div class='wave'></div>
      <div class='wave'></div>
      <div class='wave'></div>

      <div class='info-card-history' onClick={handlemove}>
        <h2 class='title' >{item.nameMovie}</h2>
        <div class='artist'>{item.type}</div>
      </div>

    </div>
  );
};

export default CardHistory;

//Design by Son Tung Developer