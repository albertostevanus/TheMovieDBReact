import React, { Component } from "react";

class Cast extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-md-12">
            <h5>Casts</h5>
          </div>
        </div>
        <div className="row justify-content-center">
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
