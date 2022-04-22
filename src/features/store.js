import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./movies/movieSlice";

export const store = configureStore({
    reducer: {
       datamovie: movieReducer
    }
})

//Design by Son Tung Developer