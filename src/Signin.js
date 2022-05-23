import React from 'react';
import { TextField } from '@mui/material';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import './Signin.css';



// import { BiGroup } from "react-icons/bi";

function Signin() {
    return (
      <div className="Login">
        <div className='log_cont'>
          <h3 className="login-title">Signin to GetStarted</h3>
  
          <img src={require('./unite.png')} alt="" className="unite-logo"></img>
        

          <div className="entire-field">
              <h4 className="box-title">Enter your name</h4>
              <TextField id="outlined-basic" className="field_box" label="Name" variant="outlined" color="secondary" /><br/>
              
          </div> 
         

          <div className="entire-field">
              <h4 className="box-title">Enter Email Address</h4>
              <TextField id="outlined-basic" className="field_box" label="User-id" variant="outlined" color="secondary" /><br/>
          </div> 
  
          <div className="entire-field">
              <h4 className="box-title">Enter Password</h4>
              <TextField id="outlined-basic" className="field_box" label="Password" type="password" variant="outlined" color="secondary" style={{fontFamily: 'Montserrat'}} /><br/>
          </div>

          <div className="entire-field">
              <h4 className="box-title">Re-Enter Password</h4>
              <TextField id="outlined-basic" className="field_box" label="Password" type="password" variant="outlined" color="secondary" style={{fontFamily: 'Montserrat'}} /><br/>
          </div>
  
          
        </div>
        <div className='signin-button'>
              <Stack spacing={2} direction="row"></Stack>
              <Button variant="contained" className="signin-button" style={{fontFamily: 'Montserrat'}} >Sign Up</Button>
        </div>
          
      </div> 
    );
  }
  
  export default Signin;