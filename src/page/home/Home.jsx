import React, { useContext, useEffect, useState } from "react";
import "./Home.scss";
import CardMovie from "../../components/Card/CardMovie";
import CarouselHome from "../../components/CarouselHome/CarouselHome";
import { useDispatch, useSelector } from "react-redux";
import { FullDataMovie } from "../../features/selectors";
import { DataMovie } from "../../features/movies/movieSlice";
import CustomBottom from "../../components/CustomBottom/CustomBottom";
import { Pagination } from "@mui/material";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/Footer/Footer";
import video from './video.mp4'

const HomePage = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const ListData = useSelector(FullDataMovie);

  useEffect(() => {
    // window.scrollTo(0, 0);
    setData(ListData);
  }, []);

  const onSubmitSearch = () => {
    setData(
      ListData.filter((item) =>
        item?.name?.toLowerCase()?.includes(search.toLowerCase())
      )
    );
  };

  const searchFilm = (name) => {
    setSearch(name);
  };

  const FillPhimKH = (typeName) => {
    setData(
      ListData.filter((item) =>
        item?.type?.toLowerCase()?.includes(typeName.toLowerCase())
      )
    );
  };

  const FillPhimAM = (typeName) => {
    setData(
      ListData.filter((item) =>
        item?.country?.toLowerCase()?.includes(typeName.toLowerCase())
      )
    );
  };

  const FillPhimBo = (typeName) => {
    setData(
      ListData.filter((item) =>
        item?.Category?.toLowerCase()?.includes(typeName.toLowerCase())
      )
    );
  };

  const FillPhimLe = (typeName) => {
    setData(
      ListData.filter((item) =>
        item?.Category?.toLowerCase()?.includes(typeName.toLowerCase())
      )
    );
  };

  const FillPhimTOP = (typeName) => {
    setData(
      ListData.filter((item) =>
        item?.trend?.toLowerCase()?.includes(typeName.toLowerCase())
      )
    );
  };

  return (
    <div>
      <Navbar
        FillPhimKH={FillPhimKH}
        FillPhimAM={FillPhimAM}
        FillPhimBo={FillPhimBo}
        FillPhimTOP={FillPhimTOP}
        FillPhimLe={FillPhimLe}
      />
      <div className="container_HomePage">
        <div className="HomePageTop">
          <div className="HomePageTop_text">
            <div className="HomePageTop_text_intro">
              <h4>Welcome to Our movie site</h4>
              <h1>
                our special <span>Movie</span>
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, <br /> adipisicing elit.
                Dolorem, autem. Dolorem ratione consequatur, praesentium at et
                inventore sequi eveniet quasi sunt dolorum, nulla eius enim rem.
                Quo nobis ab debitis.
              </p>
            </div>
            <div class="wrapper-video">
              <input type="checkbox" />
              <div class="video">
                <video
                  autoPlay={true}
                  loop
                  muted
                  src={video}
                ></video> 
              </div>
              <div class="text">
                <span data-text="Watch the video"></span>
              </div>
            </div>
          </div>
        </div>
        <div className="bodyHomePage">
          <br />
          <div className="bodyHome_text">
            <p>trending movies</p>
          </div>

          <CarouselHome />
          <div className="bodyHome_text">
            <p>new movies</p>
          </div>
          <div className="home_content_card">
            {data.map((item2) => (
              <CardMovie cardMovie={item2} />
            ))}
          </div>
        </div>
        <div className="pagination-movies-home">
          <Pagination count={10} showFirstButton showLastButton />
        </div>
        <CustomBottom searchFilm={searchFilm} onSubmitSearch={onSubmitSearch} />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;

//Design by Son Tung Developer
