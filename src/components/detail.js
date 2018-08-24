import React, { Component } from "react";
import Navbar from "../components/navbar";
import Cast from "../components/cast";
import "../detail.css";

class Detail extends Component {
  state = {
    movieDetail: {
      genres: [],
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
    }?api_key=9ada7f6659a104d4bd6d9141d3d2cce3&language=en-US&append_to_response=credits`;
    fetch(movieDetailURL).then(resp => {
      resp.json().then(res => {
        this.setState({ movieDetail: res });
      });
    });
  };

  render() {
    const movieDetail = this.state.movieDetail;
    return (
      <div>
        <Navbar />
        <main role="main" className="container">
          <div className="row justify-content-center">
            <div className="col-md-4">
              <img
                alt="movie_poster"
                src={`https://image.tmdb.org/t/p/w300${
                  movieDetail.poster_path
                }`}
                style={{ width: 300, height: 450 }}
              />
            </div>
            <div className="col-md-8">
              <h3>{movieDetail.title}</h3>
              <br />
              <ul>
                <li>
                  <span>Release date: </span>
                  {movieDetail.release_date}
                </li>
                <li>
                  <span>Rating: </span>
                  {movieDetail.vote_average}
                </li>
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
                  <span>Overview: </span>
                </li>
                <li>{movieDetail.overview}</li>
              </ul>
            </div>
          </div>
          <br />
          <Cast cast={movieDetail.credits.cast} />
        </main>
      </div>
    );
  }
}

export default Detail;
