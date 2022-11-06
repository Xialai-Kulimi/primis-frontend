import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid'

import AppBar from './view/AppBar';
import Caption from './view/Caption';
import Surrounding from './view/Surrounding';
import Entities from './view/Entities';
import Status from './view/Status';

// let connect_url = 'ws://'+window.location.host+'/api/ws'
let connect_url = "ws://localhost:8000/api/ws"
console.log(connect_url)

var connection = new WebSocket(connect_url);
connection.onopen = (event) => {
	// do something here
  console.log(event)
  connection.send(87)
} 


function App() {
  return (
    <Container>
      <AppBar username="asdf"></AppBar>
      <Grid container rowSpacing="3px">
        <Grid lg="6" md="12" sm="12"  xs="12">
          <Caption />
        </Grid>
        <Grid lg="6" md="12" sm="12"  xs="12">
          <Surrounding />
        </Grid>
        <Grid lg="10" md="10" sm="12"  xs="12">
          <Entities />
        </Grid>
        <Grid lg="2" md="2" sm="12"  xs="12">
          <Status />
        </Grid>
      </Grid>
    </Container >



  );
}

export default App;
