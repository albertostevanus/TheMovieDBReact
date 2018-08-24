import React from "react";
import { Link } from "react-router-dom";

const TopMovies = props => {
  return props.topMovies.map(topMovie => {
    return (
      <div className="col-md-3" key={topMovie.id}>
        <div className="container">
          <div className="content">
            <Link
              to={{
                pathname: `/detail/${topMovie.id}`,
                state: { movieId: topMovie.id }
              }}
            >
              <div className="content-overlay" />
              <img
                className="movie__poster"
                alt={topMovie.title}
                src={`https://image.tmdb.org/t/p/w780${topMovie.poster_path}`}
              />
              <div className="content-details">
                <h3 className="content-title">{topMovie.title}</h3>
                <p className="content-text">{topMovie.vote_average} / 10</p>
              </div>
            </Link>
          </div>
        </div>
        <div className="home-content">
          <Link
            to={{
              pathname: `/detail/${topMovie.id}`,
              state: { movieId: topMovie.id }
            }}
            className="title-link"
          >
            {topMovie.title}
          </Link>
          <div className="movie-year">
            {topMovie.release_date.substring(0, 4)}
          </div>
        </div>
      </div>
    );
  });
};

export default TopMovies;
