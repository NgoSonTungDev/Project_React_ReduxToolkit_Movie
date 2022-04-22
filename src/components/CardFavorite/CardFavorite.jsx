import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { removeFromFavorite } from '../../features/movies/movieSlice';
import './CardFavorite.scss'

const CardFavorite = (props) => {
    const disPatch = useDispatch();
    const history = useHistory()

    const item = props.dataFR;

    const handleRemoveFromFavorite = (item) =>{
        disPatch(removeFromFavorite(item))
    }

    const handlemoveFavorite = () => {
        history.push(`/movie/${item.id}`)
      };

    return (
        <div>
            <div className="card_favorite">
                <div className="card_favorite_img">
                    <img src={item.image} alt="" />
                </div>

                <div className="card_favorite_name">
                    <p>{item.name}</p>
                </div>

                <div className="icon_favorite_card">
                    <div className="favorite_card_iconsupport" onClick={()=>{handleRemoveFromFavorite(item)}}>
                        <i class='bx bx-trash'></i>
                    </div>
                    <div className="favorite_card_iconsupport" onClick={handlemoveFavorite}>
                        <i class='bx bx-movie-play' ></i>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default CardFavorite;

//Design by Son Tung Developer