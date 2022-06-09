import React, { Component } from "react";

import { robots } from "./robots";
import CardList from "./CardList";
import SerachBox from "./SerachBox";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: robots,
      serachField: "",
    };
  }
  onSerachChange = (event) => {
    this.setState({ serachField: event.target.value });
  };
  render() {
    const fliiterRobots = this.state.robots.filter((robots) => {
      return robots.name
        .toLowerCase()
        .includes(this.state.serachField.toLowerCase());
    });
    return (
      <div className="tc">
        <h1 className="f1">RoboFreinds</h1>
        <SerachBox serachChange={this.onSerachChange} />
        <CardList robots={fliiterRobots} />
      </div>
    );
  }
}

export default App;
