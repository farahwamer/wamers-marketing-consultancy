import { React, useState } from "react";
import "../styles/Home.css";
import background from "../assets/home-bg.png";
import Navbar from "./Navbar";

const Home = () => {
  const wordCycle = ["business", "service", "product", "idea", "dream"];
  const [word, setWord] = useState({
    index: 0,
    word: wordCycle[0],
  });
  var intervalId = null;

  const switchWord = () => {
    setWord((prev) => {
      if (prev.index === 4) {
        setWord({ index: 0, word: wordCycle[0] });
      } else {
        setWord({ index: prev.index + 1, word: wordCycle[prev.index + 1] });
      }
    });
  };

  const startCycle = () => {
    intervalId = setInterval(switchWord, 2000);
  };

  const stopCycle = () => {
    clearInterval(intervalId);
    setWord({ index: 0, word: wordCycle[0] });
  };

  return (
    <div
      className="home-container"
      style={{ backgroundImage: `url(${background})` }}
      id="home"
      onLoad={startCycle}
      // onLoad={() => setTimeout(stopCycle, 20000)}
    >
      <Navbar />
      <div className="home-content-container">
        <h1 className="title">
          Take your <mark>{word.word}</mark> <br></br>to the next level.
        </h1>
        <a href="#contact">
          <button className="cta-btn">Get started</button>
        </a>
      </div>
    </div>
  );
};

export default Home;
