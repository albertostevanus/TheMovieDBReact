import React, { Component } from "react";
import Navbar from "../components/navbar";
import "../homepage.css";
import NewReleases from "../components/newRelease";
import TopMovies from "../components/topMovies";
import MovieSearchResult from "./movieSearchResult";
import PersonSearchResult from "./personSearchResult";

class Homepage extends Component {
  state = {
    rows: [],
    rowsTop: [],
    rowsSearch: []
  };

  componentDidMount() {
    this.getTopMovie();
    this.getNewMovie();
  }

  getNewMovie = () => {
    const newMovieURL = `https://api.themoviedb.org/3/movie/now_playing?api_key=9ada7f6659a104d4bd6d9141d3d2cce3&language=en-US&page=1`;
    fetch(newMovieURL).then(resp => {
      resp.json().then(res => {
        const results = res.results;
        var newMoviesSliced = results.slice(0, 8);
        this.setState({ rows: newMoviesSliced });
      });
    });
  };

  getTopMovie = () => {
    const topMovieURL = `https://api.themoviedb.org/3/movie/popular?api_key=9ada7f6659a104d4bd6d9141d3d2cce3&language=en-US&page=1`;
    fetch(topMovieURL).then(topResp => {
      topResp.json().then(topRes => {
        const topMovieResults = topRes.results;
        var topMoviesSliced = topMovieResults.slice(0, 8);
        this.setState({ rowsTop: topMoviesSliced });
      });
    });
  };

  searchChangeHandler = e => {
    const searchTerm = e.target.value;
    if (searchTerm !== "") {
      this.performSearch(searchTerm);
    }
    this.setState({ rowsSearch: [] });
  };

  performSearch = searchTerm => {
    const movieUrl =
      `https://api.themoviedb.org/3/search/multi?api_key=9ada7f6659a104d4bd6d9141d3d2cce3&language=en-US&page=1&include_adult=false&query=` +
      searchTerm;
    fetch(movieUrl).then(movieResp => {
      movieResp.json().then(movieRes => {
        const movieResults = movieRes.results;
        this.setState({ rowsSearch: movieResults });
      });
    });
  };

  arrayContains = (ob, arr) => {
    var found = false;
    for (var i = 0; i < arr.length; i++) {
      if (arr[i].media_type === ob) {
        found = true;
        break;
      }
    }
    return found;
  };

  render() {
    return (
      <div>
        <Navbar />
        <main role="main" className="container">
          <div className="input-group md-form form-sm form-2 pl-0">
            <input
              className="form-control py-1 amber-border"
              type="text"
              placeholder="Search"
              aria-label="Search"
              onChange={this.searchChangeHandler}
            />
          </div>
          <br />
          {this.state.rowsSearch.length !== 0 ? (
            <React.Fragment>
              <div className="row">
                {this.arrayContains("movie", this.state.rowsSearch) && (
                  <React.Fragment>
                    <div className="row">
                      <h3>Movie</h3>
                      <hr />
                    </div>
                    <div className="row">
                      <MovieSearchResult movieResults={this.state.rowsSearch} />
                    </div>
                  </React.Fragment>
                )}
                {this.arrayContains("person", this.state.rowsSearch) && (
                  <React.Fragment>
                    <div className="row">
                      <h3>Actor / Actresses</h3>
                      <hr />
                    </div>
                    <div className="row">
                      <PersonSearchResult
                        personResults={this.state.rowsSearch}
                      />
                    </div>
                  </React.Fragment>
                )}
              </div>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <div className="col-md-6">
                <h3>Popular Movies</h3>
                <hr />
              </div>
              <div className="row">
                <TopMovies topMovies={this.state.rowsTop} />
              </div>
              <br />
              <div className="col-md-6">
                <h3>Now Playing</h3>
                <hr />
              </div>
              <div className="row">
                <NewReleases newMovies={this.state.rows} />
              </div>
            </React.Fragment>
          )}
        </main>
      </div>
    );
  }
}

export default Homepage;
