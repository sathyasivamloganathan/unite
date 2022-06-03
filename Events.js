import React, { useEffect } from "react";
import Image1 from "./Images/vaweez.jpg";
import Image2 from "./Images/clg2.jpg";
import Image3 from "./Images/vaweez8.jpg";
import Image4 from "./Images/blog.jpg";
import Image5 from "./Images/clicks.jpg";
import Image6 from "./Images/podcast.jpg";
import Image7 from "./Images/tech.jpg";
import {Link} from 'react-router-dom';
import {useState} from 'react';
import Clubcard from "./clubcard";
import axios from "axios";
const fetchHandler=async()=>{
    return await axios.get(URL).then((res)=>res.data)
}
function Events() {
    const [events,setevents]=useState();
    useEffect(()=>{
        fetchHandler().then(data=>setevents(data))
    });
    console.log(events);
    const styling_img='sm:w-96 sm:h-36 rounded ml-3 h-24 mt-10 w-full';
    const styling_text='ml-10'
    return (
        <div>
            <h2 className="font-bold ml-36 text-2xl sm:ml-96 sm:pl-60">Hi Name!</h2>
            <p className="mt-5 text-xl ml-3 absolute font-bold">Ongoing events</p>
            <div className="flex flex-row gap-4 snap-x mt-5">
                <Link to='eventdetails'>
                <div className="flex-1 snap-center">
                    <img className={styling_img} src={Image1} alt=""></img>
                        <div className={styling_text}>Vaweez1</div>
                </div>
                </Link>
                <Link to='eventdetails'>
                <div className="flex-1 snap-center">
                    <img className={styling_img} src={Image2} alt=""></img>
                        <div className={styling_text} >Vaweez2</div>
                </div>
                </Link>
                <Link to='eventdetails'>
                <div className="flex-1 snap-center">
                    <img className={styling_img} src={Image3} alt=""></img>
                        <div className={styling_text}>Vaweez3</div>
                </div>
                </Link>
            </div>
            <h1 className="mt-5 text-xl ml-3 absolute font-bold">Clubs</h1>
            <div className="flex flex-row gap-20 overflow-scroll">
                <Clubcard className='flex-1'/>
                <Clubcard className='flex-1'/>
                <Clubcard className='flex-1'/>
                <Clubcard className='flex-1'/>
                <Clubcard className='flex-1'/>
                <Clubcard className='flex-1'/>
                <Clubcard className='flex-1'/>
                <Clubcard className='flex-1'/>
                <Clubcard className='flex-1'/>
                <Clubcard className='flex-1'/>
                <Clubcard className='flex-1'/>
                <Clubcard className='flex-1'/>
            </div>
            <div className="text-xl absolute mt-32">
                <h2 className="mt-6 ml-3">Quickes</h2>
                <div className="flex flex-row gap-1">
                    <Link to='/blogs'>
                    <div className="flex-1 ml-3">
                        <img className="mt-4 w-48 h-32 rounded" src={Image4}></img>
                            <div className="text4">Blog</div>
                    </div>
                    </Link>
                    <div className="flex-1">
                        <img className="mt-4 rounded h-32" src={Image5}></img>
                        <div>
                            <div>Clicks</div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="flex flex-row gap-2 mt-2">
                        <div className="flex-1 ml-3">
                            <img className="rounded" src={Image6}></img>
                            <div className="overlay6">
                                <div className="text6">Podcast</div>
                            </div>
                        </div>
                        <div className="flex-1 rounded">
                            <img className="img7" src={Image7}></img>
                            <div className="overlay7">
                                <div className="text7">Tech</div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}
export default Events;