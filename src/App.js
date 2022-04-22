import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import HomePage from "./page/home/Home";
import NotFound from "./page/notFound/NotFound";
import Login from "./page/login/login";
import User from "./page/User/User";
import AddMovie from "./page/addMovie/AddMovie";
import DetailMovie from "./page/detailMovie/DetailMovie";
import MovieHistory from "./page/MovieHistory/MovieHistory";
import MovieFavorite from "./page/MovieFavorite/MovieFavorite";
import WatchMovie from "./page/watchMovie/WatchMovie";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/movie/:id" component={DetailMovie} />
          <Route path="/watch/movie/:id" component={WatchMovie} />
          <Route path="/login"  component={Login} />
          <Route path="/movied/viewed-history"  component={MovieHistory} />
          <Route path="/movied/favorite"  component={MovieFavorite} />
          <Route path="/dashboard"  component={AddMovie} />
          <Route path="/user"  component={User} />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
