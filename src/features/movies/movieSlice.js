import { createSlice } from "@reduxjs/toolkit";
import datamovie from "../../assets/data/data ";

const initialState = {
  dataMovies: datamovie,
  moviesHistory: [],
  moviesFavorite: [],
  comment: [
    {
      id: 1,
      name: "Võ Thị Mai Thi",
      image:
        "https://scontent.fsgn5-8.fna.fbcdn.net/v/t39.30808-1/278736818_1114035802663201_6333730779745904812_n.jpg?stp=dst-jpg_s200x200&_nc_cat=109&ccb=1-5&_nc_sid=7206a8&_nc_ohc=6dV7HqGmT8wAX-9VgjL&_nc_ht=scontent.fsgn5-8.fna&oh=00_AT9NPs9VQUzxDjp9jvYoFMUPZQBFSoAYXNJ2v1HwIYKJlA&oe=62600AEC",
      content:
        "=]]] con quỷ venom đi tới đâu cứ để bậy đến đó =]]]]]]]]]]]]]]]",
    },
    {
      id: 2,
      name: "Ngô Sơn Tùng",
      image:
        "https://scontent.xx.fbcdn.net/v/t1.15752-9/277834170_1379893735792766_8391825145699997563_n.png?stp=dst-png_p206x206&_nc_cat=104&ccb=1-5&_nc_sid=aee45a&_nc_ohc=2ZrBVb9ar2sAX_5snGD&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVIJsAv1KTogDYoxPVMw3hYqu7NHmwzRHfJpRD6VJCfuhQ&oe=625D0D75",
      content: "Tưởng Peter Parker đc thừa kế tài sản của Tony Stark chứ nhỉ",
    },
    {
      id: 3,
      name: "Ngô Thị Thu Siêm",
      image:
        "https://scontent.fdad3-4.fna.fbcdn.net/v/t1.15752-9/277918992_966654610656855_6799372942300462125_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=ae9488&_nc_ohc=nA9T3wA2zugAX_iBOCA&_nc_ht=scontent.fdad3-4.fna&oh=03_AVLlllshvbZexkKHNnfG9NFJVVkvYGsTi8znr-aNiBQ6ig&oe=6282D7F0",
      content:
        "bộ nano của nhện tập này bị hỏng hết chức năng à . Không bằng 1 góc của người sắt . Không nên kế thừa",
    },
    {
      id: 4,
      name: "Phan Thu Duyên",
      image:
        "https://scontent.xx.fbcdn.net/v/t1.15752-9/278174984_319968776923906_779359824439243249_n.png?stp=dst-png_s552x414&_nc_cat=105&ccb=1-5&_nc_sid=aee45a&_nc_ohc=J44LDpXFmkAAX8y_biy&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVJzSPcrTFO5DW-KZBOnjaHAJIq51cmhPVW0obtdkuLDrQ&oe=628213CF",
      content: "tập này thấy ko hay",
    },
    {
      id: 5,
      name: "Trần Phước Trung Tuấn",
      image:
        "https://scontent.fdad3-3.fna.fbcdn.net/v/t1.15752-9/269990412_613780373182185_5281319142102809658_n.png?_nc_cat=100&ccb=1-5&_nc_sid=ae9488&_nc_ohc=dRrJfRYUN94AX-6ULGR&_nc_ht=scontent.fdad3-3.fna&oh=03_AVLF4gLfCSrn6RWaTIgEdIQM-bgAYW1vvgdgwK3E5Z_cmw&oe=627F7362",
      content:
        "Tất cả mọi Ng đều quên hết Peter là ai, nhưng cái bà AI trong bộ spider suit vẫn còn dữ liệu về Peter đúng ko?",
    },
    {
      id: 6,
      name: "Ngô Văn Hiếu",
      image:
        "https://scontent.xx.fbcdn.net/v/t1.15752-9/278361711_542193374040957_889313653075880461_n.png?stp=dst-png_p403x403&_nc_cat=101&ccb=1-5&_nc_sid=aee45a&_nc_ohc=gixcUcO05Z8AX80ut8B&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVJSyQEB5cxf2S6pJn0wEo95W9MxMTleFI3jZO4Yuyw-lQ&oe=6281267F",
      content: "ad thêm info cả ngày thàng phát hành đi",
    },
    {
      id: 7,
      name: "Lê Tiến Tài",
      image:
        "https://scontent.xx.fbcdn.net/v/t1.15752-9/278135356_473856201096946_4897007667874939348_n.png?stp=dst-png_p168x128&_nc_cat=104&ccb=1-5&_nc_sid=aee45a&_nc_ohc=PxW-EqTZw8kAX9OZXW0&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVLSo2kvTyokBqbFY-jQIWXUWgQqyE5TazsLfmljugJo4w&oe=6282913F",
      content: "Khi nào mới có tập mới ạ",
    },
  ],
};

const handdle = () => {
  alert("ĐÃ CÓ TRONG KHO DỮ LIÊU ~_~ ");
};


const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    DataMovie: (state, { payload }) => {
      if (
        state.dataMovies.find((o) => o.name === payload.name) ||
        state.dataMovies.find((o) => o.backgrou === payload.backgrou) ||
        state.dataMovies.find((o) => o.image === payload.image)
      ) {
        handdle();
      } else {
        state.dataMovies = [payload, ...state.dataMovies];
      }
    },

    addcomment: (state, { payload }) => {
      state.comment = [...state.comment, payload];
    },

    addmoviesHistory: (state, { payload }) => {
      if (state.moviesHistory.find((o) => o.id === payload.id)) {
        state.moviesHistory = [...state.moviesHistory];
      } else {
        state.moviesHistory = [payload, ...state.moviesHistory];
      }
    },

    cleanFullHistory: (state, { payload }) => {
      state.moviesHistory = [];
    },

    removeFromHistory: (state, {payload}) => {
      state.moviesHistory.map((cartItem) => {
        if (cartItem.id === payload.id) {
          const nextCartHistoryItems = state.moviesHistory.filter(
            (item) => item.id !== cartItem.id
          );
          state.moviesHistory = nextCartHistoryItems;
        }
      });
    },

    addmoviesFavorite: (state, { payload }) => {
      if (state.moviesFavorite.find((o) => o.id === payload.id)) {
        state.moviesFavorite = [...state.moviesFavorite];
      } else {
        state.moviesFavorite = [payload, ...state.moviesFavorite];
      }
    },

    cleanFullFavorite: (state, { payload }) => {
      state.moviesFavorite = [];
    },

    removeFromFavorite: (state, {payload}) => {
      state.moviesFavorite.map((cartItem) => {
        if (cartItem.id === payload.id) {
          const nextCartHistoryItems = state.moviesFavorite.filter(
            (item) => item.id !== cartItem.id
          );
          state.moviesFavorite = nextCartHistoryItems;
        }
      });
    },

  },
});

export const { addmoviesHistory, DataMovie, addcomment, cleanFullHistory ,removeFromHistory, addmoviesFavorite , cleanFullFavorite , removeFromFavorite} =
  movieSlice.actions;
export default movieSlice.reducer;

