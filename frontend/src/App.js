import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid'

import AppBar from './view/AppBar';
import Caption from './view/Caption';
import Surrounding from './view/Surrounding';
import Entities from './view/Entities';
import Status from './view/Status';

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
