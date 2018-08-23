import React, { Component } from "react";
import Navbar from "../components/navbar";
import "../homepage.css";
import NewReleases from "../components/newRelease";
import TopMovies from "../components/topMovies";

class Homepage extends Component {
  state = {
    rows: [],
    rowsTop: []
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

  render() {
    return (
      <div>
        <Navbar />
        <main role="main" className="container">
          <div className="col-md-6">
            <h3>Top Movies</h3>
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
        </main>
      </div>
    );
  }
}

export default Homepage;
