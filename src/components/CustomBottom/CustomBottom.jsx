import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Snackbar from "@mui/material/Snackbar";
import "./CustomBottom.scss";
import { dataMoviesFavorite, dataViewedHistory } from "../../features/selectors";
import { useSelector } from "react-redux";

const CustomBottom = (props) => {
  const [search, setSearch] = useState("");
  const [checkBox, setCheckBox] = useState(true);
  const ListHistory = useSelector(dataViewedHistory);
  const ListFavorite = useSelector(dataMoviesFavorite)

  ////////////////////////////////////
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
  ///////////////////////////////////

  useEffect(() => {
    let sidebar = document.querySelector(".sidebar");
    let closeBtn = document.querySelector("#btn");
    let searchBtn = document.querySelector(".bx-search");

    closeBtn.addEventListener("click", () => {
      sidebar.classList.toggle("open");
      menuBtnChange();
      setTimeout(() => {
        sidebar.classList.toggle("open");
        menuBtnChange();
      }, 5000);
    });

    searchBtn.addEventListener("click", () => {
      sidebar.classList.toggle("open");
      menuBtnChange();
    });

    function menuBtnChange() {
      if (sidebar.classList.contains("open")) {
        closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");
      } else {
        closeBtn.classList.replace("bx-menu-alt-right", "bx-menu");
      }
    }
  }, []);

  const hangdleSearch = (e) => {
    setSearch(e.target.value);
    props.searchFilm(e.target.value);
  };

  const testkeydowm = () => {
    props.onSubmitSearch();
  };

  const handleAnimationMenuSupport = () => {
    var btnFucion = document.getElementById("btnFucion");
    var sidebar = document.querySelector(".sidebar");

    if (checkBox === true) {
      btnFucion.classList.remove("bx-plus");
      btnFucion.classList.add("bx-minus");
      setCheckBox(false);
      sidebar.style.left = "0";
    } else {
      btnFucion.classList.add("bx-plus");
      btnFucion.classList.remove("bx-minus");
      setCheckBox(true);
      sidebar.style.left = "-100%";
    }
  };

  return (
    <div>
      <div class="sidebar">
        <div className="logo-details">
          <i class="fa-brands fa-react icon"></i>
          <div className="logo_name">Chúa Tể React</div>
          <i className="bx bx-menu" id="btn"></i>
        </div>
        <ul class="nav-list">
          <li>
            <i class="bx bx-search"></i>
            <input
              type="text"
              placeholder="Search theo tên ..."
              value={search}
              onChange={hangdleSearch}
              onKeyDown={testkeydowm}
            />
            <span class="tooltip">Search</span>
          </li>
          <li>
            <Link to="/user">
              <a href="#">
                <i className="bx bx-user"></i>
                <span className="links_name">User</span>
              </a>
            </Link>
            <span className="tooltip">User</span>
          </li>
          <li>
            <a href="#" onClick={handleClick}>
              <i className="bx bx-chat"></i>
              <span className="links_name">Messages</span>
            </a>
            <span className="tooltip">Messages</span>
          </li>
          <li>
            <Link to="/dashboard">
              <a href="#">
                <i className="bx bx-grid-alt"></i>
                <span className="links_name">Dashboard</span>
              </a>
              <span className="tooltip">Dashboard</span>
            </Link>
          </li>
          <li>
            <Link to="/movied/favorite" >
              <a href="#">
                <i className="bx bx-heart">
                  <span className="number_custom">{ListFavorite.length}</span>
                </i>
                <span className="links_name">favorite</span>
              </a>
              <span className="tooltip">favorite</span>
            </Link>
          </li>
          <li>
            <Link to="/movied/viewed-history">
              <a href="#">
                <i class="bx bx-history">
                  <span className="number_custom">{ListHistory.length}</span>
                </i>
                <span className="links_name">Viewed History</span>
              </a>
              <span className="tooltip">Viewed History</span>
            </Link>
          </li>
          <li>
            <a href="#">
              <i class='bx bx-log-out'></i>
              <span className="links_name">Log Out</span>
            </a>
            <span className="tooltip">Log Out</span>
          </li>
        </ul>
      </div>
      <div
        className="icon_custom_bottom"
        title="Open more Function"
        onClick={handleAnimationMenuSupport}
      >
        <i id="btnFucion" class="bx bx-plus"></i>
      </div>
      <Snackbar
        open={open}
        autoHideDuration={5000}
        onClose={handleClose}
        message="FB: Ngô Sơn Tùng || SĐT : 0386762927 || ZALO : 0522564268 || Tự mà liện hệ :)"
      />
    </div>
  );
};

export default CustomBottom;


//Design by Son Tung Developer