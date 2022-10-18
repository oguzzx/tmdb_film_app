import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Watched from "./components/Watched";
import Watchlist from "./components/Watchlist";
import Add from "./components/Add";

function App() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [watchlist, setWatchlist] = useState([]);
  const [watched, setWatched] = useState([]);

  const onChange = (e) => {
    setQuery(e.target.value);
    fetch(`
    https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1&include_adult=false&query=${e.target.value}`)
      .then((res) => res.json())
      .then((data) => {
        if (!data.errors) {
          setResults(data.results);
        } else {
          setResults([]);
        }
      });
  };

  const addToWatchList = (movie) => {
    if (watchlist.find((item) => item.id === movie.id)) {
      return;
    }
    setWatchlist([...watchlist, movie]);
  };

  const addMovieToWatched = (movie) => {
    const newWatched = [...watched, movie];
    setWatched(newWatched);
    const newWatchList = watchlist.filter((item) => item.id !== movie.id);
    setWatchlist(newWatchList);
  };

  const removeMovieFromWatchlist = (movie) => {
    const newWatchList = watchlist.filter((m) => m.id !== movie.id);
    setWatchlist(newWatchList);
  };

  const moveToWatchlist = (movie) => {
    const newWatched = watched.filter((m) => m.id !== movie.id);
    setWatched(newWatched);
    const newWatchList = [...watchlist, movie];
    setWatchlist(newWatchList);
  };

  const removeMovieFromWatched = (movie) => {
    const newWatchedList = watched.filter((m) => m.id !== movie.id);
    setWatched(newWatchedList);
  };

  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <Watchlist
              watchlist={watchlist}
              addMovieToWatched={addMovieToWatched}
              removeMovieFromWatchlist={removeMovieFromWatchlist}
            />
          }
        />
        <Route
          path="/watched"
          element={
            <Watched
              watched={watched}
              removeMovieFromWatched={removeMovieFromWatched}
              moveToWatchlist={moveToWatchlist}
            />
          }
        />
        <Route
          path="/add"
          element={
            <Add
              onChange={onChange}
              results={results}
              addToWatchList={addToWatchList}
              addMovieToWatched={addMovieToWatched}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
