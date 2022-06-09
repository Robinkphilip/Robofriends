import React, { Component } from "react";

import CardList from "../componets/CardList";
import SerachBox from "../componets/SerachBox";
import "./App.css";
import Scroll from "../componets/Scroll";

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
    const { robots, serachField } = this.state;
    const fliiterRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(serachField.toLowerCase());
    });
    return !robots.length ? (
      <h1 className="tc">wait its Loading....</h1>
    ) : (
      <div className="tc">
        <h1 className="f1">RoboFreinds</h1>
        <SerachBox serachChange={this.onSerachChange} />
        <Scroll>
          <CardList robots={fliiterRobots} />
        </Scroll>
      </div>
    );
  }
}

export default App;
