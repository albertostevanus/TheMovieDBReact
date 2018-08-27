import React, { Component } from "react";
import Navbar from "../components/navbar";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Cast from "../components/cast";
import Reviews from "../components/reviews";
import "../detail.css";

class Detail extends Component {
  state = {
    movieDetail: {
      genres: [],
      production_companies: [],
      credits: {
        cast: [],
        crew: []
      },
      reviews: {
        results: []
      }
    }
  };

  componentDidMount = () => {
    this.getDetail();
  };

  getDetail = () => {
    const movieDetailURL = `https://api.themoviedb.org/3/movie/${
      this.props.location.state.movieId
    }?api_key=9ada7f6659a104d4bd6d9141d3d2cce3&language=en-US&append_to_response=credits,reviews`;
    fetch(movieDetailURL).then(resp => {
      resp.json().then(res => {
        res.title = res.title.toUpperCase();
        res.overview =
          res.overview.length < 500
            ? res.overview
            : res.overview.substring(0, 510) + "...";
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
        <div className="movie__detail">
          <div className="backdrop">
            <img
              alt="movie_poster"
              src={
                movieDetail.backdrop_path === null
                  ? "/placeholder.png"
                  : `https://image.tmdb.org/t/p/w1280${
                      movieDetail.backdrop_path
                    }`
              }
              className="movie__backdrop"
            />
            <div className="backdrop__overlay" />
          </div>
          <main role="main" className="container-fluid detail__container">
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
              <div className="col-md-8 detail">
                <div className="row">
                  <h2 className="movie__title__detail">{movieDetail.title}</h2>
                  <h5 className="movie__title__year">
                    ({movieDetail.release_date})
                  </h5>
                  <p id="movie__rating">{movieDetail.vote_average} / 10</p>
                </div>
                <div className="row">
                  <ul>
                    <li>
                      <span className="span__detail">Genres: </span>
                      <p>
                        {movieDetail.genres.map((element, index) => {
                          if (index < movieDetail.genres.length - 1) {
                            return movieDetail.genres[index].name + ", ";
                          } else {
                            return movieDetail.genres[index].name;
                          }
                        })}
                      </p>
                    </li>
                    <li>
                      <span className="span__detail">Duration: </span>
                      <p>{movieDetail.runtime} minutes</p>
                    </li>
                    <li>
                      <span className="span__detail">Made by: </span>
                      <p>
                        {movieDetail.production_companies.map(
                          (element, index) => {
                            if (
                              index <
                              movieDetail.production_companies.length - 1
                            ) {
                              return (
                                movieDetail.production_companies[index].name +
                                ", "
                              );
                            } else {
                              return movieDetail.production_companies[index]
                                .name;
                            }
                          }
                        )}
                      </p>
                    </li>
                  </ul>
                </div>
                <div className="row">
                  <h6>Overview: </h6>
                  <p>{movieDetail.overview}</p>
                </div>
              </div>
              <div className="col-md-1" />
            </div>
          </main>
        </div>
        <div className="container-fluid">
          <div className="row tabs">
            <div className="col-md-1" />
            <div className="col-md-10">
              <Tabs>
                <TabList>
                  <Tab>Casts</Tab>
                  <Tab>Reviews</Tab>
                  <Tab>Videos</Tab>
                </TabList>
                <TabPanel>
                  <Cast cast={movieDetail.credits.cast} />
                </TabPanel>
                <TabPanel>
                  <Reviews reviews={movieDetail.reviews.results} />
                </TabPanel>
                <TabPanel>
                  <h2>Any content 3</h2>
                </TabPanel>
              </Tabs>
            </div>
            <div className="col-md-1" />
          </div>
        </div>
      </div>
    );
  }
}

export default Detail;
