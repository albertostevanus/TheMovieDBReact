import React from "react";
import { Link } from "react-router-dom";

const NewReleases = props => {
  return props.newMovies.map(newMovie => {
    return (
      <div className="col-md-3" key={newMovie.id}>
        <div className="container">
          <div className="content">
            <Link
              to={{
                pathname: `/detail/${newMovie.id}`,
                state: { newDetailId: newMovie.id }
              }}
            >
              <div className="content-overlay" />
              <img
                alt={newMovie.title}
                src={`https://image.tmdb.org/t/p/w780${newMovie.poster_path}`}
              />
              <div className="content-details">
                <h3 className="content-title">{newMovie.title}</h3>
                <p className="content-text">{newMovie.vote_average} / 10</p>
              </div>
            </Link>
          </div>
        </div>
        <div className="home-content">
          <a className="title-link">{newMovie.title}</a>
          <div className="movie-year">
            {newMovie.release_date.substring(0, 4)}
          </div>
        </div>
      </div>
    );
  });
};

export default NewReleases;
