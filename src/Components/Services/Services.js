import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Row } from 'react-bootstrap';
import ServicesAre from '../ServicesAre/ServicesAre';

import  "./Services.css";
const Services = () => {
const [service,setService]=useState([]);
useEffect(()=>{
    fetch('./service.json')
    .then(res=>res.json())
    .then(data=>setService(data))
},[])
// console.log(service);
    return (
        <div>
               <div className="top-image">
                    <img src="https://www.dailypress.com/resizer/UgDGnhFhRvBpTB3hS_nnTUx0jZo=/1200x0/top/cloudfront-us-east-1.images.arcpublishing.com/tronc/2K2GRXXQSNEYLNGQZGHQB6V2EM.jpg" alt="" />
                  <div className="top-text">
                  <h2>BRITANIA HIGH SCHOOL & COLLAGE</h2>
                  <h4>SINCE : 1999</h4>
                  <p>“Education can get you the only thing that really matters in today’s world—an assigned parking space.” — Gene Perret</p>
                </div>
               </div>
            <div className="container">
                <Row xs={1} md={2} className="g-4">
                    {
                        service.map(serviceIs=><ServicesAre servicesIs={serviceIs}></ServicesAre>)
                    }
                </Row>
            </div>
        </div>
    );
};

export default Services;