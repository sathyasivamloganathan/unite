import React from 'react';
import './Profile.css';
import { GrAttachment } from "react-icons/gr";
import { GrAndroid } from "react-icons/gr";
import { GrSnapchat } from "react-icons/gr";


function Profile(){
    return(

        <div class="col">
             <img src={require('./unite.png')} style={{borderRadius:'100px'}} alt="unite" class="img-thumbnail"/>
            
            <div class="col student">
                <p>Name of the student</p>
                <p>Department</p>
            </div>
            
            
            
            <div className="button-group">
                <button type="button" class="btn btn-outline-primary " id="button" ><GrAttachment style={{marginRight: '10px',fontSize:'20px'}}/>Edit Profile </button>
                <button type="button" class="btn btn-outline-primary " id="button" ><GrAndroid style={{marginRight: '10px',fontSize:'20px'}}/>Version </button>
                <button type="button" class="btn btn-outline-primary " id="button" ><GrSnapchat style={{marginRight: '10px',fontSize:'20px'}}/>About</button>
                
            </div>
        </div>
    )
}

export default Profile;