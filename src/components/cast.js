import React, { Component } from "react";
import "../components/cast.css";

class Cast extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="row casts">
          {this.props.cast.slice(0, 6).map((element, index) => {
            return (
              <div className="col-md-2" key={index}>
                <figure>
                  <img
                    alt="Cast_photo"
                    // src={`https://image.tmdb.org/t/p/w300${
                    //   this.props.cast[index].profile_path
                    // }`}
                    src={
                      this.props.cast[index].profile_path === null
                        ? "/placeholder.png"
                        : `https://image.tmdb.org/t/p/w780${
                            this.props.cast[index].profile_path
                          }`
                    }
                  />
                  <figcaption style={{ fontWeight: "bold" }}>
                    {this.props.cast[index].name}
                  </figcaption>
                  <p>{this.props.cast[index].character}</p>
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
