import React from 'react';
//import { TextField } from '@mui/material';
//import Stack from '@mui/material/Stack';
//import Button from '@mui/material/Button';
import './Events.css';

function Events() {
    return(
        <div className='col'>
            
            <div className="col">
                <div className='event-name'>Vawez</div>
            </div>

            <div className='col image'>
                <div className='event-img'><img src={require('./events-img-1.jpg')} alt="" className='event-img'></img></div>
                <div className='event-img'><img src={require('./events-img-2.jpg')} alt="" className='event-img'></img></div>
            </div>
           

            <p className='Event_description'>
                Event Description
            </p>

            <p className="description">Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.</p>

            <p className='date-title'>
                Date of happening
            </p>

            <p className='date'>24.04.2022, Sunday</p>
        
            <p className="location-title">Location</p>

            <p className='location'>Santhome</p>

            <div className='register'><button type="button" class="btn btn-primary">Register</button></div>
        </div>
        

       
    )
}

export default Events;