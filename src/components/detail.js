import React, { Component } from "react";
import Navbar from "../components/navbar";
import Cast from "../components/cast";

class Detail extends Component {
  state = {
    newMovieDetail: {
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
    const newDetailURL = `https://api.themoviedb.org/3/movie/${
      this.props.location.state.newDetailId
    }?api_key=9ada7f6659a104d4bd6d9141d3d2cce3&language=en-US&append_to_response=credits`;
    fetch(newDetailURL).then(resp => {
      resp.json().then(res => {
        this.setState({ newMovieDetail: res });
      });
    });
  };

  render() {
    const newMovieDetail = this.state.newMovieDetail;
    return (
      <div>
        <Navbar />
        <main role="main" className="container">
          <div className="row justify-content-center">
            <div className="col-md-4">
              <img
                alt="movie_poster"
                src="https://image.tmdb.org/t/p/w300/xqECHNvzbDL5I3iiOVUkVPJMSbc.jpg"
                style={{ width: 300, height: 450 }}
              />
            </div>
            <div className="col-md-8">
              <h3>{newMovieDetail.title}</h3>
              <br />
              <span>Release date: </span>
              {newMovieDetail.release_date}
              <br />
              <span>Rating: </span>
              {newMovieDetail.vote_average}
              <br />
              <span>Genres: </span>
              {newMovieDetail.genres.map((element, index) => {
                if (index < newMovieDetail.genres.length - 1) {
                  return newMovieDetail.genres[index].name + ", ";
                } else {
                  return newMovieDetail.genres[index].name;
                }
              })}
              <br />
              <span>Overview: </span>
              <br />
              {newMovieDetail.overview}
            </div>
          </div>
          <br />
          <Cast cast={newMovieDetail.credits.cast} />
        </main>
      </div>
    );
  }
}

export default Detail;
