import React, { Component } from "react";

class Reviews extends Component {
  state = {};
  render() {
    if (this.props.reviews.length !== 0) {
      return (
        <React.Fragment>
          <div className="row">
            {this.props.reviews.slice(0, 5).map((element, index) => {
              return (
                <div className="card" key={index}>
                  <div className="card-body">
                    <h3 className="card-title">
                      Review by {this.props.reviews[index].author}
                    </h3>
                    <h6 className="card-subtitle mb-2 text-muted">
                      Written on April 25, 2018
                    </h6>
                    <p className="card-text">
                      {this.props.reviews[index].content}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </React.Fragment>
      );
    } else {
      return <h3>Oops! Seems like there are no review yet.</h3>;
    }
  }
}

export default Reviews;
