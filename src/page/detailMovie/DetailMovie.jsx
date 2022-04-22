import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Snackbar from "@mui/material/Snackbar";
import Navbar from "../../components/navbar/navbar";
import { FullDataMovie } from "../../features/selectors";
import "./DetailMovie.scss";
import CustomBottom from "../../components/CustomBottom/CustomBottom";
import video from "./video1.mp4";
import Comment from "../../components/Comment/Comment";
import { addmoviesFavorite, addmoviesHistory, removeFromFavorite } from "../../features/movies/movieSlice";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const DetailMovie = () => {
  const [data, setData] = useState([]);
  const [message, setMessage] = useState('')
  const [check, setCheck] = useState(true)
  const location = useLocation();
  const dispatch = useDispatch();
  const listdata = useSelector(FullDataMovie);
  const history = useHistory();
  const id = location.pathname.split("movie/")[1];

  useEffect(() => {
    setData(listdata[parseInt(id) - 1]);
    window.scrollTo(0, 0);
  }, []);

  const handlevideo = () => {
    var video = document.getElementById("video");
    video.play();
  };

  const handdlePlayNow = () => {
    history.push(`/watch/movie/${id}`)
    dispatch(
      addmoviesHistory({
        id: id,
        image: data.image,
        nameMovie: data.name,
        type: data.type,
      })
    );
  };

  const handleFavorite = () => {
    var icon_favorite = document.getElementById("icon_favorite");
    if (check === true) {
      handleClick();
      icon_favorite.classList.remove("bx-heart")
      icon_favorite.classList.add("bxs-heart")
      setCheck(false);
      setMessage("Đã thêm vào Danh Sách Yêu Thích 😀");
      dispatch(addmoviesFavorite({
        id: id,
        image: data.image,
        name: data.name
      }))

    } else {
      handleClick();
      icon_favorite.classList.remove("bxs-heart")
      icon_favorite.classList.add("bx-heart")
      setCheck(true)
      setMessage("Đã Xóa Khỏi Danh Sách Yêu Thích ☹️");
      dispatch(removeFromFavorite({
        id: id,
        image: data.image,
        name: data.name
      }))
    }
  }

  /////////////////////////////
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



  return (
    <div>
      <Navbar />
      <div className="container_detail">
        <div className="top_detail">
          <div className="top_detail_img">
            <img src={data.backgrou} alt="" />{" "}
          </div>

          <div className="top_detail_content">
            <div className="demo_name_text">
              <p>SONTUNG DEVELOPER</p>
            </div>
            <div className="detail_content_itro">
              <div className="detail_content_itro_name">
                <p>{data.name}</p>
              </div>
              <div className="detail_content_itro_icon">
                <div className="detail_content_itro_star">
                  <i class="bx bxs-star"></i>
                  <i class="bx bxs-star"></i>
                  <i class="bx bxs-star"></i>
                  <i class="bx bxs-star"></i>
                  <i class="bx bxs-star-half"></i> <p>8.3 (imbd)</p>
                </div>
                <div className="detail_age">
                  <p>18+</p>
                </div>
                <div className="detail_time">
                  <p>Time : {data.time}</p>
                </div>
              </div>
              <div className="detail_lorem">
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Aliquam quos mollitia dolorem aliquid velit consequuntur
                  sapiente explicabo, eligendi quia maxime distinctio repellat
                  eveniet id iusto alias! Earum ut ea labore.
                </p>
              </div>
              <div className="Starring_Genres_Tag">
                <span className="color_text">Starring :</span>
                <span>
                  {" "}
                  Diễn viên hô li hút SonTung chuyên diễn viên chính của bộ
                  phim.
                </span>
                <br />
                <span className="color_text">Genres :</span>
                <span> {data.type}</span>
                <br />
                <span className="color_text">Tag :</span>
                <span>
                  {" "}
                  {data.country} , {data.Category}
                </span>
                <br />
                <span className="color_text">Authour :</span>
                <span> {data.authour}</span>
                <br />
                <span className="color_text">Release :</span>
                <span> {data.release}</span>
                <br />
              </div>
            </div>
          </div>
        </div>
        <div className="body_detail_content">
          <div className="text_demo_movie">
            <p>Mô tả phim </p>
          </div>
          <div className="describe_detail">
            <div className="describe_detail_image">
              <img src={data.image} alt="" />
            </div>
            <div className="describe_detail_text">
              <h2>REVIEW MOVIE</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam
                nobis corrupti cumque odit magni expedita quos nemo, temporibus
                repudiandae illum deleniti hic, at amet possimus earum libero
                voluptas, aliquam sed? <br /> <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ab
                itaque qui minus iste dolore sint quisquam veritatis, distinctio
                ullam aliquid magnam nihil quod praesentium enim eum quo earum
                at. <br /> <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis porro temporibus quo reiciendis possimus consequatur
                ducimus aut architecto. Iste illum provident sed delectus ad
                voluptas dolore deserunt voluptate nulla unde? <br /> <br />
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Laborum nemo sed optio quaerat rerum eaque voluptate! Expedita
                ducimus corporis deserunt voluptatem, dolores culpa sit cum
                ratione beatae voluptate sequi laborum.
              </p>
              <div className="describe_detail_button">
                <button onClick={handdlePlayNow}><i class="bx bx-play"></i> Play now</button>
                <button onClick={handlevideo}><a href="#video"><i class="bx bxl-youtube"></i> Trailer</a></button>
                <button onClick={handleFavorite}><i id="icon_favorite" class="bx bx-heart"></i> Favorite</button>
              </div>
            </div>
          </div>
          <div className="text_demo_movie2">
            <p>Trailer Phim {data.name} </p>
          </div>
          <div className="video_trailer_detail">
            <video id="video" src={video} controls></video>
          </div>

          <div className="text_demo_movie">
            <p>Bình Luận : </p>
          </div>

          <Comment />
        </div>
      </div>
      <Footer />
      <CustomBottom />
      <Snackbar
        open={open}
        autoHideDuration={2000}
        onClose={handleClose}
        message={message}
      />
    </div>
  );
};

export default DetailMovie;

//Design by Son Tung Developer