import React, { useState, useEffect } from "react";
import "./WatchMovie.scss";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/navbar/navbar";
import CustomBottom from "../../components/CustomBottom/CustomBottom";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { FullDataMovie } from "../../features/selectors";
import video from "./video.mp4";
import Comment from "../../components/Comment/Comment";
import Rating from "@mui/material/Rating";
import { useSelector } from "react-redux";
import Snackbar from "@mui/material/Snackbar";
import CardWatch from "../../components/CardWatch/CardWatch";

const WatchMovie = () => {
    const [data, setData] = useState([]);
    const [data2, setData2] = useState([]);

    const [check, setCheck] = useState(true);

    const location = useLocation();
    const listdata = useSelector(FullDataMovie);
    const id = location.pathname.split("watch/movie/")[1];

    let theloai = listdata[parseInt(id) - 1].type;
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
    
    const  handleRating = () =>{
        handleClick();
        setMessage("Đã nhận được đánh giá 😛")
    }
    
    useEffect(async () => {
        window.scroll(0,0)
        setData(listdata[parseInt(id) - 1]);
        await setData2(
            listdata.filter((item) =>
                item?.type?.toLocaleLowerCase()?.includes(theloai?.toLocaleLowerCase())
            )
        );
    }, []);

    const handleLamp = () => {
        var icon = document.getElementById("icon");
        var text = document.getElementById("text");
        var container = document.querySelector(".container_watch_Movie");

        if (check === true) {
            icon.classList.remove("bx-sun");
            icon.classList.add("bx-moon");
            setCheck(false);
            text.innerHTML = "Tắt Đèn";
            container.style.backgroundColor = "#fff";
        } else {
            icon.classList.add("bx-sun");
            icon.classList.remove("bx-moon");
            setCheck(true);
            text.innerHTML = "Bật Đèn";
            container.style.backgroundColor = "#333333";
        }
    };

    return (
        <div>
            <Navbar />
            <div className="container_watch_Movie">
                <div className="watch_movie">
                    <div className="watch_movie_name">
                        <span>
                            <i class="bx bx-home"></i> Home{" "}
                            <i class="bx bx-chevrons-right"></i> {data.country}{" "}
                            <i class="bx bx-chevrons-right"></i> {data.type}{" "}
                            <i class="bx bx-chevrons-right"></i> {data.name}
                        </span>
                    </div>
                    <div className="watch_movie_video">
                        <video src={video} controls></video>
                    </div>
                    <div className="watch_movie_evaluate">
                        <div className="watch_movie_evaluate_1">
                            <p>Đánh Giá Phim : </p>
                            <Rating
                            onClick={handleRating}
                                name="customized-10"
                                className="star"
                                defaultValue={5}
                                max={10}
                            />
                        </div>
                        <div className="watch_movie_evaluate_2">
                            <div className="watch_movie_evaluate_2_1">
                                <p>Tập : </p> <span>Full</span>
                            </div>
                            <div className="watch_movie_evaluate_2_2" onClick={handleLamp}>
                                <i id="icon" class="bx bx-sun"></i>{" "}
                                <span id="text">Bật Đèn</span>
                            </div>
                        </div>
                    </div>
                    <div className="watch_movie_itro">
                        <div className="watch_movie_itro_image">
                            <img src={data.image} alt="" />
                        </div>
                        <div className="watch_movie_itro_text">
                            <div className="watch_movie_itro_text_1">
                                <p>
                                    {data.name} ({data.authour})
                                </p>
                            </div>
                            <div className="watch_movie_itro_text_2">
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Possimus repellendus obcaecati quibusdam minus omnis
                                    reiciendis, aut eos molestias quia iste dolor iusto quos ullam
                                    laborum quod odio. Perspiciatis, labore aspernatur! <br />{" "}
                                    <br /> Lorem ipsum dolor sit amet consectetur adipisicing
                                    elit. Magni dolore eveniet deleniti dolor impedit delectus
                                    labore ullam reprehenderit ipsum accusantium! Neque quia sequi
                                    maiores! Molestias veritatis dolor corporis natus quam! <br />{" "}
                                    <br /> Lorem, ipsum dolor sit amet consectetur adipisicing
                                    elit. Enim deserunt voluptatum dignissimos est aspernatur ut
                                    expedita tempore earum? Porro, quam? Dolores nisi molestias,
                                    praesentium vel aperiam fuga eum. Ea, sequi! <br /> <br />{" "}
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Molestiae magnam in mollitia commodi, eligendi ipsam!
                                    Doloribus quis dolor quia recusandae itaque, suscipit, sit, id
                                    ab consectetur quod vitae minima quaerat!
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="watch_movie_cmt">
                        <p>Các Bình Luận Về Phim :</p>
                        <div className="watch_movie_cmt_1"></div>
                        <Comment />
                    </div>

                    <div className="watch_movie_type">
                        <p>Các Phim Cùng Thể Loại : {data.type}</p>
                        <div className="watch_movie_type_card">
                            {data2.map((item) => (
                                <CardWatch datacard={item}/>
                            ))}
                        </div>
                    </div>

                    <div className="watch_movie_trash">

                    </div>
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

export default WatchMovie;

//Design by Son Tung Developer