import React from 'react';
// import logo from './logo.svg';
import Grid from '@material-ui/core/Grid';
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
        {<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 250">
          <path fill="#000b76" fill-opacity="1" d="M0,224L30,197.3C60,171,120,117,180,96C240,75,300,85,360,117.3C420,149,480,203,540,224C600,245,660,235,720,208C780,181,840,139,900,144C960,149,1020,203,1080,208C1140,213,1200,171,1260,160C1320,149,1380,171,1410,181.3L1440,192L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path>
        </svg>
          }
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            {
              posizione_in_data.map(
                (righe, index) => 
                <Grid
                  container
                  direction="row"
                  justify="center"
                  alignItems="center"
                  xs="12"
                >
                  <Grid item><span style={{color:"#000b76"}}>{index + 1}</span></Grid>
                    {
                      righe.map(appa => <Grid item><div class="rectangle"><span>{appa}</span></div></Grid>)
                    }
                  </Grid>
                )
            }
          </Grid>
    </header>
    </div>
  );
}

export default App;

        //   {
        //   posizione_in_data.map(
        //     righe => 
        //       <p>
        //         {
        //           righe.map(appa => <div class="rectangle"><span>{appa}</span></div>)
        //         }
        //       </p>
        //     )
        //   } 
        // </p>

