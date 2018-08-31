import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../homepage.css";

class PersonSearchResult extends Component {
  state = {};

  render() {
    return this.props.personResults.map(result => {
      return (
        <React.Fragment>
          <div className="col-md-3" key={result.id}>
            <div className="container">
              <div className="content">
                {/* <Link
                to={{
                  pathname: `/detail/${result.id}`,
                  state: { movieId: result.id }
                }}
              > */}
                <div className="content-overlay" />
                <img
                  className="movie__poster"
                  alt={result.name}
                  src={
                    result.profile_path === null
                      ? "/placeholder.png"
                      : `https://image.tmdb.org/t/p/w780${result.profile_path}`
                  }
                />
                <div className="content-details">
                  <h3 className="content-title">{result.name}</h3>
                </div>
                {/* </Link> */}
              </div>
            </div>
            <div className="home-content">
              {/* <Link
              to={{
                pathname: `/detail/${result.id}`,
                state: { movieId: result.id }
              }}
              className="title-link"
            > */}
              {result.name}
              {/* </Link> */}
            </div>
          </div>
        </React.Fragment>
      );
    });
  }
}

export default PersonSearchResult;
