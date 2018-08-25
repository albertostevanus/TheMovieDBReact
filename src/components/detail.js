import React, { Component } from "react";
import Navbar from "../components/navbar";
import Cast from "../components/cast";
import "../detail.css";

class Detail extends Component {
  state = {
    movieDetail: {
      genres: [],
      production_companies: [],
      credits: {
        cast: [],
        crew: []
      }
    }
  };

  componentDidMount = () => {
    this.getDetail();
  };

  getDetail = () => {
    const movieDetailURL = `https://api.themoviedb.org/3/movie/${
      this.props.location.state.movieId
    }?api_key=9ada7f6659a104d4bd6d9141d3d2cce3&language=en-US&append_to_response=credits, reviews`;
    fetch(movieDetailURL).then(resp => {
      resp.json().then(res => {
        res.title = res.title.toUpperCase();
        res.release_date = res.release_date.substring(0, 4);
        this.setState({ movieDetail: res });
      });
    });
  };

  render() {
    const movieDetail = this.state.movieDetail;
    return (
      <div>
        <Navbar />
        <div className="backdrop">
          <img
            alt="movie_poster"
            src={
              movieDetail.backdrop_path === null
                ? "/placeholder.png"
                : `https://image.tmdb.org/t/p/w1280${movieDetail.backdrop_path}`
            }
            className="movie__backdrop"
          />
          <div className="backdrop__overlay" />
        </div>
        <main role="main" className="container-fluid detail">
          <div className="row">
            <div className="col-md-1" />
            <div className="col-md-2">
              <img
                alt="movie_poster"
                src={
                  movieDetail.poster_path === null
                    ? "/placeholder.png"
                    : `https://image.tmdb.org/t/p/w780${
                        movieDetail.poster_path
                      }`
                }
                className="poster__detail"
              />
            </div>
            <div className="col-md-5">
              <h2 className="movie__title__detail">{movieDetail.title}</h2>
              <h5 className="movie__title__year">
                ({movieDetail.release_date})
              </h5>
              <br />
              <ul>
                <li>
                  <span>Genres: </span>
                  {movieDetail.genres.map((element, index) => {
                    if (index < movieDetail.genres.length - 1) {
                      return movieDetail.genres[index].name + ", ";
                    } else {
                      return movieDetail.genres[index].name;
                    }
                  })}
                </li>
                <li>
                  <span>Duration: </span>
                  {movieDetail.runtime} minutes
                </li>
                <li>
                  <span>Made by: </span>
                  {movieDetail.production_companies.map((element, index) => {
                    if (index < movieDetail.production_companies.length - 1) {
                      return (
                        movieDetail.production_companies[index].name + ", "
                      );
                    } else {
                      return movieDetail.production_companies[index].name;
                    }
                  })}
                </li>
              </ul>
              <br />
              <h6>Overview: </h6>
              <p>{movieDetail.overview}</p>
            </div>
          </div>
          <br />
          {/* <Cast cast={movieDetail.credits.cast} /> */}
        </main>
      </div>
    );
  }
}

export default Detail;
