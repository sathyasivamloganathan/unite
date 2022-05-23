import React from 'react'
import "./Profile.css";
import {AccountCircleIcon} from '@mui/icons-material/AccountCircle';
function Profile() {
  return (

    <div className='Profile'><h1>Profile</h1>
    <AccountCircleIcon/>
    <div className='name'>
    <h2> full name</h2>
    </div>
    <div className='name1'>
    <h3>dept  section</h3>
    {/* <h3>section</h3> */}
    </div>
 

    <div className='account'>
      <h2>Account settings</h2>
    </div>
    <div className='Edit2'>
    <div className='edit'>
      <h2>Edit Profile</h2>
    </div>
    <div className='Aboutus'>
      <h2>About us</h2>
    </div>
    </div>
    <div className='edit3'>
    <div className='Logout'>
    <h2>Logout</h2>
  </div>
    </div>
  
   

    </div>
  )
}

export default Profile;
