import React from "react";
import { Link } from "react-router-dom";
import "../homepage.css";

const SearchResult = props => {
  console.log(props);
  if (props !== 0) {
    return props.movieResults.map(result => {
      return (
        <div className="col-md-3" key={result.id}>
          <div className="container">
            <div className="content">
              <Link
                to={{
                  pathname: `/detail/${result.id}`,
                  state: { movieId: result.id }
                }}
              >
                <div className="content-overlay" />
                <img
                  className="movie__poster"
                  alt={result.title}
                  src={`https://image.tmdb.org/t/p/w780${result.poster_path}`}
                />
                <div className="content-details">
                  <h3 className="content-title">{result.title}</h3>
                  <p className="content-text">{result.vote_average} / 10</p>
                </div>
              </Link>
            </div>
          </div>
          <div className="home-content">
            <Link
              to={{
                pathname: `/detail/${result.id}`,
                state: { movieId: result.id }
              }}
              className="title-link"
            >
              {result.title}
            </Link>
            <div className="movie-year">
              {result.release_date.substring(0, 4)}
            </div>
          </div>
        </div>
      );
    });
  }
};

export default SearchResult;
