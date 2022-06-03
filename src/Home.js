import React from "react";
import { Carousel } from 'react-bootstrap';
import { Navbar,  Container } from 'react-bootstrap';
import { BiLogOut } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import './Home.css';

function Home(){
    return(

        <div>

            <Navbar id='navigation-bar'>
            <Container>
                <Navbar.Brand style={{fontFamily:'Montserrat'}}>Unite</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                        <button type="button" class="btn btn-outline-primary " id="button" style={{fontFamily:'Montserrat'}} ><CgProfile style={{marginRight: '10px',fontSize:'20px'}} />Profile</button>
                        <button type="button" class="btn btn-outline-primary " id="button" style={{fontFamily:'Montserrat'}}><BiLogOut style={{marginRight: '10px',fontSize:'20px'}}/>Logout</button>
                </Navbar.Text>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        <div>
           <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={require('./carousel-1.jpg')}
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>On going events</h3>
                <p>First slide label</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={require('./carousel-2.jpg')}
                alt="Second slide"
                />

                <Carousel.Caption>
                <h3>On going events</h3>
                <p>Second slide label</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={require('./carousel-4.jpg')}
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3>On going events</h3>
                <p>Third slide label</p>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
        </div>


        
        <p className="club-title">Clubs</p>
        <div className="col clubs"> 
            <div><img src={require('./unite.png')}  alt="unite" className="clubs-logo"></img></div>
            <div><img src={require('./unite.png')}  alt="" className="clubs-logo"></img></div>
            <div><img src={require('./unite.png')}  alt="" className="clubs-logo"></img></div>
            <div><img src={require('./unite.png')}  alt="" className="clubs-logo"></img></div>
            <div><img src={require('./unite.png')}  alt="" className="clubs-logo"></img></div>
            <div><img src={require('./unite.png')}  alt="" className="clubs-logo"></img></div>
        </div>

        <p className="club-title">Quickies</p>
        <div className='quickies'>
            <div><img src={require('./unite.png')}  alt="" className="quickies-tab"></img><p className="quickies-title">Blogs</p></div>
            <div><img src={require('./unite.png')}  alt="" className="quickies-tab"></img><p className="quickies-title">Clicks</p></div>
            <div><img src={require('./unite.png')}  alt="" className="quickies-tab"></img><p className="quickies-title">Join us</p></div>
            <div><img src={require('./unite.png')}  alt="" className="quickies-tab"></img><p className="quickies-title">From us</p></div>
        </div>
        </div>
    )
}

export default Home;

