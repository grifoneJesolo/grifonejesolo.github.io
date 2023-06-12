import React from 'react';
import logo from './grifone_bianco.png';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import './App.css';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const appartamenti = [
  [203, 202, 201], 
  [206, 204, 205],
  [209, 207, 208],
  [303, 301, 302],
  [306, 304, 305],
  ["M9", 307, 308],
  [403, 401, 402],
  [406, 404, 405],
  ["T3", "T1", "T2"],
  ["T6", "T4", "T5"],
  ["T9", "T7", "T8"],
  [103, 101, 102],
  [106, 104, 105],
  [109, 107, 108],
];

const oneDay = 24 * 60 * 60 * 1000;
const inizio = new Date(2023, 6, 31);
const oggi = new Date();

function App() {
  const [open, setOpen] = React.useState(oggi.getMonth() >= 8 || oggi.getMonth() < 5);
  const quantiGiorni = (Math.floor(Math.floor(Math.abs((inizio - oggi) / oneDay)) / 4) % appartamenti.length);
  let posizione_in_data = new Array(appartamenti.length);

  const handleClose = () => {
    setOpen(false);
  };

  for (var i = 0; i < posizione_in_data.length; i++) {
    let pos_riga = quantiGiorni * 2;
    posizione_in_data[(i + quantiGiorni) % appartamenti.length] = [appartamenti[i][pos_riga%3], appartamenti[i][(pos_riga + 1)%3], appartamenti[i][(pos_riga + 2)%3]];
  }

  return (
    <div className="App">
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Posizione libera"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Dal 3 settembre al 31 maggio gli ombrelloni non sono assegnati.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" autoFocus>
            Ok
          </Button>
        </DialogActions>
      </Dialog>
      <AppBar position="static" style={{ background: '#2196f3' }} elevation={0}>
        <Toolbar>
        <img src={logo} className="App-logo" alt="logo" />
        </Toolbar>
      </AppBar>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 250">
        <path fill="#2196f3" fillOpacity="1" d="M0,224L30,197.3C60,171,120,117,180,96C240,75,300,85,360,117.3C420,149,480,203,540,224C600,245,660,235,720,208C780,181,840,139,900,144C960,149,1020,203,1080,208C1140,213,1200,171,1260,160C1320,149,1380,171,1410,181.3L1440,192L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path>
      </svg>
      <header className="App-header">
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
                  key={index+100}
                >
                  <Grid item key={index}><p style={{color:"#fffff", margin:"1vw"}} key={index}>{index + 1}</p></Grid>
                    {
                      righe.map(appa => <Grid item key={appa}><div className="rectangle" key={appa}><span>{appa}</span></div></Grid>)
                    }
                  </Grid>
                )
            }
          </Grid>
    </header>
    <footer style={{marginTop:"20px"}}>
      <Grid 
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={3}
      >
        <Grid item><div className="albero"/></Grid>
        <Grid item><div className="albero"/></Grid>
        <Grid item><div className="albero"/></Grid>
        <Grid item><div className="albero"/></Grid>
      </Grid>
      <Grid 
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={1}
      >
        <Grid item xs><p>_ _ _ _ _ _ _ _</p></Grid>
        <Grid item xs><p style={{color:"#676767", fontSize:13}}>Giulio 2020 - #{quantiGiorni}</p></Grid>
        <Grid item xs><p>_ _ _ _ _ _ _ _</p></Grid>
      </Grid>
    </footer>
    </div>
  );
}

export default App;

