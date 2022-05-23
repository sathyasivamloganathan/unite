import React from "react";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import "./Profile.css";
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import InfoIcon from '@mui/icons-material/Info';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
function Profile() {
    return (
        <div className="Profile">
            <div className="Profile2">
                <div className="Arrow">
                <h1 className="name1">Profile</h1>
                  
                </div>
               
                    < AccountCircleIcon className="icon4"/>

        
                <h2 className="name2">Full name</h2>
                <h2 className="name3">dept/section</h2>
                <div className="Account">
                    <h2 className="Account1">Account settings</h2>
                    <div className="Account2">
                    <div className="edit">
                        <ModeEditIcon />
                        <h2 className="name4">
                            Edit profile
                        </h2>
                    </div>
                    <div className="edit2">
                        <InfoIcon />
                        <h2 className="name5">
                            About Us
                        </h2>
                    </div>
                    </div>





                    <div className="Account3">
                    <div className="edit3">
                        <ModeEditIcon />
                        <h2 className="name6">
                            Version
                        </h2>
                    </div>
                    <div className="edit4">
                        <InfoIcon />
                        <h2 className="name7">
                            Logout
                        </h2>
                    </div>
                    </div>

                
                </div>
            </div>
            <ArrowBackIcon className="icon9"/>  
<NotificationsActiveIcon className="icon10"/>
        </div>
    )
}
export default Profile;