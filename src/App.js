import React from 'react';
// import logo from './logo.svg';
import './App.css';

const appartamenti = [
  [403, 401, 402], 
  [406, 404, 405],
  ["T3", "T1", "T2"],
  ["T6", "T4", "T5"],
  ["T9", "T7", "T8"],
  [103, 101, 102],
  [106, 104, 105],
  [109, 107, 108],
  [203, 202, 201],
  [206, 204, 205],
  [209, 207, 208],
  [303, 301, 302],
  [306, 304, 305],
  ["M9", 307, 308]
];

const oneDay = 24 * 60 * 60 * 1000;
const inizio = new Date(2020, 6, 22);
const oggi = new Date();

function App() {
  const quantiGiorni = (Math.floor(Math.round(Math.abs((inizio - oggi) / oneDay)) / 3) % appartamenti.length - 1);
  let posizione_in_data = new Array(appartamenti.length);
  for (var i = 0; i < posizione_in_data.length; i++) {
    let pos_riga = (quantiGiorni - 1) % 3;
    posizione_in_data[(i + quantiGiorni) % appartamenti.length] = [appartamenti[i][pos_riga], appartamenti[i][(pos_riga + 1) % 3], appartamenti[i][(pos_riga + 2) % 3]];
  }
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
        {posizione_in_data.map(righe => <p>{righe.map(appa => <> {appa}</>)}</p>)}
        </p>
      </header>
    </div>
  );
}

export default App;
