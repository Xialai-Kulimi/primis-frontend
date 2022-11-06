import {Card, Stack, Button, Typography} from '@mui/material'


function AppBar(prop){
    var username = prop.username
    var btn_text = ''
    var disable = null
    if (username !== "") {
        btn_text = '登出' 
        disable = false
    }
    else {
        btn_text = '登入'
        disable = true
    }

    return (
        <Card variant="outlined" style={{ marginTop: "10px", marginBottom: "30px"}}>

          <Stack direction="row-reverse">

            <Button size="large" href="/api/auth/login" >{btn_text}</Button>
            <Button size="large" varient="text" style={{ color: "white" }} disabled={disable}>
              {username}
            </Button>
            <Typography variant='h4' color="primary" flexGrow="1" style={{marginLeft: "10px"}}>
          PRIMIS
        </Typography>
          </Stack>

        </Card>
    )
}

export default AppBar