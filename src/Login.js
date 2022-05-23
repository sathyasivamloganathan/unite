import React from 'react';
import { TextField } from '@mui/material';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import './Login.css';





function Login() {
  return (
    <div className="Login">
      <div className='log_cont'>
        <h3 className="login-title">Login to GetStarted</h3>

        <img src={require('./unite.png')} alt="" className="unite-logo"></img>

        <div className="entire-field">
            <h4 className="box-title">Enter Email Address</h4>
            <TextField id="outlined-basic" className="field_box" label="User-id" variant="outlined" /><br/>
        </div> 

        <div className="entire-field">
            <h4 className="box-title">Enter Password</h4>
            <TextField id="outlined-basic" className="field_box" label="Password" variant="outlined" style={{fontFamily: 'Montserrat'}} /><br/>
        </div>

        <div className='login-div'>
            <Stack spacing={2} direction="row"></Stack>
            <Button variant="contained" className="login-button" style={{fontFamily: 'Montserrat'}}>Login</Button>
        </div>

        <h6 className="forget-password" >Forgot User-id or Password?</h6>
        
      </div>
      <div className='signin-button'>
            <Stack spacing={2} direction="row"></Stack>
            <Button variant="contained" className="signin-button" style={{fontFamily: 'Montserrat'}} >Sign Up</Button>
      </div>

    </div> 
  );
}

export default Login;