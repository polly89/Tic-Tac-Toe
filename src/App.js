import React, { useState } from 'react';
// import logo from './logo.svg';
import Square from './Square';
import './App.css';

const App = (props) => {
  const [squares, setSquares] = useState(["", "", "", "", "", "", "", "", ""]);
  const [player, setPlayer] = useState(true);

  return (
    <div className="App">
      <Square
      squares={squares}
      setSquares={setSquares}
      player={player}
      setPlayer={setPlayer}
    />
    </div>
  );
}

export default App;
