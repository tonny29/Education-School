import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Row } from 'react-bootstrap';
import ServicesAre from '../ServicesAre/ServicesAre';

import  "./Services.css";
const Services = () => {
const [service,setService]=useState([]);
useEffect(()=>{
    fetch('./servicesAre.json')
    .then(res=>res.json())
    .then(data=>setService(data))
},[])
console.log(service);
    return (
        <div className="container">
            <Row xs={1} md={2} className="g-4">
                {
                    service.map(serviceIs=><ServicesAre ser={serviceIs}></ServicesAre>)
                }
            </Row>
        </div>
    );
};

export default Services;