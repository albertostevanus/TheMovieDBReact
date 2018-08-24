import React, { Component } from "react";
import Navbar from "../components/navbar";
import "../homepage.css";
import NewReleases from "../components/newRelease";
import TopMovies from "../components/topMovies";
import SearchResult from "../components/searchResult";

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
    if (searchTerm != "") {
      this.performSearch(searchTerm);
    }
    this.setState({ rowsSearch: [] });
  };

  performSearch = searchTerm => {
    const movieUrl =
      `https://api.themoviedb.org/3/search/movie?api_key=9ada7f6659a104d4bd6d9141d3d2cce3&language=en-US&page=1&query=` +
      searchTerm;
    fetch(movieUrl).then(movieResp => {
      movieResp.json().then(movieRes => {
        const movieResults = movieRes.results;
        this.setState({ rowsSearch: movieResults });
      });
    });
  };

  render() {
    console.log(this.state.rowsSearch);
    return (
      <div>
        <Navbar />
        <main role="main" className="container">
          <div className="input-group md-form form-sm form-2 pl-0">
            <input
              className="form-control my-0 py-1 amber-border"
              type="text"
              placeholder="Search"
              aria-label="Search"
              onChange={this.searchChangeHandler}
            />
          </div>
          <br />
          {this.state.rowsSearch.length != 0 ? (
            <React.Fragment>
              <div className="col-md-6">
                <h3>Search Result</h3>
                <hr />
              </div>
              <div className="row">
                <SearchResult movieResults={this.state.rowsSearch} />
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
