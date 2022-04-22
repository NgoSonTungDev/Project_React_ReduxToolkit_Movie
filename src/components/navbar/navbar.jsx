import React, { useState } from "react";
import "./navbar.scss";
import logo from "../../assets/images/film.jpg";
import { Link } from "react-router-dom";
import Snackbar from "@mui/material/Snackbar";

const Navbar = (props) => {
  /////////////////////////////
  const [message, setMessage] = useState('')
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

  const handleTheLoai = () => {
    handleClick();
    setMessage("Bấm cái khác đi cái này chưa làm 👌🏿")
  }

  const handleTrangChu = () => {
    handleClick();
    setMessage("Đang ở trang chủ nha")
  }

  const handlePhimKH = () => {
    let Phimkhoahoc = "Phim Khoa Học"
    props.FillPhimKH(Phimkhoahoc);
    handleClick();
    setMessage("Filtered successfully 👇")
  }

  const handlePhimAM = () => {
    let PhimAuMy = "Phim Âu Mỹ"
    props.FillPhimAM(PhimAuMy);
    handleClick();
    setMessage("Filtered successfully 👇")
  }

  const handlePhimBo = () => {
    let PhimBo = "phim bộ"
    props.FillPhimBo(PhimBo);
    handleClick();
    setMessage("Filtered successfully 👇")
  }

  const handlePhimLe = () => {
    let PhimLe = "phim lẻ"
    props.FillPhimLe(PhimLe);
    handleClick();
    setMessage("Filtered successfully 👇")
  }

  const handlePhimTop = () => {
    let PhimTop = "top"
    props.FillPhimTOP(PhimTop);
    handleClick();
    setMessage("Filtered successfully 👇")
  }


  return (
    <div>
      <div className="navbar">
        <div className="logo-container">
          <img src={logo} alt="" className="logo" />
        </div>
        <div className="options">
          <ul>
            <Link to="/">
              <li onClick={handleTrangChu}>TRANG CHỦ</li>
            </Link>
            <li onClick={handleTheLoai}>THỂ LOẠI</li>
            <Link to="/">
              <li onClick={handlePhimKH}>Phim Khoa Học</li>
            </Link>
            <Link to="/">
              <li onClick={handlePhimAM}>Phim Âu Mỹ</li>
            </Link>
            <Link to="/">
              <li onClick={handlePhimBo}>PHIM BỘ</li>
            </Link>
            <Link to="/">
              <li onClick={handlePhimLe}>PHIM LẺ</li>
            </Link>
            <Link to="/">
              <li onClick={handlePhimTop}>TOP PHIM</li>
            </Link>
          </ul>
        </div>
        <div className="login-navbar">
          <Link to="/login">
            <p>ĐĂNG NHẬP</p>
          </Link>
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

export default Navbar;

//Design by Son Tung Developer