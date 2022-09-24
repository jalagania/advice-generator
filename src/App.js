import React from "react";
import { useState } from "react";
import "./App.css";
import dice from "./images/icon-dice.svg";
import divider from "./images/pattern-divider-desktop.svg";

function App() {
  const [advice, setAdvice] = useState("Click a dice to get a random advice");
  const [adviceID, setAdviceID] = useState("");

  async function handleAdviceButton() {
    const response = await fetch("https://api.adviceslip.com/advice");
    if (!response.ok) {
      setAdvice("Error! Failed to load data");
      return;
    }
    const data = await response.json();

    setAdviceID(data.slip.id);
    setAdvice(data.slip.advice);
  }

  return (
    <div className="container">
      <p className="advice-number">{`Advice #${adviceID}`}</p>
      <p className="advice-quote">{advice}</p>
      <img className="divider" src={divider} alt="divider pattern" />
      <button className="btn-dice" onClick={handleAdviceButton}>
        <img src={dice} alt="dice logo" />
      </button>
    </div>
  );
}

export default App;
