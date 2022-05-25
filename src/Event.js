import React from "react";
import './Event.css';
import Image1 from "./Images/vaweez.jpg";
import Image2 from "./Images/clg2.jpg";
import Image3 from "./Images/vaweez8.jpg";
import Image4 from "./Images/blog.jpg";
import Image5 from "./Images/clicks.jpg";
import Image6 from "./Images/podcast.jpg";
import Image7 from "./Images/tech.jpg";
import Image8 from "./Images/techspark.jpg";
import Image9 from "./Images/space.jpg";
import Image10 from "./Images/steam.jpg";
import Image11 from "./Images/rotcract.jpg";
import Image12 from "./Images/podcast1.jpg";
import Image13 from "./Images/NSS.jpg";
import Image14 from "./Images/maths.jpg";
import Image15 from "./Images/photography.jpg";
import Image16 from "./Images/UBA.jpg";
import Image17 from "./Images/language.jpg";
import Image18 from "./Images/YRC.jpg";
import Image19 from "./Images/women.jpg";



function Event() {
    return (
        <div className="Event1">
            <h2>Good morning,Name!</h2>
            <p className="sub">Ongoing events</p>
            <div className="img">
                <div className="head">
                    <img className="img1" src={Image1} alt=""></img>
                    <div className="overlay">
                        <div className="text">Vaweez1</div>
                    </div>
                </div>
                <div className="head2">
                    <img className="img2" src={Image2} alt=""></img>
                    <div className="overlay2">
                        <div className="text2" >Vaweez2</div>
                    </div>
                </div>
                <div className="head3">
                    <img className="img3" src={Image3} alt=""></img>
<div className=""></div>
                    <div className="overlay3">
                        <div className="text3" >Vaweez3</div>
                    </div>
                </div>
            </div>
          
<h2>Club</h2>
<div className="club">

<img className="img8" src={Image8} alt=""></img> 
            <img className="img9" src={Image9} alt=""></img> 
            <img className="img10" src={Image10} alt=""></img> 
            <img className="img11" src={Image11} alt=""></img> 
            <img className="img12" src={Image12} alt=""></img> 
            <img className="img13" src={Image13} alt=""></img> 
            <img className="img14" src={Image14} alt=""></img> 

            <img className="img15" src={Image15} alt=""></img> 
            <img className="img16" src={Image16} alt=""></img> 
            <img className="img17" src={Image17} alt=""></img> 
            <img className="img18" src={Image18} alt=""></img> 
            <img className="img19" src={Image19} alt=""></img> 

            {/* 
            <img className="img11" src={Image11} alt=""></img> 
       */}

            </div>

            
            {/* 
            <img className="img13" src={Image13} alt=""></img> 
            <img className="img14" src={Image13} alt=""></img> 
         */}




         
            <div className="Quickies">
                <h2>Quickes</h2>
                <div className="quick">
                    <div className="quick1">
                        <img className="img4" src={Image4}></img>
                        <div className="overlay4">
                            <div className="text4">Blog</div>
                        </div>
                    </div>
                    <div className="quick2">
                        <img className="img5" src={Image5}></img>
                        <div className="overlay5">
                            <div className="text5">Clicks</div>
                        </div>
                    </div>
                    <div className="quick3">
                        <img className="img6" src={Image6}></img>
                        <div className="overlay6">
                            <div className="text6">Podcast</div>
                        </div>
                    </div>
                    <div className="quick4">
                        <img className="img7" src={Image7}></img>
                        <div className="overlay7">
                            <div className="text7">Tech</div>
                        </div>
                    </div>
                </div>
                <div className="evt1">
                    <h1>Name of the Event</h1>
                    <h2>Posters</h2>
                    <div className="img8">
                        <img className="img1" src={Image1} alt=""></img>
                        <img className="img2" src={Image2} alt=""></img>
                        <img className="img3" src={Image3} alt=""></img>

                    </div>
                    <div className="evt2">
                        <h2>Event decription</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur

                            adipiscing elit. Etiam eu turpis molestie,
                            dictum est a, mattis tellus. Sed dignissim,
                            metus nec fringilla accumsan, risus sem
                            sollicitudin lacus, ut interdum tellus elit sed
                            risus. Maecenas eget condimentum velit, sit
                            amet feugiat lectus. Class aptent taciti
                            sociosqu ad litora torquent per conubia
                            nostra, per inceptos himenaeLorem ipsum dolor sit amet, consectetur
                            adipiscing elit. Etiam eu turpis molestie,
                            dictum est a, mattis tellus. Sed dignissim,
                            metus nec fringilla accumsan, risus sem
                            sollicitudin lacus, ut interdum tellus elit sed
                            risus. Maecenas eget condimentum velit, sit
                            amet feugiat lectus. Class aptent taciti
                            sociosqu ad litora torquent per conubia
                            nostra, per inceptos himenaeLorem ipsum dolor sit amet, consectetur
                            adipiscing elit. Etiam eu turpis molestie,
                            dictum est a, mattis tellus. Sed dignissim,
                            metus nec fringilla accumsan, risus sem
                            sollicitudin lacus, ut interdum tellus elit sed
                            risus. Maecenas eget condimentum velit, sit
                            amet feugiat lectus. Class aptent taciti
                            sociosqu ad litora torquent per conubia
                            nostra, per inceptos himenae</p>
                    </div>
                    <h2>Date of Happening</h2>
                    <h3>23.05.2022,Sunday</h3>
                    <h2>Location</h2>
                    <h3>Santhome Auditorium, Mylapore</h3>
                </div>
            </div>
        </div>
    )
}
export default Event;