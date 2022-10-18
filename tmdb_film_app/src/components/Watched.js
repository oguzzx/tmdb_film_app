import React from "react";
import MovieCard from "./MovieCard";

function Watched({ watched, removeMovieFromWatched, moveToWatchlist }) {
  return (
    <div>
      <h2>İzlenenler Listesi</h2>
      {watched.length > 0 ? (
        <div className="movie-grid">
          {watched.map((movie) => (
            <MovieCard
              movie={movie}
              key={movie.id}
              type="watched"
              removeMovieFromWatched={removeMovieFromWatched}
              moveToWatchlist={moveToWatchlist}
            />
          ))}
        </div>
      ) : (
        <h2 className="no-movies">Listenizde Film Yok...</h2>
      )}
    </div>
  );
}

export default Watched;
