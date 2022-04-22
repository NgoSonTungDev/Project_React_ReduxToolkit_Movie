import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CardFavorite from '../../components/CardFavorite/CardFavorite';
import CustomBottom from '../../components/CustomBottom/CustomBottom';
import Navbar from '../../components/navbar/navbar';
import { cleanFullFavorite } from '../../features/movies/movieSlice';
import { dataMoviesFavorite } from '../../features/selectors';
import "./MovieFavorite.scss"

const MovieFavorite = () => {
  const ListFavorite = useSelector(dataMoviesFavorite)
  const dispatch = useDispatch()

  const deleteALL = () =>{
    dispatch(cleanFullFavorite());
  }

    return (
        <div>
          <Navbar />
          <div className="movie_Favorite">
            <h2>danh sách phim yêu thích của bạn</h2>
    
            <button className="clear-btn-favorite" onClick={deleteALL}>
              Clear Favorite <i class="bi bi-trash"></i>
            </button>
            <div className="movie_history_card_favorite">
              {ListFavorite.map((item)=>(
                <CardFavorite dataFR={item}/>             
              ))}
            </div>
          </div>
          <CustomBottom />
        </div>
      );
};

export default MovieFavorite;

//Design by Son Tung Developer