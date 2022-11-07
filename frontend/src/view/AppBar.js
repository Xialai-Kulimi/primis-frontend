import { Card, Stack, Button, Typography } from '@mui/material'
import React from 'react';

import API from '../api';



class AppBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = { username: 0, btn_text: '登出', disable: null };
    
    
    // if (this.state.username !== "") {
    //   this.state.btn_text = '登出'
    //   this.state.disable = false
    // }
    // else {
    //   this.state.btn_text = '登入'
    //   this.state.disable = true
    // }
  }
  componentDidMount() {
    let res_username = ''
    const res = API.get_data('auth/me')
    console.log(res)
    res_username = res.username


    this.setState({
      username: res_username
    });
    // let x = 0
    // setInterval(
    //   function () {
    //     x += 1
    //     this.setState({
    //       username: x
    //     });
    //   }.bind(this)
    //   ,1000
    // );
  };
  render() {
    return (
      <Card variant="outlined" style={{ marginTop: "10px", marginBottom: "30px" }}>

        <Stack direction="row-reverse">

          <Button size="large" href="/api/auth/login" >{this.state.btn_text}</Button>
          <Button size="large" varient="text" style={{ color: "white" }} disabled={this.state.disable}>
            {this.state.username}
          </Button>
          <Typography variant='h4' color="primary" flexGrow="1" style={{ marginLeft: "10px" }}>
            PRIMIS
          </Typography>
        </Stack>

      </Card>
    )
  }
}

export default AppBar