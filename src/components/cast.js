import React, { Component } from "react";
import "../components/cast.css";

class Cast extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="row">
          {this.props.cast.slice(0, 6).map((element, index) => {
            return (
              <div className="col-md-2" key={index}>
                <figure>
                  <img
                    alt="Cast_photo"
                    src={`https://image.tmdb.org/t/p/w300${
                      this.props.cast[index].profile_path
                    }`}
                  />
                  <figcaption>{this.props.cast[index].name}</figcaption>
                </figure>
              </div>
            );
          })}
        </div>
      </React.Fragment>
    );
  }
}

export default Cast;
