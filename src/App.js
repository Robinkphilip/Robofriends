import React, { Component } from "react";

import CardList from "./CardList";
import SerachBox from "./SerachBox";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      serachField: "",
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((respons) => respons.json())
      .then((user) => {
        this.setState({ robots: user });
      });
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
    if (this.state.robots.length === 0) {
      return <h1>wait its Loading....</h1>;
    } else {
      return (
        <div className="tc">
          <h1 className="f1">RoboFreinds</h1>
          <SerachBox serachChange={this.onSerachChange} />
          <CardList robots={fliiterRobots} />
        </div>
      );
    }
  }
}

export default App;
