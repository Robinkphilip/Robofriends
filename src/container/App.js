import React, { useState, useEffect } from "react";

import CardList from "../components/CardList";
import SerachBox from "../components/SerachBox";
import "./App.css";
import Scroll from "../components/Scroll";

function App() {
  const [robots, setRobots] = useState([]);
  const [serachField, setSerachField] = useState("");
  // componentDidMount() {
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((respons) => respons.json())
  //     .then((user) => {
  //       this.setState({ robots: user });
  //     });
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((respons) => respons.json())
      .then((user) => {
        setRobots(user);
      });
  }, []);
  const onSerachChange = (event) => {
    setSerachField(event.target.value);
  };

  const fliiterRobots = robots.filter((robot) => {
    return robot.name.toLowerCase().includes(serachField.toLowerCase());
  });
  return !robots.length ? (
    <h1 className="tc">wait its Loading....</h1>
  ) : (
    <div className="tc">
      <h1 className="f1">RoboFreinds</h1>
      <SerachBox serachChange={onSerachChange} />
      <Scroll>
        <CardList robots={fliiterRobots} />
      </Scroll>
    </div>
  );
}

export default App;
