import React from 'react';
import { useHistory } from 'react-router-dom';
import './CardWatch.scss'

const CardWatch = (props) => {
    const history = useHistory();
    const item = props.datacard;

    const handleMove = () =>{
        history.push(`/movie/${item.id}`)

    }

    return (
        <div>
            <div className="card_watch" onClick={handleMove}>
                <div className="card_watch_image">
                    <img src={item.image} alt="" />
                </div>
                <div className="card_watch_content">
                    <p>{item.name}</p>
                </div>
            </div>
        </div>
    );
};

export default CardWatch;

//Design by Son Tung Developer