import React, { Component } from "react";
import "./App.css";
import Router from "./components/router";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faStroopwafel } from "@fortawesome/free-solid-svg-icons";

class App extends Component {
  render() {
    library.add(faStroopwafel);
    return <Router />;
  }
}

export default App;
