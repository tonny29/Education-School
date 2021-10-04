import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Row } from 'react-bootstrap';
import About from '../About/About';
import './AboutAll.css';
const AboutAll = () => {
    const [about,setAbout]=useState([]);
    useEffect(()=>{
        fetch('./servicesAre.json')
        .then(res=>res.json())
        .then(data=>setAbout(data))
    },[])
    return (
        <div>
            <div className="result-text-color">
            <h2>Our Results 1999 t0 2020</h2>
            </div>
            <br />
            <div className="about-all">
                <Row xs={1} md={2} className="g-4">
                {
                    about.map(aboutAll=><About aboutAll={aboutAll}></About>)
                }
                </Row>
            </div>
        </div>
    );
};

export default AboutAll;