import React from 'react';
// import logo from './logo.svg';
import Square from './Square';
import './App.css';

function App() {
  const pretty = 'Abby'

  return (
    <div className="App">
      <Square propVar={pretty}/>
    </div>
  );
}

export default App;
