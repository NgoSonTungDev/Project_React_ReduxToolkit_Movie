import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addcomment } from "../../features/movies/movieSlice";
import { dataComment } from "../../features/selectors";
import { v4 as uuidv4 } from "uuid";
import "./Comment.scss";

const Comment = () => {
  const dataListComment = useSelector(dataComment);
  const [image, setImage] = useState(
    "https://scontent.fdad3-5.fna.fbcdn.net/v/t1.15752-9/256800052_294516332584522_4165046809743397545_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=ae9488&_nc_ohc=2MtXExMiowkAX8nlzuA&_nc_ht=scontent.fdad3-5.fna&oh=03_AVKsFSLQe00Om7aogaa1SG0HA0bYHJbVyybqzKX9xDyc_A&oe=62835395"
  );
  const [name, setName] = useState("Tài Khoảng Người Dùng");
  const [cmt, setCmt] = useState("");
  const [like, setLike] = useState(0);
  const dispatch = useDispatch();

  const [check, setCheck] = useState(true);

  const handdleLike = () => {
    setLike(like + 1);
  };

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleimage = (e) => {
    setImage(e.target.value);
  };

  const handleAround = () => {
    var up_dow = document.getElementById("up_dow");
    var form = document.querySelector(".input_image_name");
    if (check === true) {
      setCheck(false);
      up_dow.style.transform = "rotate(-180deg)";
      form.style.display = "block";
    } else {
      setCheck(true);
      up_dow.style.transform = "rotate(0deg)";
      form.style.display = "none";
    }
  };

  const addComment = () => {
    if(cmt === ""){
      alert("Không bình luận mà bấm con mẹ mi ?")
    }else{
      dispatch(
        addcomment({
          id: uuidv4(),
          name: name,
          image: image,
          content: cmt,
        })
      );
      setCmt("")
    }   
  };

  return (
    <div>
      <div className="comment_cmt">
        <div className="cmt_context">
          <h3>{dataListComment.length} Bình Luận</h3>
          {dataListComment.map((item) => (
            <div className="card_cmt">
              <div className="card_cmt_image">
                <img src={item.image} alt="" />
              </div>
              <div className="card_cmt_content_cmt">
                <p className="card_cmt_content_cmt_name">{item.name}</p>
                <p className="card_cmt_content_cmt_content"> {item.content}</p>
                <span onClick={handdleLike}>Thích ({like})</span>
              </div>
            </div>
          ))}
        </div>
        <hr width="100%" />
        <div className="cmt_input">
          <div className="cmt_input_img">
            <div
              className="comment_image"
              style={{ backgroundImage: `url(${image})` }}
            ></div>
            <i
              onClick={handleAround}
              id="up_dow"
              class="bx bx-caret-up-circle"
            ></i>
            <div className="input_image_name">
              <h4>Thay Đổi Thông Tin Của Bạn</h4>
              <form>
                <div class="group">
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={handleName}
                  />
                  <span class="highlight"></span>
                  <span class="bar"></span>
                  <label>Name</label>
                </div>

                <div class="group">
                  <input
                    type="text"
                    required
                    value={image}
                    onChange={handleimage}
                  />
                  <span class="highlight"></span>
                  <span class="bar"></span>
                  <label>Link Image</label>
                </div>
              </form>
              <div className="arrow-down"></div>
            </div>
          </div>
          <div className="cmt_input_input">
            <input
              type="text"
              placeholder="Bạn Đang Nghỉ gì ???"
              value={cmt}
              onChange={(e) => {
                setCmt(e.target.value);
              }}
            />
          </div>
          <div className="cmt_input_btn">
            <button onClick={addComment}>Đăng</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comment;


//Design by Son Tung Developer