import React, { useEffect } from "react";
import CustomBottom from "../../components/CustomBottom/CustomBottom";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/navbar/navbar";
import "./User.scss";

const User = () => {
  useEffect(() => {}, []);

  return (
    <div>
      <Navbar />
      <div className="container-User">
        <div className="form_user">
          <div class="wrapper">
            <a
              href="https://scontent.fdad3-4.fna.fbcdn.net/v/t1.15752-9/277834170_1379893735792766_8391825145699997563_n.png?_nc_cat=104&ccb=1-5&_nc_sid=ae9488&_nc_ohc=QuLZv10B5NsAX9TZgTd&tn=3m3d8BlFNs0sbNQd&_nc_ht=scontent.fdad3-4.fna&oh=03_AVJWKJ-S-zTannArUnnZWXhRthG3pdmL1A1eFzHCVcs0ug&oe=627619F5"
              target="_blank"
            >
              <img
                src="https://scontent.fdad3-4.fna.fbcdn.net/v/t1.15752-9/277834170_1379893735792766_8391825145699997563_n.png?_nc_cat=104&ccb=1-5&_nc_sid=ae9488&_nc_ohc=QuLZv10B5NsAX9TZgTd&tn=3m3d8BlFNs0sbNQd&_nc_ht=scontent.fdad3-4.fna&oh=03_AVJWKJ-S-zTannArUnnZWXhRthG3pdmL1A1eFzHCVcs0ug&oe=627619F5"
                alt=""
              />
            </a>
            <div class="title-user">Ngô Sơn Tùng</div>
            <div class="place">
              <p>(Anh dev nghèo mơ mộng nàng công chúa 🖤)</p>
            </div>
          </div>
          <div class="content-user">
            <p>
              User Interface Designer and <br /> front-end developer using
              ReactJs and expert back-end development using NodeJs
            </p>
            <div class="buttons-user">
              <div class="btn-user">
                <button class="custom-btn btn-5">
                  <span>Message</span>
                </button>
              </div>
              <div class="btn-user">
                <div class="btn-user">
                  <button class="custom-btn btn-5">
                    <span>Following</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="icons-user">
            <li>
              <a href="https://www.facebook.com/sontung0309/" target="_blank">
                <span class="fab fa-facebook-f"></span>
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/sontung0309/" target="_blank">
                <span class="fab fa-twitter"></span>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/stung.0309/" target="_blank">
                <span class="fab fa-instagram"></span>
              </a>
            </li>
          </div>
        </div>
      </div>
      <CustomBottom />
    </div>
  );
};

export default User;

//Design by Son Tung Developer