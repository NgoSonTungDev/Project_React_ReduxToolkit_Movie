import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { DataMovie } from "../../features/movies/movieSlice";
import { v4 as uuidv4 } from "uuid";
import "./FormAddMovie.scss";
import { Snackbar } from "@mui/material";

const FormAddMovie = (props) => {
  const [background, setBackground] = useState("");
  const [image, setdImage] = useState("");
  const [name, setName] = useState("");
  const [authour, setAuthour] = useState("");
  const [release, setRelease] = useState(0);
  const [time, setTime] = useState("");
  const [country, setCountry] = useState("Phim Âu Mỹ");
  const [type, setType] = useState("Phim Khoa Học");
  const [trend, setTrend] = useState("normal");
  const [category, setCategory] = useState("phim lẻ");
  const dispath = useDispatch();

  const handdleXemDemo = () => {
    var sawDemo = document.querySelector(".form_add_input");
    var card = document.querySelector(".Card-demo");
    var views = document.querySelector(".views_demo");
    var catagory = document.querySelector(".catagory_demo");
    var text = document.querySelector(".text_demo");
    var tiltle = document.querySelector(".title_demo");

    if (background === "" || image === "" || name === "" || authour === "") {
      handleClick();
      setMassage("BỎ TRỐNG DỬ LIỆU THÌ XEM MẸ GÌ ?");
    } else {
      sawDemo.style.opacity = "0.4";
      props.hanngdleGetData(background);
      card.style.height = "500px";
      views.style.transform = "translate(0)";
      catagory.style.transform = "translate(0)";
      text.style.transform = "translate(0)";
      tiltle.style.bottom = "0";
    }
  };

  ////////////////////////////////////
  const [open, setOpen] = useState(false);
  const [message, setMassage] = useState("");

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    setOpen(false);
  };
  ///////////////////////////////////

  const handdleAddMovie = () => {
    if (background === "" || image === "" || name === "" || authour === "") {
      handleClick();
      setMassage("KHÔNG ĐƯỢC BỎ TRỐNG CÁC Ô INPUT !!!");
    } else {
      handleClick();
      setMassage("ĐÃ THÊM THÀNH CÔNG RỒI  !!!");
      dispath(
        DataMovie({
          id: uuidv4(),
          backgrou: background,
          name: name,
          image: image,
          authour: authour,
          country: country,
          type: type,
          release: release,
          trend: trend,
          story: "new",
          Category: category,
          time: time,
        })
      );

    }
  };

  return (
    <div className="form_addmovie">
      <div className="form_add_input">
        <h4>THÊM PHIM MỚI</h4>
        <p>
          Vui lòng ruyền link ảnh vào input Background & Image dùm cái 🙂 Cảm ơn
          🙃
        </p>
        <div className="table_input">
          <table>
            <tr>
              <td>
                <div class="form__group field">
                  <input
                    type="url"
                    class="form__field"
                    pattern="https://.*"
                    placeholder="Background"
                    required
                    value={background}
                    onChange={(e) => setBackground(e.target.value)}
                  />
                  <label for="name" class="form__label">
                    Background
                  </label>
                </div>
              </td>
              <td>
                <div class="form__group field">
                  <input
                    type="url"
                    class="form__field"
                    placeholder="Image"
                    pattern="https://.*"
                    value={image}
                    onChange={(e) => setdImage(e.target.value)}
                    required
                  />
                  <label for="name" class="form__label">
                    Image
                  </label>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div class="form__group field">
                  <input
                    type="input"
                    class="form__field"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                  <label for="name" class="form__label">
                    Name
                  </label>
                </div>
              </td>
              <td>
                <div class="form__group field">
                  <input
                    type="input"
                    class="form__field"
                    placeholder="authour "
                    value={authour}
                    onChange={(e) => setAuthour(e.target.value)}
                    required
                  />
                  <label for="name" class="form__label">
                    Authour
                  </label>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div class="form__group field">
                  <input
                    type="number"
                    class="form__field"
                    placeholder="release (năm phát hành)"
                    value={release}
                    min="1990"
                    onChange={(e) => setRelease(e.target.value)}
                    required
                  />
                  <label for="name" class="form__label">
                    Release
                  </label>
                </div>
              </td>
              <td>
                <div class="form__group field">
                  <input
                    type="number"
                    class="form__field"
                    placeholder="time"
                    min="24"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    required
                  />
                  <label for="name" class="form__label">
                    Time
                  </label>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <select
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                >
                  <option value="Phim Âu Mỹ" selected>
                    {" "}
                    Country{" "}
                  </option>
                  <option value="Phim Âu Mỹ">Phim Âu Mỹ</option>
                  <option value="Phim Nhật Bản">Phim Nhật Bản</option>
                  <option value="Phim Trung Quốc">Phim Trung Quốc</option>
                  <option value="Phim Hàn Quốc">Phim Hàn Quốc</option>
                </select>
              </td>
              <td>
                <select value={type} onChange={(e) => setType(e.target.value)}>
                  <option value="Phim Khoa Học" selected>
                    {" "}
                    Type{" "}
                  </option>
                  <option value="Phim Khoa Học">Phim Khoa Học</option>
                  <option value="Phim Viễn Tưởng">Phim Viễn Tưởng</option>
                  <option value="Phim Hành Động">Phim Hành Động</option>
                  <option value="Phim Chiếu Rạp">Phim Chiếu Rạp</option>
                  <option value="Phim Ma - Kinh Dị">Phim Ma - Kinh Dị</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>
                {" "}
                <select
                  value={trend}
                  onChange={(e) => setTrend(e.target.value)}
                >
                  <option value="top" selected>
                    {" "}
                    Trend{" "}
                  </option>
                  <option value="top"> Top</option>
                  <option value="normal">Normal</option>
                </select>
              </td>
              <td>
                {" "}
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option value="phim lẻ" selected>
                    {" "}
                    Category{" "}
                  </option>
                  <option value="phim lẻ">Phim lẻ</option>
                  <option value="phim bộ">phim bộ</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>
                <div class="button-container-1" onClick={handdleXemDemo}>
                  <span class="mas">Xem demo card</span>
                  <button id="work" type="button" name="Hover">
                    Xem demo card
                  </button>
                </div>
              </td>
              <td>
                <div class="button-container-1" onClick={handdleAddMovie}>
                  <span class="mas">Chắn chắn chưa ?</span>
                  <button id="work" type="button" name="Hover">
                    Thêm Phim
                  </button>
                </div>
              </td>
            </tr>
          </table>
        </div>
      </div>

      <div className="Card-demo">
        <div className="cardMoveMain_demo">
          <div className="img_demo">
            <img src={image} alt="" />
          </div>
          <div class="movie-item-content">
             <div class="movie-item-title">
              {name}
            </div>

            <div class="movies-infors-card">
              <div class="movies-infor">
                <i class='bx bx-star'></i>
                <span>9.0</span>
              </div>
              <div class="movies-infor">
                <i class='bx bx-time'></i>
                <span>{time}</span>
              </div>
              <div class="movies-infor">
                <i class='bx bx-cube' ></i>
                <span>FHD</span>
              </div>
            </div> 
          </div>
          <div className="text_demo">
            {country} / {type} / {authour}
          </div>

          <div className="catagory_demo">
            Series <i className="fas fa-film"></i>
          </div>

          <div className="views_demo">
            {release} <i className="far fa-eye"></i>{" "}
          </div>
        </div>
      </div>
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        message={message}
      />
    </div>
  );
};

export default FormAddMovie;

//Design by Son Tung Developer
