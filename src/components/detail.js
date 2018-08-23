import React, { Component } from "react";
import Navbar from "../components/navbar";

class Detail extends Component {
  state = {};
  render() {
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
              <h3>The Meg</h3>
              <br />
              <p>Release date: </p>
              <p>Rating: </p>
              <p>Vote Count: </p>
              <p>Genres: </p>
              <p>Overview: </p>
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-md-12">
              <h5>Casts</h5>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-2">
              <img
                alt="Cast_photo"
                src="https://image.tmdb.org/t/p/w300/PhWiWgasncGWD9LdbsGcmxkV4r.jpg"
              />
            </div>
            <div className="col-md-2">
              <img
                alt="Cast_photo"
                src="https://image.tmdb.org/t/p/w300/PhWiWgasncGWD9LdbsGcmxkV4r.jpg"
              />
            </div>
            <div className="col-md-2">
              <img
                alt="Cast_photo"
                src="https://image.tmdb.org/t/p/w300/PhWiWgasncGWD9LdbsGcmxkV4r.jpg"
              />
            </div>
            <div className="col-md-2">
              <img
                alt="Cast_photo"
                src="https://image.tmdb.org/t/p/w300/PhWiWgasncGWD9LdbsGcmxkV4r.jpg"
              />
            </div>
            <div className="col-md-2">
              <img
                alt="Cast_photo"
                src="https://image.tmdb.org/t/p/w300/PhWiWgasncGWD9LdbsGcmxkV4r.jpg"
              />
            </div>
            <div className="col-md-2">
              <img
                alt="Cast_photo"
                src="https://image.tmdb.org/t/p/w300/PhWiWgasncGWD9LdbsGcmxkV4r.jpg"
              />
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-2">
              <p style={{}}>Jason Statham</p>
            </div>
            <div className="col-md-2">
              <p>Jason Statham</p>
            </div>
            <div className="col-md-2">
              <p>Jason Statham</p>
            </div>
            <div className="col-md-2">
              <p>Jason Statham</p>
            </div>
            <div className="col-md-2">
              <p>Jason Statham</p>
            </div>
            <div className="col-md-2">
              <p>Jason Statham</p>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default Detail;
