import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Row } from 'react-bootstrap';
import ServiceDetailAre from '../ServiceDetailAre/ServiceDetailAre';
import './ServiceDetail.css';


const ServiceDetail = () => {
    const [servicedetailAre,setServicedetailAre]=useState([]);
    useEffect(()=>{
        fetch('/servicesAre.json')
        .then(res=>res.json())
        .then(data=>setServicedetailAre(data))
    },[]);
    return (
        <div className="serviceAll">
            <div className="serviceAll-container">
                <Row xs={1} md={1} className="g-4">
                {
                    servicedetailAre.map(serviceAll=><ServiceDetailAre serviceAll={serviceAll}></ServiceDetailAre>)
                }
                </Row>
            </div>
        </div>
    );
};

export default ServiceDetail;