import React from "react";
import { useState } from "react";

function Joker() {
  useState();
  const URL = "https://official-joke-api.appspot.com/random_joke";
  const newJoke = async () => {
    const response = await fetch(URL);
    const jsonResponse = await response.json();
    // console.log(URL);
    console.log(jsonResponse.punchline);
  };

  return (
    <div>
      <h1>Jokes</h1>
      <h1>{joke.punchline}</h1>

      <button onClick={newJoke}>New Joke</button>
    </div>
  );
}

export default Joker;
