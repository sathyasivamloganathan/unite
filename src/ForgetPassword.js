import React from 'react';
import { TextField } from '@mui/material';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import './ForgetPassword.css';


function ForgetPassword() {
    return(
        <div className="Login">
        <div className='log_cont'>
          <h3 className="login-title">Forget Password !</h3>
  
          <img src={require('./unite.png')} alt="" className="unite-logo"></img>
        
          <div className="entire-field">
              <h4 className="box-title">Enter Email Address</h4>
              <TextField id="outlined-basic" className="field_box" label="Enter Email id....." variant="outlined" color="secondary" /><br/>
          </div>
        </div>


        <div className='signin-button'>
              <Stack spacing={2} direction="row"></Stack>
              <Button variant="contained" className="signin-button" style={{fontFamily: 'Montserrat'}} >Submit</Button>
        </div>
          
      </div> 
    )
}

export default ForgetPassword;