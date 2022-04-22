import React, { useState } from "react";
import "./CardPhu.scss";
import Snackbar from "@mui/material/Snackbar";
import { useDispatch } from "react-redux";
import {
  addmoviesFavorite,
  removeFromFavorite,
} from "../../features/movies/movieSlice";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const CardPhu = (props) => {
  const [check, setCheck] = useState(true);
  const item = props.toptrend;
  const dispatch = useDispatch();
  
  const history = useHistory();

  /////////////////////////////
  const [message, setMessage] = useState("");
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  ////////////////////////////

  const handleMovePage = () => {
    history.push(`/movie/${item.id}`);
  };

  const handdleFavorite = () => {
    var icon_Heart = document.querySelector("#icon_Heart");
    if (check === true) {
      icon_Heart.classList.remove("bx-heart");
      icon_Heart.classList.add("bxs-heart");
      handleClick();
      setCheck(false);
      setMessage("Đã thêm vào Danh Sách Yêu Thích 😀");
      dispatch(
        addmoviesFavorite({
          id: item.id,
          image: item.image,
          name: item.name,
        })
      );
    } else {
      handleClick();
      icon_Heart.classList.remove("bxs-heart");
      icon_Heart.classList.add("bx-heart");
      setCheck(true);
      setMessage("Đã Xóa Khỏi Danh Sách Yêu Thích ☹️");
      dispatch(
        removeFromFavorite({
          id: item.id,
          image: item.image,
          name: item.name,
        })
      );
    }
  };

  return (
    <div>
      <div className="card_Home">
        <div className="card_Home_image" onClick={handleMovePage}>
          <img src={item.backgrou} alt="" />
        </div>
        <div className="card_Home_text">
          <div className="card_Home_text_1">
            <marquee behavior="" direction="">
              {item.name}
            </marquee>
          </div>
          <div className="card_Home_text_2">
            <i
              id="icon_Heart"
              onClick={handdleFavorite}
              className="bx bx-heart"
            ></i>
          </div>
        </div>
      </div>
      <Snackbar
        open={open}
        autoHideDuration={4000}
        onClose={handleClose}
        message={message}
      />
    </div>
  );
};

export default CardPhu;

//Design by Son Tung Developer
