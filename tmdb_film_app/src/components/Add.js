import React, { useState } from "react";
import ResultCart from "./ResultCart";

const Add = ({ onChange, results, addToWatchList, addMovieToWatched }) => {
  return (
    <div className="add-page">
      <div className="container">
        <div className="add-content">
          <img src="https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,032541,01b4e4)/9ZyAUZrfccsjtDwYgc7yvOBnqM9.jpg" />
          <div className="titles">
            <h1>Hoş Geldiniz.</h1>
            <h2>
              Milyonlarca film, TV şovu ve keşfedilecek kişi. Şimdi keşfedin.
            </h2>
          </div>
          <div className="input-wrapper">
            <input
              type="text"
              placeholder="Film, dizi, kişi ara..."
              onChange={onChange}
            />
          </div>
          {results.length > 0 && (
            <ul className="results">
              {results.map((movie) => (
                <li key={movie.id}>
                  <ResultCart
                    movie={movie}
                    addToWatchList={addToWatchList}
                    addMovieToWatched={addMovieToWatched}
                  />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Add;
