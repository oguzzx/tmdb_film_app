import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";

function MovieControls({
  movie,
  type,
  addMovieToWatched,
  removeMovieFromWatchlist,
  moveToWatchlist,
  removeMovieFromWatched,
}) {
  return (
    <div className="inner-card-controls">
      {type === "watchlist" && (
        <>
          <button className="ctrl-btn" onClick={() => addMovieToWatched(movie)}>
            <FontAwesomeIcon icon={faEye} />
          </button>
          <button
            className="ctrl-btn"
            onClick={() => removeMovieFromWatchlist(movie)}
          >
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>
        </>
      )}

      {type === "watched" && (
        <>
          <button className="ctrl-btn" onClick={() => moveToWatchlist(movie)}>
            <FontAwesomeIcon icon={faEyeSlash} />
          </button>
          <button
            className="ctrl-btn"
            onClick={() => removeMovieFromWatched(movie)}
          >
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>
        </>
      )}
    </div>
  );
}

export default MovieControls;
