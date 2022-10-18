import React from "react";
import MovieCard from "./MovieCard";

function Watchlist({
  watchlist,
  addMovieToWatched,
  removeMovieFromWatchlist,
  moveToWatchlist,
  removeMovieFromWatched,
}) {
  return (
    <div className="movie-page">
      <div className="container">
        <div className="header">
          <h1 className="heading">İzlenecek Filmler</h1>

          <div className="count-pill">
            {watchlist.length} {watchlist.length < 2 ? "Movie" : "Movies"}
          </div>
        </div>

        {watchlist.length > 0 ? (
          <div className="movie-grid">
            {watchlist.map((movie) => (
              <MovieCard
                movie={movie}
                key={movie.id}
                type="watchlist"
                addMovieToWatched={addMovieToWatched}
                removeMovieFromWatchlist={removeMovieFromWatchlist}
                moveToWatchlist={moveToWatchlist}
                removeMovieFromWatched={removeMovieFromWatched}
              />
            ))}
          </div>
        ) : (
          <h2 className="no-movies">Listenizde Film Yok...</h2>
        )}
      </div>
    </div>
  );
}

export default Watchlist;
