import React from 'react';
import { TextField } from '@mui/material';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';



function Login() {
    return ( <
        div className = "Login" >
        <
        div className = 'log_cont' >
        <
        h3 > Log In To Portal < /h3> <
        TextField id = "outlined-basic"
        label = "User-id"
        variant = "outlined" / > < br / >
        <
        TextField id = "outlined-basic"
        label = "Password"
        variant = "outlined" / > < br / >
        <
        Stack spacing = { 2 }
        direction = "row" > < /Stack> <
        Button variant = "contained" > Proceed < /Button> <
        h6 > Forgot User - id or Password ? < /h6> <
        /div> <
        / div> 
    );
}

export default Login;