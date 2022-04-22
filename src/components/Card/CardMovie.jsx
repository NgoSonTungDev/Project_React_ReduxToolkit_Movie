import React from "react";
import { useHistory } from "react-router-dom";
import "./CardMovie.scss";


const CardMovie = (props) => {
  const item = props.cardMovie;
  const history = useHistory();

  const handleAddtoStore = () => {
    history.push(`/movie/${item.id}`)
  };

  return (
    <div className="cardMoveMain" onClick={handleAddtoStore}>
      <div className="img1">
        <img src={item.image} alt="" />
      </div>

      <div class="movie-item-content">
        <div class="movie-item-title">
          {item.name}
        </div>

        <div class="movies-infors-card">
          <div class="movies-infor">
            <i class='bx bx-star'></i>
            <span>9.0</span>
          </div>
          <div class="movies-infor">
            <i class='bx bx-time'></i>
            <span>{item.time}</span>
          </div>
          <div class="movies-infor">
            <i class='bx bx-cube' ></i>
            <span>FHD</span>
          </div>
        </div>
      </div>
      <div className="text">
        {item.country} / {item.type} / {item.authour}
      </div>

      <div className="catagory">
        Series <i className="fas fa-film"></i>
      </div>

      <div className="views">
        {item.release} <i className="far fa-eye"></i>{" "}
      </div>
    </div>
  );
};

export default CardMovie;

//Design by Son Tung Developer
